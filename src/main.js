import Vue from 'vue';
import App from './App';
import './uni.promisify.adaptor';

import { initMixin } from './utils/mixin/mixin';
import { checkAndShowVConsole } from 't-comm/lib/v-console/toggle';

import DemoBlock from './packages/press-demo-block/press-demo-block.vue';
import ToggleHeader from './packages/press-toggle-header/press-toggle-header.vue';
import { initDemoI18n } from './packages/locale/demo-lang';

import PressCell from './packages/press-cell/press-cell.vue';
import PressPicker from './packages/press-picker/press-picker.vue';
import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';
import './packages/common/touch-emulator/index';

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.component('DemoBlock', DemoBlock);
Vue.component('ToggleHeader', ToggleHeader);
Vue.component('PressCell', PressCell);
Vue.component('PressPicker', PressPicker);
Vue.component('PressPopupCell', PressPopupCell);

initDemoI18n();
initMixin();
// #ifdef H5
checkAndShowVConsole();
// #endif


const app = new Vue({
  ...App,
});
app.$mount();
