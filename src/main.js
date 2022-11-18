import App from './App.vue';
// #ifndef VUE3
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/no-duplicates
import Vue from 'vue';
// import './global-comp';

import PressLoading from 'src/packages/press-loading/press-loading.vue';
import PressPicker from 'src/packages/press-picker/press-picker.vue';
import PressDialog from 'src/packages/press-dialog/press-dialog.vue';
import PressIcon from 'src/packages/press-icon/press-icon.vue';
import PressSwitch from 'src/packages/press-switch/press-switch.vue';
import PressPopup from 'src/packages/press-popup/press-popup.vue';
import PressInfo from 'src/packages/press-info/press-info.vue';
import PressSticky from 'src/packages/press-sticky/press-sticky.vue';
import PressTab from 'src/packages/press-tab/press-tab.vue';
import PressTabs from 'src/packages/press-tabs/press-tabs.vue';
import PressLoadingIcon from 'src/packages/press-loading-icon/press-loading-icon.vue';
import PressPickerPlus from 'src/packages/press-picker-plus/press-picker-plus.vue';
import PressDatetimePicker from 'src/packages/press-datetime-picker/press-datetime-picker.vue';
import PressSwipeCell from 'src/packages/press-swipe-cell/press-swipe-cell.vue';
import PressCheckbox from 'src/packages/press-checkbox/press-checkbox.vue';
import PressTransition from 'src/packages/press-transition/press-transition.vue';
import PressOverlay from 'src/packages/press-overlay/press-overlay.vue';
import PressToast from 'src/packages/press-toast/press-toast.vue';

import UniBadge from 'src/packages/uni-badge/components/uni-badge/uni-badge.vue';
import UniBreadcrumb from 'src/packages/uni-breadcrumb/components/uni-breadcrumb/uni-breadcrumb.vue';
import UniBreadcrumbItem from 'src/packages/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.vue';
import UniCalendar from 'src/packages/uni-calendar/components/uni-calendar/uni-calendar.vue';
import UniCard from 'src/packages/uni-card/components/uni-card/uni-card.vue';
import UniCollapse from 'src/packages/uni-collapse/components/uni-collapse/uni-collapse.vue';
import UniCollapseItem from 'src/packages/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue';
import UniCombox from 'src/packages/uni-combox/components/uni-combox/uni-combox.vue';
import UniCountdown from 'src/packages/uni-countdown/components/uni-countdown/uni-countdown.vue';
import UniDataCheckbox from 'src/packages/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue';
import UniDataPicker from 'src/packages/uni-data-picker/components/uni-data-picker/uni-data-picker.vue';
import UniDataPickerview from 'src/packages/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue';
import UniDataSelect from 'src/packages/uni-data-select/components/uni-data-select/uni-data-select.vue';
import UniDateformat from 'src/packages/uni-dateformat/components/uni-dateformat/uni-dateformat.vue';
import UniDatetimePicker from 'src/packages/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue';
import UniDrawer from 'src/packages/uni-drawer/components/uni-drawer/uni-drawer.vue';
import UniEasyinput from 'src/packages/uni-easyinput/components/uni-easyinput/uni-easyinput.vue';
import UniFab from 'src/packages/uni-fab/components/uni-fab/uni-fab.vue';
import UniFav from 'src/packages/uni-fav/components/uni-fav/uni-fav.vue';
import UniFilePicker from 'src/packages/uni-file-picker/components/uni-file-picker/uni-file-picker.vue';
import UniForms from 'src/packages/uni-forms/components/uni-forms/uni-forms.vue';
import UniFormsItem from 'src/packages/uni-forms/components/uni-forms-item/uni-forms-item.vue';
import UniGoodsNav from 'src/packages/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue';
import UniGrid from 'src/packages/uni-grid/components/uni-grid/uni-grid.vue';
import UniGridItem from 'src/packages/uni-grid/components/uni-grid-item/uni-grid-item.vue';
import UniGroup from 'src/packages/uni-group/components/uni-group/uni-group.vue';
import UniIcons from 'src/packages/uni-icons/components/uni-icons/uni-icons.vue';
import UniIndexedList from 'src/packages/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue';
import UniLink from 'src/packages/uni-link/components/uni-link/uni-link.vue';
import UniList from 'src/packages/uni-list/components/uni-list/uni-list.vue';

