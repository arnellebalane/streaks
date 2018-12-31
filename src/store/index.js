import Vue from 'vue';
import Vuex from 'vuex';
import streaks from './streaks';

Vue.use(Vuex);

const state = {};

const mutations = {};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    streaks
  }
});
