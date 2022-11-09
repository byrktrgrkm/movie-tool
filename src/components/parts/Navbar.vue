<template>
  
    <div id="nav">
        <div class="links">
          <router-link to="/">{{lang('navigation.movie_downloand')}}</router-link> |
          <router-link to="/about">{{lang('navigation.my_movies')}}</router-link>
        </div>

        <div :class="languageClass" @click="toggle">

          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="height: 40px; width: 40px;" ><g class="ldl-scale" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8);"><g class="ldl-ani"><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.611111s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path fill="#849b87" d="M30.002 84.637a41.598 41.598 0 0 1-9.803-7.715c-2.867-3.05-5.207-6.591-7.002-10.387-3.64-7.604-4.584-16.396-3.067-24.723 1.551-8.354 5.902-16.137 12.082-22.041 6.21-5.902 14.343-9.727 22.893-10.917a1.432 1.432 0 1 1 .395 2.837l-.033.004-.027.003c-7.98.883-15.725 4.227-21.773 9.653-6.013 5.427-10.407 12.734-12.133 20.747-1.692 7.987-1.044 16.577 2.316 24.142 1.655 3.777 3.861 7.338 6.615 10.441a41.367 41.367 0 0 0 9.537 7.956z" style="fill: rgb(132, 155, 135);"></path></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.666667s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path d="M44.157 4.939l.783 10.905L50 10z" fill="#849b87" style="fill: rgb(132, 155, 135);"></path></g></g></g></g></g></g></g></g></g></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.722222s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path fill="#849b87" d="M69.998 15.363a41.598 41.598 0 0 1 9.803 7.715c2.867 3.05 5.207 6.591 7.002 10.387 3.64 7.604 4.584 16.396 3.067 24.723-1.551 8.354-5.902 16.137-12.082 22.041-6.21 5.902-14.343 9.727-22.893 10.917a1.432 1.432 0 1 1-.395-2.837l.033-.004.027-.003c7.98-.883 15.725-4.227 21.773-9.653 6.013-5.427 10.407-12.734 12.133-20.746 1.691-7.986 1.043-16.577-2.317-24.142-1.655-3.777-3.861-7.338-6.615-10.441a41.32 41.32 0 0 0-9.536-7.957z" style="fill: rgb(132, 155, 135);"></path></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.777778s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path d="M55.843 95.061l-.783-10.905L50 90z" fill="#849b87" style="fill: rgb(132, 155, 135);"></path></g></g></g></g></g></g></g></g></g></g></g><g class="ldl-layer"><g class="ldl-ani"><g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.833333s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><circle stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#323232" fill="#a0c8d7" r="27.5" cy="50" cx="50" style="fill: rgb(160, 200, 215); stroke: rgb(50, 50, 50);"></circle></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.888889s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><ellipse stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#323232" fill="none" ry="27.5" rx="15" cy="50" cx="50" style="stroke: rgb(50, 50, 50);"></ellipse></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -0.944444s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path d="M50 22.5v55" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#323232" fill="none" style="stroke: rgb(50, 50, 50);"></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path d="M24.365 40.046h51.321" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#323232" fill="none" style="stroke: rgb(50, 50, 50);"></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1.05556s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path d="M24.365 59.454h51.321" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#323232" fill="none" style="stroke: rgb(50, 50, 50);"></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform: scale(0.91); transform-origin: 50px 50px; animation: 1.11111s linear -1.11111s infinite normal forwards running breath-8e189f5b-849f-4e00-a597-592220f79ab7;"><path stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="#000" opacity=".1" d="M68.476 29.631c.076 1.018.125 2.044.125 3.084 0 20.731-15.357 37.536-34.3 37.536a31.7 31.7 0 0 1-3.065-.157C36.149 74.685 42.744 77.5 50 77.5c15.188 0 27.5-12.312 27.5-27.5 0-8.076-3.481-15.338-9.024-20.369z" style=""></path></g></g></g></g></g></g></g></svg>
          <span>{{ lang("system.language.select") }}</span>
          <ul class="list">
              <li v-for="language in languages" :key="language" @click="() => change(language)">{{ lang(`system.language.${language}`)}}</li>
          </ul>
        </div>

       
        
    </div>
  

</template>

<script>

import {lang} from '@/core/lang'
import { mapGetters } from 'vuex'
import {languages} from '@/core/lang-func'
export default {
  computed:{
    ...mapGetters([
      'language'
    ])
  },
  data(){
    return {
      languages,
      languageClass:{
        language:true,
        open:false
      }
    }
  },
  methods:{
    toggle(){
      this.languageClass.open = !this.languageClass.open;
    },
    change(lang){
      this.$store.commit("Language",lang);
    },

    lang
  }
}

</script>

<style scoped>



.links{
  display: flex;
  align-items: center;
}
.links a {
      padding: 0 15px;
}

#nav{
  right:0;
  position:absolute;
  display: flex;
  
}
.language{
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    position:relative;
}
.language .list{
  display:none;
}
.language.open .list{
  display:block;
  position:absolute;
  top:30px;
  right:0;
  border-radius:5px;
  background-color:azure;
  list-style-type: none;
  padding:0;
  font-size:14px;
  border: 1px solid #ddd;
}
.language.open .list li{
  padding:8px 36px;
  border: 1px solid #ccc;
}
.language.open .list li.active{
  background-color:#ddd;
}
.language.open .list li:hover{
  background-color:#ddc;
}
</style>