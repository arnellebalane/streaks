import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './register-sw';

Vue.config.productionTip = false;

store.dispatch('streaks/fetchStreaks');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
