import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Game from '@/components/Game.vue';

const routes = [
  { path: '/', component: Game },
  { path: '/play', component: Game }
];

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false;

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
