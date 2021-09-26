import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    heroes: [],
    page: 1,
  },
  mutations: {
    setHeroes(state, payload) {
      state.heroes = payload;
    },
    setPage(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    async getHeroes({ commit }, page) {
      try {
        commit("setHeroes", []);
        console.log("pagina:", page * 15, "hasta:", page * 15 - 15);
        const data = await axios(
          `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=${15}&offset=${
            page * 15 - 15
          }&ts=1&apikey=5024257bb345193f6d39f9296b85dae2&hash=21ea133c2ceb9cfd51348f9d58efa3d7`
        );
        commit("setPage", page);
        commit("setHeroes", data.data.data.results);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
