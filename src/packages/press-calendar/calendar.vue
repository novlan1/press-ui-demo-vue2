<template>
  <uni-shadow-root class="vant-calendar-calendar">
    <view class="van-calendar">
      <CalendarHeader
        :title="title"
        :show-title="showTitle"
        :subtitle="subtitle"
        :show-subtitle="showSubtitle"
        :first-day-of-week="firstDayOfWeek"
        @click-subtitle="onClickSubtitle"
      >
        <slot
          slot="title"
          name="title"
        />
      </CalendarHeader>

      <scroll-view
        class="van-calendar__body"
        scroll-y
        :scroll-into-view="scrollIntoViewData"
      >
        <month
          v-for="(item,index) in (computed.getMonths(minDate, maxDate))"
          :id="'month'+(index)"
          :key="item.index"
          class="month"
          :data-date="item"
          :date="item"
          :type="type"
          :color="color"
          :min-date="minDate"
          :max-date="maxDate"
          :show-mark="showMark"
          :formatter="formatter"
          :row-height="rowHeight"
          :current-date="currentDate"
          :show-subtitle="showSubtitle"
          :allow-same-day="allowSameDay"
          :show-month-title="index !== 0 || !showSubtitle"
          :first-day-of-week="firstDayOfWeek"
          @click="onClickDay"
        />
      </scroll-view>

      <view :class="true ? utils.bem('calendar__footer', { safeAreaInsetBottom }) : ''">
        <slot name="footer" />
      </view>

      <view :class="true ? utils.bem('calendar__footer', { safeAreaInsetBottom }) : ''">
        <van-button
          v-if="showConfirm"
          round
          block
          type="danger"
          :color="color"
          custom-class="van-calendar__confirm"
          :disabled="computed.getButtonDisabled(type, currentDate)"
          native-type="text"
          @click="onConfirm"
        >
          {{
            computed.getButtonDisabled(type, currentDate)
              ? confirmDisabledText
              : confirmText
          }}
        </van-button>
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>
import CalendarHeader from './components/header/header.vue';
import Month from './components/month/month.vue';
import VanButton from '../press-button/press-button.vue';
import computed from './computed';
import utils from '../wxs-js/utils';

import { ROW_HEIGHT, getPrevDay, getNextDay,
  getToday, compareDay, copyDates, calcDateNum, formatMonthTitle,
  compareMonth, getMonths, getDayByOffset,
  initialMinDate,
  initialMaxDate,
} from './utils';
import Toast from '../press-toast/handler';
import { requestAnimationFrame } from '../common/utils';


const getTime = date => (date instanceof Date ? date.getTime() : date);


export default {
  components: {
    CalendarHeader,
    Month,
    VanButton,
  },
  props: {
    title: {
      type: String,
      default: '日期选择',
    },
    color: { type: String, default: '' },
    // show: {
    //   type: Boolean,
    //   observer(val) {
    //     if (val) {
    //       this.initRect();
    //       this.scrollIntoView();
    //     }
    //   },
    // },
    formatter: { type: [String, Function], default: '' },
    confirmText: {
      type: String,
      default: '确定',
    },
    confirmDisabledText: {
      type: String,
      default: '确定',
    },
    // rangePrompt: { type: String, default: '' },
    // showRangePrompt: {
    //   type: Boolean,
    //   default: true,
    // },
    // defaultDate: {
    //   type: [String, Number],
    //   default: '',
    //   observer(val) {
    //     this.setData({ currentDate: val });
    //     this.scrollIntoView();
    //   },
    // },
    allowSameDay: Boolean,
    type: {
      type: String,
      default: 'single',
      observer: 'reset',
    },
    minDate: {
      type: Number,
      default: initialMinDate,
    },
    maxDate: {
      type: Number,
      default: initialMaxDate,
    },
    // position: {
    //   type: String,
    //   default: 'bottom',
    // },
    rowHeight: {
      type: null,
      default: ROW_HEIGHT,
    },
    // round: {
    //   type: Boolean,
    //   default: true,
    // },
    // poppable: {
    //   type: Boolean,
    //   default: true,
    // },
    showMark: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showSubtitle: {
      type: Boolean,
      default: true,
    },
    safeAreaInsetBottom: {
      type: Boolean,
      default: true,
    },
    // closeOnClickOverlay: {
    //   type: Boolean,
    //   default: true,
    // },
    // maxRange: {
    //   type: [String, Number],
    //   default: null,
    // },
    firstDayOfWeek: {
      type: Number,
      default: 0,
    },
    // readonly: Boolean,
    scrollIntoViewData: {
      type: String,
      default: '',
    },
    currentDate: {
      type: [String, Number, Array],
      default: null,
    },
    subtitle: {
      type: [String],
      default: '',
    },
  },
  data() {
    return {
      computed,
      utils,

      // subtitle: '',
      // currentDate: null,
      // scrollIntoViewData: '',

    };
  },
  methods: {
    onConfirm(...args) {
      this.$emit('onConfirm', ...args);
    },
    onClickSubtitle(...args) {
      this.$emit('onClickSubtitle', ...args);
    },
    scrollIntoView(...args) {
      this.$emit('scrollIntoView', ...args);
    },
    onClickDay(...args) {
      this.$emit('onClickDay', ...args);
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-calendar {
  background-color: var(--calendar-background-color, #fff);
  display: flex;
  flex-direction: column;
  height: var(--calendar-height, 100%);
}
.van-calendar__close-icon {
  top: 11px;
}
.van-calendar__popup--bottom,
.van-calendar__popup--top {
  height: var(--calendar-popup-height, 80%);
}
.van-calendar__popup--left,
.van-calendar__popup--right {
  height: 100%;
}
.van-calendar__body {
  -webkit-overflow-scrolling: touch;
  flex: 1;
  overflow: auto;
}
.van-calendar__footer {
  flex-shrink: 0;
  padding: 0 var(--padding-md, 16px);
}
.van-calendar__footer--safe-area-inset-bottom {
  padding-bottom: env(safe-area-inset-bottom);
}
.van-calendar__footer + .van-calendar__footer,
.van-calendar__footer:empty {
  display: none;
}
.van-calendar__footer:empty + .van-calendar__footer {
  display: block !important;
}
.van-calendar__confirm {
  height: var(--calendar-confirm-button-height, 36px) !important;
  line-height: var(--calendar-confirm-button-line-height, 34px) !important;
  margin: var(--calendar-confirm-button-margin, 7px 0) !important;
}
</style>
