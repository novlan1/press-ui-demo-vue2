import Vue from 'vue';

export function initMixin() {
  Vue.mixin({
    onShareAppMessage() {
      return {
        title: 'Set UI 组件库演示',
        path: '/pages/index/index',
        imageUrl: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/img/press-ui-avatar-wx-share.png',
      };
    },
  });
}
