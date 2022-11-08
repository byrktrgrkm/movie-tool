<template>
  <div id="header">
    <div class="logo">
        FİLM İNDİR
    </div>
    <div id="nav">
        <router-link to="/">{{lang('navigation.movie_downloand')}}</router-link> |
        <router-link to="/about">{{lang('navigation.my_movies')}}</router-link>
    </div>
  </div>
</template>

<script>

import {lang} from '@/core/lang'

export default {
  methods:{
    lang
  }
}

</script>

<style scoped>

#header{
    height: 50px;
    background:#ccd;
    align-items: center;
    padding:0px 8px;
    display:flex;
}

</style>