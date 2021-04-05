import { Button, Cell, CellGroup, Popup } from "vant";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Popup);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
