import Vue from 'vue';
import Vuex from 'vuex';
import streaks from './streaks';

Vue.use(Vuex);

const state = {
  windowWidth: 0
};

const mutations = {
  setWindowWidth(state, windowWidth) {
    state.windowWidth = windowWidth;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    streaks
  }
});
