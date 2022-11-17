<template>
  <uni-shadow-root class="vant-picker-toolbar">
    <view
      v-if="showToolbar"
      class="van-picker__toolbar toolbar-class"
    >
      <view
        class="van-picker__cancel"
        hover-class="van-picker__cancel--hover"
        hover-stay-time="70"
        data-type="cancel"
        @click="emit"
      >
        {{ cancelButtonText }}
      </view>
      <view
        v-if="title"
        class="van-picker__title van-ellipsis"
      >
        {{
          title
        }}
      </view>
      <view
        class="van-picker__confirm"
        hover-class="van-picker__confirm--hover"
        hover-stay-time="70"
        data-type="confirm"
        @click="emit"
      >
        {{ confirmButtonText }}
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>

// global.__wxRoute = 'vant/picker/toolbar';

// Component({});
export default {
  props: {
    title: String,
    showToolbar: Boolean,
    cancelButtonText: {
      type: String,
      default: '取消',
    },
    confirmButtonText: {
      type: String,
      default: '确认',
    },
  },
  methods: {
    emit(...args) {
      console.log('emit.args', args);
      this.$emit('emit', ...args);
    },
  },
};

// export default global.__wxComponents['vant/picker/toolbar'];
</script>
<style platform="mp-weixin">
.van-picker__toolbar {
  display: flex;
  height: var(--picker-toolbar-height, 44px);
  justify-content: space-between;
  line-height: var(--picker-toolbar-height, 44px);
}
.van-picker__cancel,
.van-picker__confirm {
  font-size: var(--picker-action-font-size, 14px);
  padding: var(--picker-action-padding, 0 16px);
}
.van-picker__cancel--hover,
.van-picker__confirm--hover {
  opacity: 0.7;
}
.van-picker__confirm {
  color: var(--picker-confirm-action-color, #576b95);
}
.van-picker__cancel {
  color: var(--picker-cancel-action-color, #969799);
}
.van-picker__title {
  font-size: var(--picker-option-font-size, 16px);
  font-weight: var(--font-weight-bold, 500);
  max-width: 50%;
  text-align: center;
}
</style>
