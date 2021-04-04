import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import home from "./modules/home";
// import createLogger from "../../../src/plugins/logger";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    user,
    home
  },
  strict: debug,
  plugins: debug ? [] : []
});
