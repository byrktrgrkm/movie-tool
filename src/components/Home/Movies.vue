<template>
    <div class="movie-container">

      <template v-if="!Search.searching">
        <div class="movie-list" >
            <Movie  v-for="item in Movies" :key="item" :field="item"  />
        </div>
        <Fragman />
      </template>

      <div v-if="movieNotFound">
          {{lang('movie.not_found')}}
      </div>

      <div class="searching" v-if="Search.searching">
          <svg class="lds-balls" width="80px"  height="80px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="67.8023" cy="59.9068" r="6" fill="#51CACC">
            <animate attributeName="cx" values="75;57.72542485937369" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="cy" values="50;73.77641290737884" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="fill" values="#51CACC;#9DF871" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
          </circle><circle cx="46.0792" cy="69.9923" r="6" fill="#9DF871">
            <animate attributeName="cx" values="57.72542485937369;29.774575140626318" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="cy" values="73.77641290737884;64.69463130731182" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="fill" values="#9DF871;#E0FF77" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
          </circle><circle cx="29.7746" cy="52.4491" r="6" fill="#E0FF77">
            <animate attributeName="cx" values="29.774575140626318;29.774575140626315" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="cy" values="64.69463130731182;35.30536869268818" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="fill" values="#E0FF77;#DE9DD6" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
          </circle><circle cx="41.4208" cy="31.5213" r="6" fill="#DE9DD6">
            <animate attributeName="cx" values="29.774575140626315;57.72542485937368" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="cy" values="35.30536869268818;26.22358709262116" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="fill" values="#DE9DD6;#FF708E" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
          </circle><circle cx="64.9232" cy="36.1304" r="6" fill="#FF708E">
            <animate attributeName="cx" values="57.72542485937368;75" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="cy" values="26.22358709262116;49.99999999999999" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
            <animate attributeName="fill" values="#FF708E;#51CACC" keyTimes="0;1" dur="1s" repeatCount="indefinite"></animate>
          </circle>
          </svg>
          {{lang('movie.searching')}}
      </div>

      

    </div>
</template>


<script>
import Movie from '@/components/Home/Movie.vue'
import Fragman from '@/components/Home/Fragman.vue'
import {lang} from '@/core/lang'


import { mapGetters } from 'vuex'

export default {
  name: 'Movies',
  components: {
    Movie,
    Fragman
  },
  computed:{
      ...mapGetters([
        'Search',
        'Movies'
      ]),
      movieNotFound(){
        return !this.Search.searching && this.Movies instanceof Array && this.Movies.length == 0 && this.Search.text.length > 0;
      }
  }, 
  data(){
    return {
        closed: true,
        movieTrail: ''
    }
  },
  methods:{
    lang
  },
}
</script>


<style scoped>
.movie-container{
    position:relative;
}
.movie-list{
    padding:12px;
    margin-bottom:16px;
    display:flex;
    flex-wrap: wrap;
    height:400px;
    overflow-y:auto;
}
.searching{
  display:flex;
  align-items: center;
  justify-content: center;
}
</style>

