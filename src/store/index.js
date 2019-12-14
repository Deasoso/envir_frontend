import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'name',
  },
  mutations: {
    settitle(state, arg) { // commit
      state.title = arg.name;
    },
  },
  actions: {
    settitle({commit}, arg) { // dispatch
      commit('settitle', arg);
    },
  },
});