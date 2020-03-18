import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import store from './components/store'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(faFontAwesome)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(SuiVue);
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/', component: HelloWorld
    },
    {
      path: '/About', component: About
    },
    {
      path: '/Login', component: Login
    },
    {
      path: '/Register', component: Register
    },
  ],
  mode: 'history'
}
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
