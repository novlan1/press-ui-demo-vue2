<template>
  <view class="wrap">
    <press-datetime-picker
      type="datetime"
      :value="currentDate"
      @input="onInput"
    />

    <press-datetime-picker
      type="date"
      :value="currentDate"
      :min-date="minDate"
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

      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        }
        if (type === 'month') {
          return `${value}月`;
        }
        return value;
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

