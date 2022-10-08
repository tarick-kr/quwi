import { getUserDeviceInfo } from '~/utils'

export default function ({ $axios, store, $device, redirect }) {
  $axios.onRequest((config) => {
    config.headers.common['Accept'] = 'application/json'
    config.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`
    config.headers.common['Client-Timezone-Name'] = Intl.DateTimeFormat().resolvedOptions().timeZone
    config.headers.common['Client-Device'] = getUserDeviceInfo($device)
  })

  $axios.onError(error => {
    console.log(error)
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      redirect('/auth/login')
    }
  })
}
