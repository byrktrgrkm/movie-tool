<template>
  
  <div class="drag-background">
        <div class="drag"></div>
        <div class="close" @click="close">&times;</div>
        
  </div>
</template>

<script>

export default {
  name:'drag-menu',
  methods:{
    close(){
      this.$swal({
        title: 'Tarayıcıyı kapatmak istiyor musunuz?',
        showDenyButton: true,
        showCancelButton: true,
        showConfirmButton:false,
        denyButtonText: `Kapat`,
        cancelButtonText:'Vazgeç'
      }).then((result) => {
        if (result.isDenied) {
          window.close();
        }
      });
    }
  }
}

</script>

<style scoped>
.drag-background{
    width: 100%;
    height: 32px;
    background-color: rgb(0, 0, 0);
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;
}
.drag{
    width:80%;
    position:absolute;
    left:0;top:0;
    height: 100%;
    -webkit-app-region: drag;
}
.close{
        /* right: 0; */
    color: darkred;
    font-size: 28px;
    font-weight: bold;
    position: relative;
    color: white;
    display: inline-block;
    right: 10px;
    position: absolute;
    padding: 0;
    color: red;
    cursor: pointer;
    z-index: 101;
}
</style>