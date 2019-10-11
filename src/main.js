import Vue from "vue";
import ZeitUI from "@zeit-ui/vue";
import Router from "vue-router";
import "@zeit-ui/vue/dist/zeit-ui.css";
import i18n from "./i18n";
import VueScrollTo from "vue-scrollto";

import App from "./App.vue";
import router from "./router";
import "./styles.css";

Vue.use(Router);
Vue.config.productionTip = false;

Vue.use(ZeitUI);
Vue.use(VueScrollTo);

new Vue({
  i18n,
  components: { App },
  router,
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  },
  render: h => h(App),
}).$mount("#app");
