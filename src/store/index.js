import { createStore } from 'vuex'
const { settings } = require('../.././setting');


export default createStore({
  state: {
    language: localStorage.getItem('lang') || settings.defaultLanguage,
    localStorageName:'movies',
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
    movies:[]
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
      window.localStorage.setItem(state.localStorageName,JSON.stringify(movies));
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
    }
  },
  actions: {
    GetAMoive({state},uri){
      return state.movies.find(i => i.dizilink == uri);
    },
    LoadLastMovies({state}){
      let data = window.localStorage.getItem(state.localStorageName);
      try{

        state.movies = JSON.parse(data);
      }catch{
        console.error("json parse error");
      }
    }
  },
  modules: {
  }
})
