<template>
  <div class="wrap">
    <demo-block title="选择完整时间">
      <press-datetime-picker
        type="datetime"
        :value="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @input="onInput"
      />
    </demo-block>

    <demo-block title="选择年月日">
      <press-datetime-picker
        type="date"
        :value="currentDate"
        :min-date="minDate"
        :formatter="formatter"
        @input="onInput"
      />
    </demo-block>

    <demo-block title="选择年月">
      <press-datetime-picker
        type="year-month"
        :value="currentDate"
        :min-date="minDate"
        @input="onInput"
      />
    </demo-block>

    <demo-block title="选择时间">
      <press-datetime-picker
        type="time"
        :value="currentTime"
        :min-hour="minHour"
        :max-hour="maxHour"
        @input="onInputTime"
      />
    </demo-block>

    <demo-block title="选项过滤器">
      <press-datetime-picker
        type="time"
        :value="currentTime"
        :filter="filter"
        @input="onInputTime"
      />
    </demo-block>
  </div>
</template>
<script>

export default {
  data() {
    return {
      minHour: 10,
      maxHour: 20,
      minDate: new Date().getTime(),
      maxDate: new Date(2099, 10, 1).getTime(),
      currentDate: new Date().getTime(),
      currentTime: '12:00',

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

    onInput(event) {
      console.log('onInput.event', event);
      this.currentDate = event;
    },
    onInputTime(event) {
      console.log('onInputTime.event', event);
      this.currentTime = event;
    },
  },
};
</script>

<style scoped lang="scss">
// .wrap {
//   padding: 20px;
// }
</style>