import UniListChat from 'src/packages/uni-list/components/uni-list-chat/uni-list-chat.vue';
import UniListItem from 'src/packages/uni-list/components/uni-list-item/uni-list-item.vue';
import UniLoadMore from 'src/packages/uni-load-more/components/uni-load-more/uni-load-more.vue';
import UniNavBar from 'src/packages/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
import UniNoticeBar from 'src/packages/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue';
import UniNumberBox from 'src/packages/uni-number-box/components/uni-number-box/uni-number-box.vue';
import UniPagination from 'src/packages/uni-pagination/components/uni-pagination/uni-pagination.vue';
import UniPopup from 'src/packages/uni-popup/components/uni-popup/uni-popup.vue';
import UniPopupDialog from 'src/packages/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';
import UniPopupMessage from 'src/packages/uni-popup/components/uni-popup-message/uni-popup-message.vue';
import UniPopupShare from 'src/packages/uni-popup/components/uni-popup-share/uni-popup-share.vue';
import UniRate from 'src/packages/uni-rate/components/uni-rate/uni-rate.vue';
import UniCol from 'src/packages/uni-row/components/uni-col/uni-col.vue';
import UniRow from 'src/packages/uni-row/components/uni-row/uni-row.vue';

import UniSearchBar from 'src/packages/uni-search-bar/components/uni-search-bar/uni-search-bar.vue';
import UniSection from 'src/packages/uni-section/components/uni-section/uni-section.vue';
import UniSegmentedControl from 'src/packages/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue';
import UniSteps from 'src/packages/uni-steps/components/uni-steps/uni-steps.vue';
import UniSwipeAction from 'src/packages/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue';
import UniSwipeActionItem from 'src/packages/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue';
import UniSwiperDot from 'src/packages/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue';
import UniTable from 'src/packages/uni-table/components/uni-table/uni-table.vue';
import UniTbody from 'src/packages/uni-table/components/uni-tbody/uni-tbody.vue';
import UniTd from 'src/packages/uni-table/components/uni-td/uni-td.vue';
import UniTh from 'src/packages/uni-table/components/uni-th/uni-th.vue';
import UniThead from 'src/packages/uni-table/components/uni-thead/uni-thead.vue';
import UniTr from 'src/packages/uni-table/components/uni-tr/uni-tr.vue';
import UniTag from 'src/packages/uni-tag/components/uni-tag/uni-tag.vue';
import UniTest from 'src/packages/uni-test/components/uni-test/uni-test.vue';
import UniTitle from 'src/packages/uni-title/components/uni-title/uni-title.vue';
import UniTooltip from 'src/packages/uni-tooltip/components/uni-tooltip/uni-tooltip.vue';
import UniTransition from 'src/packages/uni-transition/components/uni-transition/uni-transition.vue';
import UniUi from 'src/packages/uni-ui/components/uni-ui/uni-ui.vue';
Vue.component('UniBadge', UniBadge);
Vue.component('UniBreadcrumb', UniBreadcrumb);
Vue.component('UniBreadcrumbItem', UniBreadcrumbItem);
Vue.component('UniCalendar', UniCalendar);
Vue.component('UniCard', UniCard);
Vue.component('UniCollapse', UniCollapse);
Vue.component('UniCollapseItem', UniCollapseItem);
Vue.component('UniCombox', UniCombox);
Vue.component('UniCountdown', UniCountdown);
Vue.component('UniDataCheckbox', UniDataCheckbox);
Vue.component('UniDataPicker', UniDataPicker);
Vue.component('UniDataPickerview', UniDataPickerview);
Vue.component('UniDataSelect', UniDataSelect);
Vue.component('UniDateformat', UniDateformat);
Vue.component('UniDatetimePicker', UniDatetimePicker);
Vue.component('UniDrawer', UniDrawer);
Vue.component('UniEasyinput', UniEasyinput);
Vue.component('UniFab', UniFab);
Vue.component('UniFav', UniFav);
Vue.component('UniFilePicker', UniFilePicker);
Vue.component('UniForms', UniForms);
Vue.component('UniFormsItem', UniFormsItem);
Vue.component('UniGoodsNav', UniGoodsNav);
Vue.component('UniGrid', UniGrid);
Vue.component('UniGridItem', UniGridItem);
Vue.component('UniGroup', UniGroup);
Vue.component('UniIcons', UniIcons);
Vue.component('UniIndexedList', UniIndexedList);
Vue.component('UniLink', UniLink);
Vue.component('UniList', UniList);
Vue.component('UniListChat', UniListChat);
Vue.component('UniListItem', UniListItem);
Vue.component('UniLoadMore', UniLoadMore);
Vue.component('UniNavBar', UniNavBar);
Vue.component('UniNoticeBar', UniNoticeBar);
Vue.component('UniNumberBox', UniNumberBox);
Vue.component('UniPagination', UniPagination);
Vue.component('UniPopup', UniPopup);
Vue.component('UniPopupDialog', UniPopupDialog);
Vue.component('UniPopupMessage', UniPopupMessage);
Vue.component('UniPopupShare', UniPopupShare);
Vue.component('UniRate', UniRate);
Vue.component('UniCol', UniCol);
Vue.component('UniRow', UniRow);
Vue.component('UniSearchBar', UniSearchBar);
Vue.component('UniSection', UniSection);
Vue.component('UniSegmentedControl', UniSegmentedControl);
Vue.component('UniSteps', UniSteps);
Vue.component('UniSwipeAction', UniSwipeAction);
Vue.component('UniSwipeActionItem', UniSwipeActionItem);
Vue.component('UniSwiperDot', UniSwiperDot);
Vue.component('UniTable', UniTable);
Vue.component('UniTbody', UniTbody);
Vue.component('UniTd', UniTd);
Vue.component('UniTh', UniTh);
Vue.component('UniThead', UniThead);
Vue.component('UniTr', UniTr);
Vue.component('UniTag', UniTag);
Vue.component('UniTest', UniTest);
Vue.component('UniTitle', UniTitle);
Vue.component('UniTooltip', UniTooltip);
Vue.component('UniTransition', UniTransition);
Vue.component('UniUi', UniUi);

