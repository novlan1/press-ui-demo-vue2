import Vue from 'vue';
import { isDef, isNumber, isPlainObject, isPromise } from './validator';
import { canIUseGroupSetData /* canIUseNextTick*/ } from './version';
export function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
export function nextTick(cb) {
  Vue.nextTick(cb);
  return;
  // if (canIUseNextTick()) {
  //   wx.nextTick(cb);
  // } else {
  //   setTimeout(() => {
  //     cb();
  //   }, 1000 / 30);
  // }
}
let systemInfo;
export function getSystemInfoSync() {
  if (systemInfo == null && typeof uni.getSystemInfoSync === 'function') {
    systemInfo = uni.getSystemInfoSync();
  }
  return systemInfo;
}
export function addUnit(value) {
  if (!isDef(value)) {
    return undefined;
  }
  value = String(value);
  return isNumber(value) ? `${value}px` : value;
}
export function requestAnimationFrame(cb) {
  return setTimeout(() => {
    cb();
  }, 1000 / 30);

  // const systemInfo = getSystemInfoSync();
  // if (systemInfo.platform === 'devtools') {
  //   return setTimeout(() => {
  //     cb();
  //   }, 1000 / 30);
  // }
  // return wx
  //   .createSelectorQuery()
  //   .selectViewport()
  //   .boundingClientRect()
  //   .exec(() => {
  //     cb();
  //   });
}
export function pickExclude(obj, keys) {
  if (!isPlainObject(obj)) {
    return {};
  }
  return Object.keys(obj).reduce((prev, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }
    return prev;
  }, {});
}
export function getRect(context, selector) {
  return new Promise((resolve) => {
    // #ifdef H5
    const el = context.$el;
    if (el) {
      const child =  el.querySelector(selector);
      if (!child) {
        resolve({});
      }
      const rect = child.getBoundingClientRect();
      resolve(rect);
      return;
    }
    // #endif

    uni.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}
export function getAllRect(context, selector) {
  return new Promise((resolve) => {
  // #ifdef H5
    const el = context.$el;
    if (el) {
      const children =  el.querySelectorAll(selector);
      const rect = [...children].map(item => item.getBoundingClientRect());
      resolve(rect);
      return;
    }
    // #endif

    uni.createSelectorQuery()
      .in(context)
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => {
        resolve(rect[0]);
      });
  });
}
export function groupSetData(context, cb) {
  if (canIUseGroupSetData() && context.groupSetData) {
    context.groupSetData(cb);
  } else {
    cb();
  }
}
export function toPromise(promiseLike) {
  if (isPromise(promiseLike)) {
    return promiseLike;
  }
  return Promise.resolve(promiseLike);
}
export function getCurrentPage() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

