import { isServer } from '..';
export function isAndroid() {
  /* istanbul ignore next */
  return isServer ? false : /android/.test(navigator.userAgent.toLowerCase());
}
export function isIOS() {
  /* istanbul ignore next */
  return isServer ? false : /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}


export function isH5() {
  return process.env.UNI_PLATFORM === 'h5';
}
