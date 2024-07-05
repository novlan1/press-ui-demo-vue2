import Vue from 'vue'
import App from './App'
import './uni.promisify.adaptor'

import { initMixin } from './utils/mixin/mixin';
import { initDemoI18n } from './utils/i18n/i18n';
import { checkAndShowVConsole } from 't-comm/lib/v-console/toggle';

import DemoBlock from './pages/demo-block/demo-block.vue';
import ToggleHeader from './pages/components/toggle-header/toggle-header.vue';

import PressCell from './packages/press-cell/press-cell.vue';
import PressPicker from './packages/press-picker/press-picker.vue';
import PressPopupCell from './packages/press-popup-cell/press-popup-cell.vue';


Vue.config.productionTip = false

App.mpType = 'app'

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
  ...App
})
app.$mount()
