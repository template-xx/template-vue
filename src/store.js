import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      page: {},
      site: {}
    }
  },
  getters: {},
  actions: {},
  modules: {
    pokemon: {
      state() {
        return {
          data: {}
        }
      },
      mutations: {
        getData(state, payload) {
          state.data = payload
        }
      },
      namespaced: true
    }
  }
})
