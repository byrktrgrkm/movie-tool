
<template>
  <video-player
    :src="src"
    class="player"
    :poster="poster"
    controls
    :volume="0.6"
  >
    <template v-slot="{ player, state }">
          <div class="custom-player-controls">
            <button @click="state.playing ? player.pause() : player.play()">
              {{ state.playing ? 'Pause' : 'Play' }}
            </button>
            <button @click="player.muted(!state.muted)">
              {{ state.muted ? 'UnMute' : 'Mute' }}
            </button>
          </div>
        </template>
  </video-player>
</template>


<script>

import { VideoPlayer } from '@videojs-player/vue'
import 'video.js/dist/video-js.css'
import {mapGetters} from 'vuex'

export default {
  name: 'Player',
  computed:{
    ...mapGetters([
      'Hls',
    ])
  }, 
  components:{
    VideoPlayer
  },
  data(){
    return {
      poster:'',
      src:''
    }
  },
  mounted(){
    this.poster = this.Hls.poster;
    this.src = this.Hls.source.concat("#.m3u8");
  }
}
</script>


<style scoped>
.player{
  width:100%;
}
</style>