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
</style>
