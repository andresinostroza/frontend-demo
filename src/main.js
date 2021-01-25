import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { LayoutPlugin, ListGroupPlugin, OverlayPlugin, SkeletonPlugin, AlertPlugin } from 'bootstrap-vue'
import Highcharts from 'highcharts'
import makeServer from './plugins/mirage/index'

import Annotation from 'highcharts/modules/annotations'

if (['development', 'mirage'].includes(process.env.NODE_ENV)) {
  makeServer({ environment: 'development' })
}

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
