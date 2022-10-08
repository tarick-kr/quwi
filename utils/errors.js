import { cleaningString } from '~/utils/common'


export const handleAuthErrors = (err) => {
  const { response } = err;
  if (response.status === 417) {
    const errors = response?.data?.first_errors
    for (let key in errors) {
      errors[key] = cleaningString(errors[key])
    }
    return errors
  } else {
    return {}
  }
}
