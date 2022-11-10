import { createStore } from 'vuex'
const { settings } = require('../.././setting');

const localStorageKeys = {
  movieList:'movies',
  favories:'movie.favories',
  lang:'lang'
};


const getLocalStorageObject = (key, deff = null) => {
  const json = localStorage.getItem(key);
  if(json){
    try{
      return JSON.parse(json);
    }catch{
      return deff;
    }
  }
  return deff;
}

export default createStore({
  state: {
    language: localStorage.getItem(localStorageKeys.lang) || settings.defaultLanguage,
    hls:{
      source:'',
      poster:''
    },
    loading:{
      show:false,
      text:''
    },
    fragman:{
      url:'',
      show:false,
      checking:false,
    },
    search:{
      text:'',
      searching:false
    },
    favories:getLocalStorageObject(localStorageKeys.favories, []),
    movies:getLocalStorageObject(localStorageKeys.movieList,[])
  },
  getters:{
    Loading(state){
      return state.loading
    },
    Fragman(state){
      return state.fragman
    },
    Search(state){
      return state.search;
    },
    SearchText(state){
      return state.search.text;
    },
    Movies(state){
      return state.movies;
    },
    Hls(state){
      return state.hls;
    },
    language(state){
      return state.language;
    },
    Favories(state){
      return state.favories;
    }
  },
  mutations: {
    Loading(state,text){
      state.loading.text = text;
      state.loading.show = true;
    },
    LoadingClose(state){
      state.loading.show = false;
    },
    Fragman(state,url){
      state.fragman.checking = false;
      state.fragman.url = url;
    },
    FragmanChecking(state){
      state.fragman.show = true;
      state.fragman.checking = true;
    },
    FragmanClose(state){
      state.fragman.show = false;
      state.fragman.url = '';
      state.fragman.checking = false;
    },
    Search(state,val){
      state.search.searching = val.length > 0;
      state.search.text = val;
    },  
    Movies(state,movies){
      movies = movies.map(m => {
        return {
          ...m,
          liked:state.favories.some(favori => favori.fulllink == m.fulllink)
        }
      });
      localStorage.setItem(localStorageKeys.movieList,JSON.stringify(movies));
      state.movies = [...movies];
      state.search.searching = false;
    },
    Hls(state,hls){
      state.hls.poster = hls.poster;
      state.hls.source = hls.source;
    },
    Language(state,lang){
      if(settings.allowedLanguages.includes(lang)){
        state.language = lang;
        settings.defaultLanguage = lang;
      }
    },
    Favori(state,field){
      if(field.liked){
          // favorilerden çıkart
          state.favories = state.favories.filter(f => f.fulllink !== field.fulllink);
      }else{
        // favorilere ekle
          state.favories.push(field);
      }
      // değişiklikleri localde sakla
      field.liked = !field.liked;
      localStorage.setItem(localStorageKeys.favories, JSON.stringify(state.favories));
    }
  },
  actions: {
    GetAMoive({state},uri){
      return state.movies.find(i => i.dizilink == uri);
    }
  },
  modules: {
  }
})


