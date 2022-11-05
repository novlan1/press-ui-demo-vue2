import App from './App';
// #ifndef VUE3
import Vue from 'vue';
// import './global-comp';

import MatchLoading from 'packages/uni_modules/match/components/match-loading/match-loading.vue';
import MatchPicker from 'packages/uni_modules/match/components/match-picker/match-picker.vue';
import PressDialog from 'packages/uni_modules/match/components/press-dialog/press-dialog.vue';

import UniBadge from 'packages/uni_modules/uni-badge/components/uni-badge/uni-badge.vue';
import UniBreadcrumb from 'packages/uni_modules/uni-breadcrumb/components/uni-breadcrumb/uni-breadcrumb.vue';
import UniBreadcrumbItem from 'packages/uni_modules/uni-breadcrumb/components/uni-breadcrumb-item/uni-breadcrumb-item.vue';
import UniCalendar from 'packages/uni_modules/uni-calendar/components/uni-calendar/uni-calendar.vue';
import UniCard from 'packages/uni_modules/uni-card/components/uni-card/uni-card.vue';
import UniCollapse from 'packages/uni_modules/uni-collapse/components/uni-collapse/uni-collapse.vue';
import UniCollapseItem from 'packages/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue';
import UniCombox from 'packages/uni_modules/uni-combox/components/uni-combox/uni-combox.vue';
import UniCountdown from 'packages/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.vue';
import UniDataCheckbox from 'packages/uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.vue';
import UniDataPicker from 'packages/uni_modules/uni-data-picker/components/uni-data-picker/uni-data-picker.vue';
import UniDataPickerview from 'packages/uni_modules/uni-data-picker/components/uni-data-pickerview/uni-data-pickerview.vue';
import UniDataSelect from 'packages/uni_modules/uni-data-select/components/uni-data-select/uni-data-select.vue';
import UniDateformat from 'packages/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue';
import UniDatetimePicker from 'packages/uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.vue';
import UniDrawer from 'packages/uni_modules/uni-drawer/components/uni-drawer/uni-drawer.vue';
import UniEasyinput from 'packages/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue';
import UniFab from 'packages/uni_modules/uni-fab/components/uni-fab/uni-fab.vue';
import UniFav from 'packages/uni_modules/uni-fav/components/uni-fav/uni-fav.vue';
import UniFilePicker from 'packages/uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.vue';
import UniForms from 'packages/uni_modules/uni-forms/components/uni-forms/uni-forms.vue';
import UniFormsItem from 'packages/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue';
import UniGoodsNav from 'packages/uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue';
import UniGrid from 'packages/uni_modules/uni-grid/components/uni-grid/uni-grid.vue';
import UniGridItem from 'packages/uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.vue';
import UniGroup from 'packages/uni_modules/uni-group/components/uni-group/uni-group.vue';
import UniIcons from 'packages/uni_modules/uni-icons/components/uni-icons/uni-icons.vue';
import UniIndexedList from 'packages/uni_modules/uni-indexed-list/components/uni-indexed-list/uni-indexed-list.vue';
import UniLink from 'packages/uni_modules/uni-link/components/uni-link/uni-link.vue';
import UniList from 'packages/uni_modules/uni-list/components/uni-list/uni-list.vue';

import UniListChat from 'packages/uni_modules/uni-list/components/uni-list-chat/uni-list-chat.vue';
import UniListItem from 'packages/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue';
import UniLoadMore from 'packages/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue';
import UniNavBar from 'packages/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue';
import UniNoticeBar from 'packages/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue';
import UniNumberBox from 'packages/uni_modules/uni-number-box/components/uni-number-box/uni-number-box.vue';
import UniPagination from 'packages/uni_modules/uni-pagination/components/uni-pagination/uni-pagination.vue';
import UniPopup from 'packages/uni_modules/uni-popup/components/uni-popup/uni-popup.vue';
import UniPopupDialog from 'packages/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue';
import UniPopupMessage from 'packages/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue';
import UniPopupShare from 'packages/uni_modules/uni-popup/components/uni-popup-share/uni-popup-share.vue';
import UniRate from 'packages/uni_modules/uni-rate/components/uni-rate/uni-rate.vue';
import UniCol from 'packages/uni_modules/uni-row/components/uni-col/uni-col.vue';
import UniRow from 'packages/uni_modules/uni-row/components/uni-row/uni-row.vue';

import UniSearchBar from 'packages/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue';
import UniSection from 'packages/uni_modules/uni-section/components/uni-section/uni-section.vue';
import UniSegmentedControl from 'packages/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue';
import UniSteps from 'packages/uni_modules/uni-steps/components/uni-steps/uni-steps.vue';
import UniSwipeAction from 'packages/uni_modules/uni-swipe-action/components/uni-swipe-action/uni-swipe-action.vue';
import UniSwipeActionItem from 'packages/uni_modules/uni-swipe-action/components/uni-swipe-action-item/uni-swipe-action-item.vue';
import UniSwiperDot from 'packages/uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.vue';
import UniTable from 'packages/uni_modules/uni-table/components/uni-table/uni-table.vue';
import UniTbody from 'packages/uni_modules/uni-table/components/uni-tbody/uni-tbody.vue';
import UniTd from 'packages/uni_modules/uni-table/components/uni-td/uni-td.vue';
import UniTh from 'packages/uni_modules/uni-table/components/uni-th/uni-th.vue';
import UniThead from 'packages/uni_modules/uni-table/components/uni-thead/uni-thead.vue';
import UniTr from 'packages/uni_modules/uni-table/components/uni-tr/uni-tr.vue';
import UniTag from 'packages/uni_modules/uni-tag/components/uni-tag/uni-tag.vue';
import UniTest from 'packages/uni_modules/uni-test/components/uni-test/uni-test.vue';
import UniTitle from 'packages/uni_modules/uni-title/components/uni-title/uni-title.vue';
import UniTooltip from 'packages/uni_modules/uni-tooltip/components/uni-tooltip/uni-tooltip.vue';
import UniTransition from 'packages/uni_modules/uni-transition/components/uni-transition/uni-transition.vue';
import UniUi from 'packages/uni_modules/uni-ui/components/uni-ui/uni-ui.vue';
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

Vue.component('MatchLoading', MatchLoading);
Vue.component('MatchPicker', MatchPicker);
Vue.component('PressDialog', PressDialog);

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
