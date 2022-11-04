import App from './App';
// #ifndef VUE3
import Vue from 'vue';
// import './global-comp';

import MatchLoading from './uni_modules/match/components/match-loading/match-loading.vue';
import MatchPicker from './uni_modules/match/components/match-picker/match-picker.vue';

Vue.component('MatchLoading', MatchLoading);
Vue.component('MatchPicker', MatchPicker);

Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
// eslint-disable-next-line import/first
import {
  createSSRApp,
} from 'vue';
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
