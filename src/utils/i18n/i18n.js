import Vue from 'vue';
import localeEn from 'src/packages/locale/lang/en-US';
import locale, { t } from 'src/packages/locale';

import localeEnDemo from './lang/en-US';
import localeZhDemo from './lang/zh-CN';

const DEFAULT_LANG = 'zh-CN';

const LOCALE_MAP = {
  'en-US': localeEn,
};
const LOCALE_DEMO_AMP = {
  'en-US': localeEnDemo,
  'zh-CN': localeZhDemo,
};

let curLang = DEFAULT_LANG;
if (LOCALE_MAP[curLang]) {
  locale.use(LOCALE_MAP[curLang]);
}
if (LOCALE_DEMO_AMP[curLang]) {
  locale.add(LOCALE_DEMO_AMP[curLang]);
}

function getLocale() {
  // #ifdef H5
  const { href } = window.location;
  if (href.indexOf('?') <= -1) return;
  const search = href.split('?')[1];
  const map = search.split('&').reduce((acc, value) => {
    const temp = value.split('=');
    acc[temp[0]] = temp[1];
    return acc;
  }, {});

  console.log('map', map);

  return map.locale || map.lang;
  // #endif
}
let set = false;

export function setLang() {
  if (set) return ;
  set = true;
  curLang = getLocale() || DEFAULT_LANG;
  if (LOCALE_MAP[curLang]) {
    locale.use(LOCALE_MAP[curLang]);
  }
  if (LOCALE_DEMO_AMP[curLang]) {
    locale.add(LOCALE_DEMO_AMP[curLang]);
  }
}


export function demoI18n() {
  Vue.mixin({
    onReady() {
      const { path } = this.$route;
      const list = path.split('/');
      const name = list[list.length - 1];
      if (!name) return;

      const newTitle = this.t(`titleMap.${name}`);
      if (!newTitle) return;

      uni.setNavigationBarTitle({
        title: newTitle,
      });
    },
    methods: {
      t(key, ...args) {
        const { i18n } = this.$options;
        if (i18n && i18n[curLang] && i18n[curLang][key]) {
          const value = i18n[curLang][key];
          if (typeof value === 'function') {
            return value(...args);
          }
          return value;
        }
        return t(key, ...args);
      },
    },
  });
}


