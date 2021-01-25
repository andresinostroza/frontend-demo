import Vue from 'vue'
import { LayoutPlugin, ListGroupPlugin, OverlayPlugin, SkeletonPlugin, AlertPlugin } from 'bootstrap-vue'

Vue.use(LayoutPlugin)
Vue.use(OverlayPlugin)
Vue.use(SkeletonPlugin)
Vue.use(ListGroupPlugin)
Vue.use(AlertPlugin)

Vue.config.productionTip = false
