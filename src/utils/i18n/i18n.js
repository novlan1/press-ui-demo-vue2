import Vue from 'vue';
import localeEn from 'src/packages/locale/lang/en-US';
import locale, { t } from 'src/packages/locale';
import TITLE_I18N from './title-i18n.json';

const DEFAULT_LANG = 'zh-CN';

const LANG = getLocale() || DEFAULT_LANG;

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

const LOCALE_MAP = {
  'en-US': localeEn,
};

if (LOCALE_MAP[LANG]) {
  locale.use(LOCALE_MAP[LANG]);
}

export function demoI18n() {
  Vue.mixin({
    onReady() {
      const { path } = this.$route;
      const list = path.split('/');
      const name = list[list.length - 1];
      if (!name) return;

      const newTitle = TITLE_I18N[LANG]?.[name] || '';
      if (!newTitle) return;

      uni.setNavigationBarTitle({
        title: newTitle,
      });
    },
    methods: {
      t(key, ...args) {
        const { i18n } = this.$options;

        if (i18n && i18n[LANG] && i18n[LANG][key]) {
          const value = i18n[LANG][key];
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


