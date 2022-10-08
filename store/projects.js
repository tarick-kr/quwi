export const state = () => ({
  data: []
})

export const mutations = {
  SET_PROJECTS(state, projects) {
    state.data = projects;
  },
}

export const actions = {

}

export const getters = {
  getData: ({ data }) => data
}
