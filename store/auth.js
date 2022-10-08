export const state = () => ({
  token: ''
})

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
}

export const actions = {

}

export const getters = {
  authorized: ({ token }) => !!token
}
