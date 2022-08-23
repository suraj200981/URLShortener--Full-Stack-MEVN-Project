import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import router from './router'
Vue.use(require('vue-cookies'))


Vue.config.productionTip = false;

new Vue({
  vuetify,
  axios,
  VueAxios,
  router,
  render: (h) => h(App)
}).$mount("#app");
