<template>
  <Header />
  <router-view/>
  <Footer />
  <Loading />
</template>

<script>

import Header from '@/components/parts/Header.vue'
import Footer from '@/components/parts/Footer.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Loading
  },
  beforeCreate(){
    this.$store.dispatch("LoadLastMovies")

    const store = this.$store;
    window.api.receive("movies",(data) => {
          store.commit('Movies',data)
    })

    window.api.receive("fragmanFinder",(data) => {
         store.commit('Fragman',data)
    });

  }
}
</script>

<style>

body,html{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
