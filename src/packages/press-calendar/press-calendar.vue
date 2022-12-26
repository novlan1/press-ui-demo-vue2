<template>
  <uni-shadow-root class="vant-calendar-index">
    <van-popup
      v-if="poppable"
      :custom-class="'van-calendar__popup--'+(position)"
      close-icon-class="van-calendar__close-icon"
      :show="show"
      :round="round"
      :position="position"
      :closeable="showTitle || showSubtitle"
      :close-on-click-overlay="closeOnClickOverlay"
      @enter="onOpen"
      @close="onClose"
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <Calendar
        :title="title"
        :color="color"
        :formatter="formatter"
        :confirm-text="confirmText"
        :confirm-disabled-text="confirmDisabledText"
        :allow-same-day="allowSameDay"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        :row-height="rowHeight"
        :show-mark="showMark"
        :show-title="showTitle"
        :show-confirm="showConfirm"
        :show-subtitle="showSubtitle"
        :safe-area-inset-bottom="safeAreaInsetBottom"
        :first-day-of-week="firstDayOfWeek"
        :scroll-into-view-data="scrollIntoViewData"
        :current-date="currentDate"
        :subtitle="subtitle"
        @onConfirm="onConfirm"
        @onClickSubtitle="onClickSubtitle"
        @scrollIntoView="scrollIntoView"
        @onClickDay="onClickDay"
      />
    </van-popup>

    <Calendar
      v-else
      :title="title"
      :color="color"
      :formatter="formatter"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      :allow-same-day="allowSameDay"
      :type="type"
      :min-date="minDate"
      :max-date="maxDate"
      :row-height="rowHeight"
      :show-mark="showMark"
      :show-title="showTitle"
      :show-confirm="showConfirm"
      :show-subtitle="showSubtitle"
      :safe-area-inset-bottom="safeAreaInsetBottom"
      :first-day-of-week="firstDayOfWeek"
      :scroll-into-view-data="scrollIntoViewData"
      :current-date="currentDate"
      :subtitle="subtitle"
      @onConfirm="onConfirm"
      @onClickSubtitle="onClickSubtitle"
      @scrollIntoView="scrollIntoView"
      @onClickDay="onClickDay"
    />

    <van-toast id="press-toast" />
  </uni-shadow-root>
</template>
<script>

import VanPopup from '../press-popup-plus/press-popup-plus.vue';
import VanToast from '../press-toast/press-toast.vue';
import Calendar from './calendar.vue';

import {
  ROW_HEIGHT,
  getPrevDay,
  getNextDay,
  getToday,
  compareDay,
  copyDates,
  calcDateNum,
  formatMonthTitle,
  compareMonth,
  getMonths,
  getDayByOffset,
  initialMinDate,
  initialMaxDate,
} from './utils';
import Toast from '../press-toast/handler';
import { requestAnimationFrame } from '../common/utils';


const getTime = date => (date instanceof Date ? date.getTime() : date);

