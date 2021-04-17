import database from '../episodes.json'

export const state = () => ({
  loading: true,
  episode: null,
  episodes: database,
})

export const actions = {
  randomize({ commit }) {
    commit('startLoading')
    setTimeout(function () {
      commit('randomize')
      commit('stopLoading')
    }, 1000)
  },
}

export const mutations = {
  randomize(state) {
    state.episode =
      state.episodes[Math.floor(Math.random() * state.episodes.length)]
  },
  startLoading(state) {
    state.loading = true
  },
  stopLoading(state) {
    state.loading = false
  },
}
