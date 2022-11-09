'use strict'
const path = require('path');
import { app, protocol, BrowserWindow,ipcMain } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
const isDevelopment = process.env.NODE_ENV !== 'production'

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

let mainWindow;

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame:false,
    resizable:true,
    webPreferences: {
      webSecurity:false,
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload:path.join(app.getAppPath(), 'preload2.js')
    }
  })

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }

  return win;
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  mainWindow = createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }





}

import {search,fragman,getAMovieResolutions,getAMovieSource} from './core/actions'
import {downloand} from './core/stream'
ipcMain.on("searchMovie",async (event,movie) => {
  
  if(movie.length > 0){
    const list = await search(movie);
    event.sender.send('movies', list)
  }

})

ipcMain.on("fragmanFinder",async (event,url) => {
  if(url.length > 0){
    const f = await fragman(url);
    event.sender.send('fragmanFinder', f)
  }
})

ipcMain.on("get-movie-sources",async (event,url) => {
  if(url.length > 0){
    const movieResources = await getAMovieResolutions(url);
    event.sender.send("get-movie-sources", movieResources);
  }
})


ipcMain.on("downloand",async (event,field) => {
   const {source,filename} = field;

   const filePath = path.join(path.dirname(path.dirname(__filename)), "public",'videos',`${filename}.mp4`)

   await downloand(source,filePath,(percent, second) => {
      event.sender.send("downloand-progress",{percent,second});
   },() => {
      // başarılı şekilde yüklendi
      event.sender.send("downloand-over",{
        filename:`${filename}.mp4`
      })
   })
   
})
ipcMain.on("movieSource",async (event,json) => {

  const source = await getAMovieSource(json.link);
  event.sender.send("movieSource",{source,poster:json.poster});

});









