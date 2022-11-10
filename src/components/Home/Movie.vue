<template>
    <div class="movie-item" @dblclick="favoriEvent">
        <div class="image">
            <img :src="field.vidresim" />
        </div>
        <div class="content">
            <h3 class="movie-name">{{ field.baslik }} <span class="imdb">{{ field.imdb }}</span></h3>
            <div class="movie-info">{{ lang(`movie.styles.${field.filmTarz}`) }} | {{ field.yil }}</div>
            <div class="actions">
             <button class="custom-btn btn-5 bg-1" @click="fragmanEvent"><span>{{lang('movie.fragman.watch')}}</span></button>
             <button class="custom-btn btn-5 bg-2" @click="play"><span>{{lang('movie.play')}}</span></button>
             <button class="custom-btn btn-5 bg-3"  @click="downloand"><span>{{lang('movie.downloand')}}</span></button>
             </div>
        </div>
        <div class="add-favori" @click="favoriEvent">
            <font-awesome-icon icon="fa-solid fa-heart" v-if="field.liked" />
            <font-awesome-icon icon="fa-regular fa-heart" v-else />
        </div>
       

    </div>

</template>

<script>
import {lang} from '@/core/lang'
export default {
  name: 'Movie',
  props:['field'],
  data(){
    return {
    }
  },
  beforeCreate(){
    window.api.receive("movieSource",hls => {
        this.$store.commit('LoadingClose');
        if(!hls.source){
            return;
        }
        this.$store.commit("Hls",hls);
        this.$router.push('/player')
    });
  },
  methods:{
    fragmanEvent(){
        this.$store.commit('FragmanChecking');
        window.api.send("fragmanFinder", this.field.fulllink);     
    },
    downloand(){
        this.$router.push('/downloand/'.concat(this.field.dizilink));
    },
    play(){
        this.$store.commit('Loading',lang("movie.source"));
        window.api.send("movieSource", {link:this.field.fulllink,poster:this.field.vidresim});     
    },
    favoriEvent(){
        this.$store.commit("Favori",this.field);
    },
    lang
  }
}
</script>

<style scoped>
.heart{
    font-size:12px;
}
.movie-item{
    display:flex;
    margin-bottom:6px;
    flex: 0 0 50%;
    position:relative;
}
.movie-item .image{
    flex: 0 0 150px;
    height: 250px;
    position:relative;
    user-select:none;
}
.movie-item .image .fragman{
    display:block;
    width:100%;
    padding:4px;
    margin: 0;
    bottom:0;
    position:absolute;
    height:30px;
}
.movie-item .image img{
    width:100%;
    height:calc(100%-30px);
}
.movie-item .content{
    padding-left:24px;
    padding-right:12px;
    text-align: left;;
}
.movie-item .content .movie-name{
    color:skyblue;
    text-align: left;
}
.movie-item .content .movie-info{
    font-size:12px;
    margin:10px 0;
}
.movie-item .content .movie-summary{
    font-size:14px;
}

.movie-item .actions{
     flex: 0 0 150px;
     justify-content: center;
     align-items: center;
     display: flex;
}
.movie-item .actions button{
    width:100%;
    padding:6px;
    flex:0 0 33%;
    font-weight:bold;
    cursor:pointer;
    

}
.imdb{
    font-size:12px;
    background-color:#00496c;
    color:white;
    padding:4px 6px;
    border-radius:6px;
    margin-left:12px;
}

.add-favori{
    position: absolute;
    right: 20px;
    cursor:pointer;
    user-select: none;
}

/* 5 */


.custom-btn {
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;
 
}

.btn-5 {
    padding: 0;
 padding:8px 8px;
  border: none;
  background: rgb(255,27,0);
background: linear-gradient(0deg, rgba(255,27,0,1) 0%, rgba(251,75,2,1) 100%);
}
.btn-5:hover {
  color: #f0094a;
  background: transparent;
   box-shadow:none;
}


.btn-5:before,
.btn-5:after{
  content:'';
  position:absolute;
  top:0;
  right:0;
  height:2px;
  width:0;
  background: #eeeeee;
  box-shadow:
   -1px -1px 5px 0px #fff,
   7px 7px 20px 0px #0003,
   4px 4px 5px 0px #0002;
  transition:400ms ease all;
}
.btn-5:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
.btn-5:hover:before,
.btn-5:hover:after{
  width:100%;
  transition:800ms ease all;
}

.bg-1.btn-5:before,
.bg-1.btn-5:after{
    background: rgb(15 94 239);
}
.bg-1.btn-5:hover{
    color:rgb(15 94 239);
}

.bg-1{
    background: linear-gradient( 0deg, rgb(15 94 239) 0%, rgb(41 136 255) 100%);
}
.bg-2{
    background: linear-gradient( 0deg, #ab0000 0%, #ff1515 100%);
}
.bg-2.btn-5:before,
.bg-2.btn-5:after{
    background: #ab0000;
}
.bg-2.btn-5:hover{
    color:#ab0000;;
}
.bg-3{
    background: linear-gradient( 0deg, rgb(56 84 0) 0%, rgb(80 142 13) 100%);
}
.bg-3.btn-5:before,
.bg-3.btn-5:after{
    background: rgb(56 84 0);
}
.bg-3.btn-5:hover{
    color:rgb(56 84 0);
}

</style>