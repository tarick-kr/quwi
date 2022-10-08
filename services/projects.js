export default ($axios) => {
  return {
    getProjects: async () => {
      return await $axios.$get('/projects-manage/index?filters[is_active]=1&sort=dta_create')
    },
    updateProject: async (id, project) => {
      return await $axios.$post(`/projects-manage/update/?id=${id}`, project)
    },
    getProject: async (id) => {
      return await $axios.$get(`/projects-manage/${id}`)
    }
  }
}
