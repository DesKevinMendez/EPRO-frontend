import Vue from "vue";
import "@/plugins/vuetify.ts";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "@/router/index.ts";
import store from "@/store/index.ts";

import "vuetify/dist/vuetify.min.css";

// SCSS propio
import "@/assets/scss/_custom.scss";

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => { return h(App); }
}).$mount("#app");