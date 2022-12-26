<template>
  <uni-shadow-root class="vant-calendar-components-header-index">
    <view class="van-calendar__header">
      <block v-if="showTitle">
        <view class="van-calendar__header-title">
          <slot name="title" />
        </view>
        <view class="van-calendar__header-title">
          {{ title }}
        </view>
      </block>

      <view
        v-if="showSubtitle"
        class="van-calendar__header-subtitle"
        @click="onClickSubtitle"
      >
        {{ subtitle }}
      </view>

      <view class="van-calendar__weekdays">
        <view
          v-for="(item,index) in (weekdays)"
          :key="index"
          class="van-calendar__weekday"
        >
          {{ item }}
        </view>
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>

// import { VantComponent } from '../../../common/component';
// global.__wxRoute = 'vant/calendar/components/header/index';


export default {
  props: {
    title: {
      type: String,
      default: '日期选择',
    },
    subtitle: { type: String, default: '' },
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: {
      type: Number,
      default: 0,
      // observer: 'initWeekDay',
    },
  },
  data() {
    return {
      weekdays: [],
    };
  },
  watch: {
    firstDayOfWeek: {
      handler() {
        this.initWeekDay();
      },
    },
  },
  created() {
    this.initWeekDay();
  },
  methods: {
    initWeekDay() {
      const defaultWeeks = ['日', '一', '二', '三', '四', '五', '六'];
      const firstDayOfWeek = this.firstDayOfWeek || 0;
      this.weekdays = [
        ...defaultWeeks.slice(firstDayOfWeek, 7),
        ...defaultWeeks.slice(0, firstDayOfWeek),
      ];
      // this.setData({
      //   weekdays: [
      //     ...defaultWeeks.slice(firstDayOfWeek, 7),
      //     ...defaultWeeks.slice(0, firstDayOfWeek),
      //   ],
      // });
    },
    onClickSubtitle(event) {
      this.$emit('click-subtitle', event);
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../../../common/index.scss";

.van-calendar__header {
  box-shadow: var(
    --calendar-header-box-shadow,
    0 2px 10px hsla(220, 1%, 50%, 0.16)
  );
  flex-shrink: 0;
}
.van-calendar__header-subtitle,
.van-calendar__header-title {
  font-weight: var(--font-weight-bold, 500);
  height: var(--calendar-header-title-height, 44px);
  line-height: var(--calendar-header-title-height, 44px);
  text-align: center;
}
.van-calendar__header-title + .van-calendar__header-title,
.van-calendar__header-title:empty {
  display: none;
}
.van-calendar__header-title:empty + .van-calendar__header-title {
  display: block !important;
}
.van-calendar__weekdays {
  display: flex;
}
.van-calendar__weekday {
  flex: 1;
  font-size: var(--calendar-weekdays-font-size, 12px);
  line-height: var(--calendar-weekdays-height, 30px);
  text-align: center;
}
</style>
