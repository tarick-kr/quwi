import user from '~/services/user'
import projects from '~/services/projects'

export default ({ $axios }, inject) => {
  const allMethods = {
    ...user($axios),
    ...projects($axios),
  }
  const methods = Object.keys(allMethods)
  methods.forEach((method) => {
    inject(method, allMethods[method])
  })
}
