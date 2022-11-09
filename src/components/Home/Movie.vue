<template>
    <div class="movie-item">
        <div class="image">
            <img :src="field.vidresim" />
        </div>
        <div class="content">
            <h3 class="movie-name">{{ field.baslik }} <span class="imdb">{{ field.imdb }}</span></h3>
            <div class="movie-info">{{ lang(`movie.styles.${field.filmTarz}`) }} | {{ field.yil }}</div>
            <div class="actions">
                <button  @click="fragmanEvent">{{lang('movie.fragman.watch')}}</button>
                <button  @click="play">{{lang('movie.play')}}</button>
                <button  @click="downloand">{{lang('movie.downloand')}}</button>
            </div>
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
    lang
  }
}
</script>

<style scoped>

.movie-item{
    display:flex;
    margin-bottom:6px;
    flex: 0 0 50%;
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
</style>