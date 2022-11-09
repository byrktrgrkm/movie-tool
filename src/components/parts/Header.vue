<template>
  <div id="header">
    <div class="logo" @click="() => $router.push('/')">
         <img alt="img" src="@/assets/logo_tr.png" v-if="language == 'tr'" />
         <img alt="img" src="@/assets/logo_en.png" v-else />
    </div>
    <Navbar />
    
  </div>
</template>

<script>

import {lang} from '@/core/lang'
import { mapGetters } from 'vuex'
import Navbar from '@/components/parts/Navbar.vue'

export default {
  components:{
    Navbar
  },
  methods:{
    close(){
      window.close();
    },
    lang
  },
  computed:{
    ...mapGetters([
      'language'
    ])
  }
}

</script>

<style scoped>

#header{
    height: 50px;
    background:#e5f3ff;
    align-items: center;
    padding:0px 8px;
    display:flex;
    position:fixed;
    left:0;right:0;
    top:32px;
    z-index:9999;
}
.logo{
  width:150px;
  cursor: pointer;
}
.logo img{
  width:100%;
  height:100%;
}
.closeBtn{
  right:0;
  position:fixed;
  top:0;
  background-color:red;
  color:white;
  font-weight: bold;
  padding:4px 8px;
  border-radius:0 0 5px 5px;
  cursor:pointer;
}
</style>