<template>
    <div :class="{fragman:true,closed:!Fragman.show}" @click="iframeClick">
        <div class="background">
                <button class="close" @click="close" v-if="!Fragman.checking">&times;</button>
        </div> 
        <iframe :src="Fragman.url" class="iframe" v-if="Fragman.url.length > 0"></iframe>
        <div v-else-if="!Fragman.checking" class="checking">
            {{lang('movie.fragman.not_found')}}
        </div>
        <div class="checking" v-if="Fragman.checking">    
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <rect x="15" y="30" width="10" height="40" fill="#e15b64">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.6"></animate>
                </rect><rect x="35" y="30" width="10" height="40" fill="#f47e60">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.4"></animate>
                </rect><rect x="55" y="30" width="10" height="40" fill="#f8b26a">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-0.2"></animate>
                </rect><rect x="75" y="30" width="10" height="40" fill="#abbd81">
                <animate attributeName="opacity" dur="1s" repeatCount="indefinite" calcMode="spline" keyTimes="0;0.5;1" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" values="1;0.2;1" begin="-1"></animate>
                </rect>
            </svg>
            {{lang('movie.fragman.checking')}}
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import {lang} from '@/core/lang'


export default {
  name: 'Fragman',
  computed:{
      ...mapGetters([
        'Fragman',
      ])
  }, 
  data(){
    return {

    }   
  },
  methods:{
    iframeClick(e){
        if(e.target.className != 'iframe'){
            this.close();
        }
    },
    close(){
        if(this.Fragman.checking) return;

        this.$store.commit('FragmanClose');
    },
    lang
  },
  created(){
  }
}
</script>


<style scoped>
.close{
    margin-top:15px;
    border-radius: 50%;
    font-size:44px;
    cursor:pointer;
    border:none;
    background:none;
    color:white;
}
.fragman{
    position:fixed;
    left:0;
    right:0; 
    top:0;
    bottom:0; 
    display:flex;
    justify-content: center;
    align-items: center;  
}
.fragman .background{
    background-color:black;
    width:100%;
    height:100%;
    position:absolute;
    left:0; top: 0;
    opacity:.8;
}
.fragman.closed{
    display:none;
}
.fragman iframe{
    width: 80%;
    height:60%;
    z-index:1;
}
.checking{
    color:white;
    z-index:1;
}
</style>

