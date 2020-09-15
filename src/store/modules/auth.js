import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main";

const state = {
  token: window.localStorage.getItem("token"),
};

const getters = {
  isLoggedIn: (state) => {
    return !!state.token;
  },
};

const actions = {
  logIn: () => {
    api.logIn();
  },
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("token");
  },

  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));

    commit("setToken", query.access_token);
    window.localStorage.setItem("token", query.access_token);
    router.push("/");
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
