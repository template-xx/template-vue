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
          data: []
        }
      },
      mutations: {
        setData(state, payload) {
          state.data = payload
        },
        loadMore(state, payload) {
          state.data = state.data.concat(payload)
        }
      },
      namespaced: true
    }
  }
})
