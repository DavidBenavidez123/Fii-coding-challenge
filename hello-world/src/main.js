import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
import store from './components/store'

Vue.config.productionTip = false
Vue.use(SuiVue);
new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
