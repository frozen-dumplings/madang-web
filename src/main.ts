import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import App from './App.vue';
import router from './router';
import store from './store';
import io from './socket';

Vue.config.productionTip = false;

Vue.use(VueSocketIOExt, io);
Vue.use(Buefy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
