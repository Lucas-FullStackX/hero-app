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
        const results = [];
        commit("setHeroes", []);
        for (let i = page * 10 - 9; i < page * 10; i++) {
          const data = await axios(
            `https://www.superheroapi.com/api.php/1501339270264465/${i}`
          );
          results.push(data.data);
        }
        console.log(page);
        commit("setPage", page);
        commit("setHeroes", results);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
