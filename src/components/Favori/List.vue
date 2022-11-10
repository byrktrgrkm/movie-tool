<template>
    <div class="movie-container">

    <div class="movie-list" >
        <Movie  v-for="item in Favories" :key="item" :field="item"  />
    </div>
    <Fragman />

 
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
        'Favories',
      ])
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
</style>

