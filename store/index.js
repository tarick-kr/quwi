export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit({ commit }, { app, $cookies }) {
    const token = $cookies.get('TOKEN')
    if (token) app.store.commit('auth/SET_TOKEN', token)
  }
}

export const getters = {}
