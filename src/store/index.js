import Vue from "vue";
import Vuex from "vuex";
import streaks from "./streaks";

Vue.use(Vuex);

const state = {
  navbarHeight: 0
};

const mutations = {
  setNavbarHeight(state, navbarHeight) {
    state.navbarHeight = navbarHeight;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    streaks
  }
});
