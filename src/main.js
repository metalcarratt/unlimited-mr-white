import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import GamePrep from '@/components/GamePrep.vue';
import Game from '@/components/Game.vue';

const routes = [
  { path: '/', component: GamePrep },
  { path: '/gameInit', component: GamePrep },
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