export default {
  components: {
    Calendar,
    VanPopup,
    VanToast,
  },
  props: {
    title: {
      type: String,
      default: '日期选择',
    },
    color: { type: String, default: '' },
    show: {
      type: Boolean,
      default: false,
      // observer(val) {
      //   if (val) {
      //     this.initRect();
      //     this.scrollIntoView();
      //   }
      // },
    },
    formatter: { type: [String, Function], default: '' },
    confirmText: {
      type: String,
      default: '确定',
    },
    confirmDisabledText: {
      type: String,
      default: '确定',
    },
    rangePrompt: { type: String, default: '' },
    showRangePrompt: {
      type: Boolean,
      default: true,
    },
    defaultDate: {
      type: [String, Number],
      default: '',
      // observer(val) {
      //   // this.setData({ currentDate: val });
      //   this.currentDate = val;
      //   this.scrollIntoView();
      // },
    },
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
    position: {
      type: String,
      default: 'bottom',
    },
    rowHeight: {
      type: null,
      default: ROW_HEIGHT,
    },
    round: {
      type: Boolean,
      default: true,
    },
    poppable: {
      type: Boolean,
      default: true,
    },
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
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    maxRange: {
      type: [String, Number],
      default: null,
    },
    firstDayOfWeek: {
      type: Number,
      default: 0,
    },
    readonly: Boolean,
  },
  data() {
    return {
      subtitle: '',
      currentDate: null,
      scrollIntoViewData: '',
    };
  },
  watch: {
    show: {
      handler(val) {
        if (val) {
          this.initRect();
          this.scrollIntoView();
        }
      },
    },
    defaultDate: {
      handler(val) {
        // this.setData({ currentDate: val });
        this.currentDate = val;
        this.scrollIntoView();
      },
    },
    type: {
      handler() {
        this.reset();
      },
    },
  },
  created() {
    // this.setData({
    //   currentDate: this.getInitialDate(this.data.defaultDate),
    // });
    this.currentDate = this.getInitialDate(this.defaultDate);
  },
  mounted() {
    if (this.show || !this.poppable) {
      this.initRect();
      this.scrollIntoView();
    }
  },
  methods: {
    reset() {
      // this.setData({ currentDate: this.getInitialDate() });
      this.currentDate = this.getInitialDate();
      this.scrollIntoView();
    },
    initRect() {
      if (this.contentObserver != null) {
        this.contentObserver.disconnect();
      }
      const contentObserver = this.createIntersectionObserver({
        thresholds: [0, 0.1, 0.9, 1],
        observeAll: true,
      });
      this.contentObserver = contentObserver;
      contentObserver.relativeTo('.van-calendar__body');
      contentObserver.observe('.month', (res) => {
        if (res.boundingClientRect.top <= res.relativeRect.top) {
          // @ts-ignore
          // this.setData({ subtitle: formatMonthTitle(res.dataset.date) });
          this.subtitle = formatMonthTitle(res.dataset.date);
        }
      });
    },
    limitDateRange(date, minDate = null, maxDate = null) {
      minDate = minDate || this.minDate;
      maxDate = maxDate || this.maxDate;
      if (compareDay(date, minDate) === -1) {
        return minDate;
      }
      if (compareDay(date, maxDate) === 1) {
        return maxDate;
      }
      return date;
    },
    getInitialDate(defaultDate = null) {
      const { type, minDate, maxDate } = this;
      const now = getToday().getTime();
      if (type === 'range') {
        if (!Array.isArray(defaultDate)) {
          defaultDate = [];
        }
        const [startDay, endDay] = defaultDate || [];
        const start = this.limitDateRange(startDay || now, minDate, getPrevDay(new Date(maxDate)).getTime());
        const end = this.limitDateRange(endDay || now, getNextDay(new Date(minDate)).getTime());
        return [start, end];
      }
      if (type === 'multiple') {
        if (Array.isArray(defaultDate)) {
          return defaultDate.map(date => this.limitDateRange(date));
        }
        return [this.limitDateRange(now)];
      }
      if (!defaultDate || Array.isArray(defaultDate)) {
        defaultDate = now;
      }
      return this.limitDateRange(defaultDate);
    },
    scrollIntoView() {
      requestAnimationFrame(() => {
        const { currentDate, type, show, poppable, minDate, maxDate } = this;
        // @ts-ignore
        const targetDate = type === 'single' ? currentDate : currentDate[0];
        const displayed = show || !poppable;
        if (!targetDate || !displayed) {
          return;
        }
        const months = getMonths(minDate, maxDate);
        months.some((month, index) => {
          if (compareMonth(month, targetDate) === 0) {
            // this.setData({ scrollIntoViewData: `month${index}` });
            this.scrollIntoViewData = `month${index}`;
            return true;
          }
          return false;
        });
      });
    },
    onOpen() {
      this.$emit('open');
    },
    onOpened() {
      this.$emit('opened');
    },
    onClose() {
      this.$emit('close');
    },
    onClosed() {
      this.$emit('closed');
    },
    onClickDay({ date }) {
      if (this.readonly) {
        return;
      }
      const { type, currentDate, allowSameDay } = this;
      if (type === 'range') {
        // @ts-ignore
        const [startDay, endDay] = currentDate;
        if (startDay && !endDay) {
          const compareToStart = compareDay(date, startDay);
          if (compareToStart === 1) {
            const { days } = this.selectComponent('.month');
            days.some((day, index) => {
              const isDisabled = day.type === 'disabled'
                                && getTime(startDay) < getTime(day.date)
                                && getTime(day.date) < getTime(date);
              if (isDisabled) {
                ({ date } = days[index - 1]);
              }
              return isDisabled;
            });
            this.select([startDay, date], true);
          } else if (compareToStart === -1) {
            this.select([date, null]);
          } else if (allowSameDay) {
            this.select([date, date]);
          }
        } else {
          this.select([date, null]);
        }
      } else if (type === 'multiple') {
        let selectedIndex;
        // @ts-ignore
        const selected = currentDate.some((dateItem, index) => {
          const equal = compareDay(dateItem, date) === 0;
          if (equal) {
            selectedIndex = index;
          }
          return equal;
        });
        if (selected) {
          // @ts-ignore
          const cancelDate = currentDate.splice(selectedIndex, 1);
          // this.setData({ currentDate });
          this.currentDate = currentDate;
          this.unselect(cancelDate);
        } else {
          // @ts-ignore
          this.select([...currentDate, date]);
        }
      } else {
        this.select(date, true);
      }
    },
    unselect(dateArray) {
      const date = dateArray[0];
      if (date) {
        this.$emit('unselect', copyDates(date));
      }
    },
    select(date, complete) {
      if (complete && this.type === 'range') {
        const valid = this.checkRange(date);
        if (!valid) {
          // auto selected to max range if showConfirm
          if (this.showConfirm) {
            this.emit([
              date[0],
              getDayByOffset(date[0], this.maxRange - 1),
            ]);
          } else {
            this.emit(date);
          }
          return;
        }
      }
      this.emit(date);
      if (complete && !this.showConfirm) {
        this.onConfirm();
      }
    },
    emit(date) {
      this.currentDate = Array.isArray(date) ? date.map(getTime) : getTime(date);
      console.log('currentDate', this.currentDate);
      // this.setData({
      //   currentDate: Array.isArray(date) ? date.map(getTime) : getTime(date),
      // });
      this.$emit('select', copyDates(date));
    },
    checkRange(date) {
      const { maxRange, rangePrompt, showRangePrompt } = this;
      if (maxRange && calcDateNum(date) > maxRange) {
        if (showRangePrompt) {
          Toast({
            context: this,
            message: rangePrompt || `选择天数不能超过 ${maxRange} 天`,
          });
        }
        this.$emit('over-range');
        return false;
      }
      return true;
    },
    onConfirm() {
      if (this.type === 'range'
                && !this.checkRange(this.currentDate)) {
        return;
      }
      wx.nextTick(() => {
        // @ts-ignore
        this.$emit('confirm', copyDates(this.currentDate));
      });
    },
    onClickSubtitle(event) {
      console.log('onClickSubtitle.event', event);
      this.$emit('click-subtitle', event);
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
