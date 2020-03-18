import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import store from './components/store'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'

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
  ],
  mode: 'history'
}
)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
