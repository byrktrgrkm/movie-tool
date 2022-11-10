import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueVideoPlayer from '@videojs-player/vue'
import VueSweetalert2 from 'vue-sweetalert2';

import 'sweetalert2/dist/sweetalert2.min.css';


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faHeart,faHeartRegular);


createApp(App)
.use(store)
.use(router)
.use(VueVideoPlayer)
.use(VueSweetalert2)
.component("font-awesome-icon", FontAwesomeIcon)
.mount('#app')