Vue.component('PressLoading', PressLoading);
Vue.component('PressPicker', PressPicker);
Vue.component('PressDialog', PressDialog);
Vue.component('PressIcon', PressIcon);
Vue.component('PressSwitch', PressSwitch);
Vue.component('PressPopup', PressPopup);
Vue.component('PressInfo', PressInfo);
Vue.component('PressSticky', PressSticky);
Vue.component('PressTab', PressTab);
Vue.component('PressTabs', PressTabs);
Vue.component('PressLoadingIcon', PressLoadingIcon);
Vue.component('PressPickerPlus', PressPickerPlus);
Vue.component('PressDatetimePicker', PressDatetimePicker);
Vue.component('PressSwipeCell', PressSwipeCell);
Vue.component('PressCheckbox', PressCheckbox);
Vue.component('PressTransition', PressTransition);
Vue.component('PressOverlay', PressOverlay);
Vue.component('PressToast', PressToast);


Vue.config.productionTip = false;
App.mpType = 'app';
const app = new Vue({
  ...App,
});
app.$mount();
// #endif

// #ifdef VUE3
// eslint-disable-next-line import/no-duplicates, no-duplicate-imports, import/first
import {
  createSSRApp,
// eslint-disable-next-line import/no-duplicates, no-duplicate-imports, import/first
} from 'vue';
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
// #endif
