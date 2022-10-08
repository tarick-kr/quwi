export const getUserDeviceInfo = (device) => {
  let type
  if (device.isDesktop) {
    type = 'desktop'
  } else if (device.isMobile) {
    type = 'mobile'
  } else if (device.isAndroid) {
    type = 'android'
  } else {
    type = 'timetracker'
  }
  return type
};


export const cleaningString = (str) => {
  str = str.replace(/\.$/gm, '')
  return str
}
