import Vue from 'vue'
import App from './App.vue'
import { BCarousel } from 'bootstrap-vue'
import { CarouselPlugin } from 'bootstrap-vue'
import { NavbarPlugin } from 'bootstrap-vue'


Vue.use(NavbarPlugin)
Vue.component('b-carousel', BCarousel)

//require('vue-images/dist/vue-images.css')
Vue.use(CarouselPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
