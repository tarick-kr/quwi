export default ($axios) => {
  return {
    login: async (user) => {
      return await $axios.$post('/auth/login', user)
    },
    logout: async () => {
      await $axios.$post('/auth/logout', {
        anywhere: true
      })
    }
  }
}

