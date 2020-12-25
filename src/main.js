import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { LayoutPlugin, ListGroupPlugin, OverlayPlugin, SkeletonPlugin, AlertPlugin } from 'bootstrap-vue'
import Highcharts from 'highcharts'

import Annotation from 'highcharts/modules/annotations'

Vue.config.productionTip = false
Vue.use(LayoutPlugin)
Vue.use(OverlayPlugin)
Vue.use(SkeletonPlugin)
Vue.use(ListGroupPlugin)
Vue.use(AlertPlugin)
Annotation(Highcharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
