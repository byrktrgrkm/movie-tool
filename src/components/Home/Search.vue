<template>
  <div id="search">
    <input type="search" :placeholder="lang('movie.inputSearch')" :value="SearchText"
    @input="search">
  </div>
</template>


<script>

import { mapGetters } from 'vuex';
import {lang} from '@/core/lang'

export default {
  name: 'Fragman',
  computed:{
      ...mapGetters([
        'SearchText',
      ])
  },
  data(){
    return{
      timeOut: null,
      time:Date.now()
    }
  },
  methods:{
    search(event){
      this.$store.commit('Search',event.target.value);

    /**
     * Eğer kullanıcı yazmayı bırakırsa arama yap
     */
      if(this.timeOut){
        clearTimeout(this.timeOut);
      }
      this.timeOut = setTimeout(() => {
        
        window.api.send("searchMovie",this.SearchText)
        
      },500);
      
    },
    lang
  }
}
</script>

<style scoped>

#search{
    padding:4px 6px;
}
#search input{
    box-sizing: border-box;
    padding:8px 12px;
    margin:0 10px;
    border-radius: 6px;
    border:none;  
    border:1px solid #ddd;
    color:#014;
    width:calc(100% - 20px);
    text-align: center;
}
#search input:focus{
  outline:none;
}

</style>