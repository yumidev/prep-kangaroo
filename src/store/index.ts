import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      email: "",
    },
  },
  getters: {},
  mutations: {
    setUser(state, email) {
      state.user.email = email;
    },
  },
  actions: {
    setUser(context, email) {
      context.commit("setUser", email);
    },
  },
  modules: {},
});
