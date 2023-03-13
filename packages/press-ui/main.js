import Vue from 'vue';
import App from './App.vue';
import { reportAegis } from 'packages/press-ui/utils/report/report';
import { demoI18n } from 'packages/press-ui/utils/i18n/i18n';
import { initMixin } from 'packages/press-ui/utils/mixin/mixin';

import DemoBlock from 'packages/press-ui/pages/demo-block/demo-block.vue';
import Toast from 'packages/press-ui/packages/press-toast/index';

import PressLoading from 'packages/press-ui/packages/press-loading/press-loading.vue';
import PressCell from 'packages/press-ui/packages/press-cell/press-cell.vue';
import PressCellGroup from 'packages/press-ui/packages/press-cell-group/press-cell-group.vue';
import PressTag from 'packages/press-ui/packages/press-tag/press-tag.vue';
import PressDivider from 'packages/press-ui/packages/press-divider/press-divider.vue';
import PressNoticeBar from 'packages/press-ui/packages/press-notice-bar/press-notice-bar.vue';
import PressNavBar from 'packages/press-ui/packages/press-nav-bar/press-nav-bar.vue';

import PressButton from 'packages/press-ui/packages/press-button/press-button.vue';
import PressPicker from 'packages/press-ui/packages/press-picker/press-picker.vue';
import PressDialog from 'packages/press-ui/packages/press-dialog/press-dialog.vue';
import PressEmpty from 'packages/press-ui/packages/press-empty/press-empty.vue';
import PressIcon from 'packages/press-ui/packages/press-icon/press-icon.vue';
import PressIconPlus from 'packages/press-ui/packages/press-icon-plus/press-icon-plus.vue';
import PressPopup from 'packages/press-ui/packages/press-popup/press-popup.vue';
import PressPopupPlus from 'packages/press-ui/packages/press-popup-plus/press-popup-plus.vue';
import PressInfo from 'packages/press-ui/packages/press-info/press-info.vue';
import PressSticky from 'packages/press-ui/packages/press-sticky/press-sticky.vue';
import PressTab from 'packages/press-ui/packages/press-tab/press-tab.vue';
import PressTabs from 'packages/press-ui/packages/press-tabs/press-tabs.vue';
import PressLoadingPlus from 'packages/press-ui/packages/press-loading-plus/press-loading-plus.vue';
import PressPickerPlus from 'packages/press-ui/packages/press-picker-plus/press-picker-plus.vue';
import PressDatetimePicker from 'packages/press-ui/packages/press-datetime-picker/press-datetime-picker.vue';
import PressSwipeCell from 'packages/press-ui/packages/press-swipe-cell/press-swipe-cell.vue';
import PressCheckbox from 'packages/press-ui/packages/press-checkbox/press-checkbox.vue';
import PressCheckboxGroup from 'packages/press-ui/packages/press-checkbox-group/press-checkbox-group.vue';
import PressTransition from 'packages/press-ui/packages/press-transition/press-transition.vue';
import PressOverlay from 'packages/press-ui/packages/press-overlay/press-overlay.vue';
import PressToast from 'packages/press-ui/packages/press-toast/press-toast.vue';

import UniCard from 'packages/press-ui/packages/uni-card/components/uni-card/uni-card.vue';
import UniIcons from 'packages/press-ui/packages/uni-icons/components/uni-icons/uni-icons.vue';
import UniList from 'packages/press-ui/packages/uni-list/components/uni-list/uni-list.vue';
import UniListItem from 'packages/press-ui/packages/uni-list/components/uni-list-item/uni-list-item.vue';
import UniSection from 'packages/press-ui/packages/uni-section/components/uni-section/uni-section.vue';

Vue.component('UniCard', UniCard);
Vue.component('UniIcons', UniIcons);
Vue.component('UniList', UniList);
Vue.component('UniListItem', UniListItem);
Vue.component('UniSection', UniSection);

Vue.component('DemoBlock', DemoBlock);

Vue.component('PressButton', PressButton);
Vue.component('PressLoading', PressLoading);
Vue.component('PressCell', PressCell);
Vue.component('PressCellGroup', PressCellGroup);
Vue.component('PressPicker', PressPicker);
Vue.component('PressDialog', PressDialog);
Vue.component('PressEmpty', PressEmpty);
Vue.component('PressDivider', PressDivider);
Vue.component('PressNoticeBar', PressNoticeBar);

Vue.component('PressIcon', PressIcon);
Vue.component('PressIconPlus', PressIconPlus);
Vue.component('PressPopup', PressPopup);
Vue.component('PressInfo', PressInfo);
Vue.component('PressSticky', PressSticky);
Vue.component('PressTab', PressTab);
Vue.component('PressTabs', PressTabs);
Vue.component('PressLoadingPlus', PressLoadingPlus);
Vue.component('PressPickerPlus', PressPickerPlus);
Vue.component('PressDatetimePicker', PressDatetimePicker);
Vue.component('PressSwipeCell', PressSwipeCell);
Vue.component('PressCheckbox', PressCheckbox);
Vue.component('PressCheckboxGroup', PressCheckboxGroup);
Vue.component('PressTransition', PressTransition);
Vue.component('PressOverlay', PressOverlay);
Vue.component('PressToast', PressToast);
Vue.component('PressTag', PressTag);
Vue.component('PressNavBar', PressNavBar);
Vue.component('PressPopupPlus', PressPopupPlus);


Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(Toast);
reportAegis();
demoI18n();

const app = new Vue({
  ...App,
});
app.$mount();
initMixin();
