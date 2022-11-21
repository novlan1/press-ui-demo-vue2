<template>
  <view class="wrap">
    <press-datetime-picker
      type="datetime"
      :value="currentDate"
      :formatter="formatter"
      :filter="filter"
      @input="onInput"
    />

    <press-datetime-picker
      type="date"
      :value="currentDate"
      :min-date="minDate"
      :filter="filter"
      :formatter="formatter"
      @input="onInput"
    />
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date().getTime(),
      maxDate: new Date(2019, 10, 1).getTime(),
      currentDate: new Date().getTime(),

      formatter(type, val) {
        if (type === 'year') {
          return `${val}年`;
        } if (type === 'month') {
          return `${val}月`;
        } if (type === 'day') {
          return `${val}日`;
        } if (type === 'hour') {
          return `${val}时`;
        } if (type === 'minute') {
          return `${val}分`;
        }
      },
      filter(type, options) {
        if (type === 'minute') {
          return options.filter(option => option % 5 === 0);
        }
        return options;
      },
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  methods: {
    onShow() {

    },
    onInput(event) {
      console.log('onInput.event', event);
      this.currentDate = event;// event.detail;
      // this.setData({
      //   currentDate: event.detail,
      // });
    },
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 20px;
}
</style>

