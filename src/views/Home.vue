<template>
  <div class="home">
    <Search />
    <Movies />
  </div>
</template>

<script>
// <img alt="Vue logo" src="../assets/logo.png">
// @ is an alias to /src
import Search from '@/components/Home/Search.vue'
import Movies from '@/components/Home/Movies.vue'
export default {
  name: 'Home',
  components: {
    Search,
    Movies
  }
}
</script>
