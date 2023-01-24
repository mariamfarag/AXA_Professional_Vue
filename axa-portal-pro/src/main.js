import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'


import { fontsvgcore } from '@fortawesome/fontawesome-svg-core'
import { fontbrandssvgicons } from '@fortawesome/free-brands-svg-icons'
import { fontregularsvgicons } from '@fortawesome/free-regular-svg-icons'
import { fontsolidsvgicons } from '@fortawesome/free-solid-svg-icons'
import { fontaw } from '@fortawesome/vue-fontawesome'

import '@/assets/style/index.css'

//import * as VueSpinnersCss from "vue-spinners-css";

// Vue.use(VueSpinnersCss)



// fontsvgcore.add(fontsolidsvgicons)

// Vue.component('font-awesome-icon', fontaw)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,

  fontsvgcore,
  fontbrandssvgicons,
  fontregularsvgicons,
  fontaw,
  fontsolidsvgicons,


  render: h => h(App)
}).$mount('#app')
