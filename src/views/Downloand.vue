<template>
  <div class="downloand" v-if="data">
        <div class="image">
            <img :src="data.vidresim" >
            <h3>{{data.baslik }} {{ data.altbaslik ? `/ ${data.altbaslik}` : '' }}</h3>
        </div>
        <div class="container">
            <template v-if="order == STATUS.GET_RESOURCES">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="translate(26.666666666666668,26.666666666666668)">
                        <rect x="-20" y="-20" width="40" height="40" fill="#e15b64">
                            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.3s"></animateTransform>
                        </rect>
                        </g>
                        <g transform="translate(73.33333333333333,26.666666666666668)">
                        <rect x="-20" y="-20" width="40" height="40" fill="#f47e60">
                            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.2s"></animateTransform>
                        </rect>
                        </g>
                        <g transform="translate(26.666666666666668,73.33333333333333)">
                        <rect x="-20" y="-20" width="40" height="40" fill="#f8b26a">
                            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="0s"></animateTransform>
                        </rect>
                        </g>
                        <g transform="translate(73.33333333333333,73.33333333333333)">
                        <rect x="-20" y="-20" width="40" height="40" fill="#abbd81">
                            <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="1.1500000000000001;1" begin="-0.1s"></animateTransform>
                        </rect>
                    </g>
                </svg>
                {{lang("downloand.steps.1")}}
            </template>

             <template v-else-if="order == STATUS.RESOURCES_NOTFOUND">
                {{lang("downloand.steps.2")}}
             </template>

              <template v-else-if="order == STATUS.SELECT_RESOURCES">
                <div class="resource-title">
                    {{lang("downloand.steps.3")}}
                </div>
                <div>

                    <span class="resource" v-for="resource in resources" :key="resource" @click="() => resourceEvent(resource)">
                        {{resource.human}}
                    </span>
                </div>
             </template>

             <template v-else-if="order == STATUS.DOWNLOANDING">
                <div class="downloanding-title">
                    {{  
                        downloadingTitleText
                    }}
                </div>
                <div class="loading-bar">
                    <div class="loading-bar-inset" :style="{width:progressPercent}">
                        {{progressPercent}}
                    </div>
                </div>

                 <div class="loading-info" v-if="progress < 100">
                    {{secondToHumanTime(lang,remainingSeconds)}}
                </div>
             </template>

             
        </div>
  </div>
</template>

<script>
import {lang} from '@/core/lang'

import {secondToHumanTime} from '@/core/lang-func'


export default {
  name: 'Downloand',
  data(){
    return {
        data:{},
        sources:[],
        STATUS:{
            GET_RESOURCES:1,
            RESOURCES_NOTFOUND:2,
            SELECT_RESOURCES:3,
            DOWNLOANDING:4
        },
        order:0,
        resources:[],
        selectSource:'',
        progress:0,
        remainingSeconds:0
    }
  },
  computed:{
    progressPercent(){
        return this.progress.toString().concat('%');
    },
    downloadingTitleText(){
        return this.progress < 100 ? 
                        lang("downloand.steps.4", this.selectSource) : 
                        lang("downloand.completed", this.selectSource);
    }
  },
  async beforeCreate(){
    this.data = await this.$store.dispatch("GetAMoive",this.$route.params.id)
    
    if(!this.data){
        this.$router.push("/");
        return;
    }
    this.order = this.STATUS.GET_RESOURCES;

    window.api.send("get-movie-sources", this.data.fulllink);
    window.api.receive("get-movie-sources",(resources) => {
        if(!resources || resources.length == 0){
            this.order = this.STATUS.RESOURCES_NOTFOUND;
            return;
        }
        this.order = this.STATUS.SELECT_RESOURCES;
        this.resources = resources;
        console.log(this.resources)
    });

    window.api.receive("downloand",(percent)=>{
        this.progressbar(percent);
    }); 

    window.api.receive("downloand-progress",({percent,second}) => {
        console.log(percent,second);
        this.progressbar(percent);
        this.remainingSeconds = second;
    });

    window.api.receive("downloand-over",() => {
        console.log("indirime işlemi tamamlandı")
    })

  },
  methods:{
    resourceEvent(source){
        this.selectSource = source.human;
        this.order = this.STATUS.DOWNLOANDING;

        window.api.send("downloand",{
            source: source.url.toString(),
            filename: lang("system.movieName",this.data.baslik.trim(),this.data.yil)
        });
    },
    progressbar(percent){
        this.progress = percent;
    },
    lang,
    secondToHumanTime
  }
}
</script>

<style scoped>
.image{
    margin-top:10px;
    text-align: center;
}
.image img{ width:150px;
    height:200px;}
.resource-title{
    padding:8px;
}
.resource{
    border-radius: 6px;
    background-color:darkgreen;
    color:white;
    padding:6px;
    margin-right:8px;
    cursor:pointer;
}
.resource:hover{
    background-color:darkred;
}

.loading-bar{
    background:#ccc;
    border-radius:6px;
    margin:12px;
    font-size:12px;
    overflow: hidden;
    position:relative;
    display:block;
    height:30px;
}
.loading-bar-inset{
    width: 0%;
    height: 100%;
    background-color: #031f29;
    text-align: center;
    color: #031f29;
    line-height: 30px;
    position: relative;
    z-index: 1;
    font-weight: bold;
    transition: width 1s;
}
.loading-bar-inset::before{
    content: '';
    background-color: #e2d0d0;
    height: 30px;
    width: 30px;
    display: inline-block;
    z-index: -1;
    border-radius: 50%;
    margin-left: -4px;
    position: absolute;
}
</style>
