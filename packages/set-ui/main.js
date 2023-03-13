import Vue from 'vue';
import App from './App.vue';
import { reportAegis } from 'packages/set-ui/utils/report/report';
import { demoI18n } from 'packages/set-ui/utils/i18n/i18n';
import { initMixin } from 'packages/set-ui/utils/mixin/mixin';

import DemoBlock from 'packages/set-ui/pages/demo-block/demo-block.vue';
// import Toast from 'packages/set-ui/packages/press-toast/index';

import UniCard from 'packages/set-ui/packages/uni-card/components/uni-card/uni-card.vue';
import UniIcons from 'packages/set-ui/packages/uni-icons/components/uni-icons/uni-icons.vue';
import UniList from 'packages/set-ui/packages/uni-list/components/uni-list/uni-list.vue';
import UniListItem from 'packages/set-ui/packages/uni-list/components/uni-list-item/uni-list-item.vue';
import UniSection from 'packages/set-ui/packages/uni-section/components/uni-section/uni-section.vue';

Vue.component('UniCard', UniCard);
Vue.component('UniIcons', UniIcons);
Vue.component('UniList', UniList);
Vue.component('UniListItem', UniListItem);
Vue.component('UniSection', UniSection);

Vue.component('DemoBlock', DemoBlock);


Vue.config.productionTip = false;
App.mpType = 'app';
// Vue.use(Toast);
reportAegis();
demoI18n();

const app = new Vue({
  ...App,
});
app.$mount();
initMixin();
