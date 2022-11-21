<template>
  <view class="wrap">
    <press-switch
      :open="isOpen"
      @onSwitchChange="onSwitchChange"
    />
    <view class="info-outer">
      <view class="info-wrap">
        <press-info
          :dot="true"
          custom-class="cccc"
        />
      </view>
      <view class="info-wrap">
        <press-info
          info="123"
          custom-class="cccc"
        />
      </view>
    </view>
    <view>
      <press-sticky>
        <button class="text">
          基础用法
        </button>
      </press-sticky>
    </view>
    <view>
      <press-sticky :offset-top="120">
        <view class="text">
          指定offsetTop
        </view>
      </press-sticky>
    </view>
    <press-tabs
      ref="pressTabs"
      custom-class="press-tabs-demo"
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab title="标签 3">
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
    </press-tabs>

    <view>默认值</view>
    <press-tabs
      custom-class="press-tabs-demo"
      :active="active"
      animated
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab title="标签 3">
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
    </press-tabs>

    <press-tabs
      custom-class="press-tabs-demo"
      :active="active"
      swipeable
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab title="标签 3">
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
    </press-tabs>

    <press-tabs
      custom-class="press-tabs-demo"
    >
      <press-tab
        title="标签 1"
        name="a"
      >
        内容 1
      </press-tab>
      <press-tab
        title="标签 2"
        name="b"
      >
        内容 2
      </press-tab>
      <press-tab
        title="标签 3"
        name="c"
      >
        内容 3
      </press-tab>
    </press-tabs>


    <press-tabs
      ref="pressTabs"
      custom-class="press-tabs-demo"
      :active="6"
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab title="标签 3">
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
      <press-tab title="标签 5">
        内容 5
      </press-tab>
      <press-tab title="标签 6">
        内容 6
      </press-tab>
      <press-tab title="标签 7">
        内容 7
      </press-tab>
    </press-tabs>

    <press-tabs
      ref="pressTabs"
      custom-class="press-tabs-demo"
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab
        title="标签 3"
        disabled
      >
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
    </press-tabs>

    <press-tabs
      custom-class="press-tabs-demo"
      type="card"
      @change="onChange"
    >
      <press-tab title="标签 1">
        内容 1
      </press-tab>
      <press-tab title="标签 2">
        内容 2
      </press-tab>
      <press-tab
        title="标签 3"
      >
        内容 3
      </press-tab>
      <press-tab title="标签 4">
        内容 4
      </press-tab>
    </press-tabs>
  </view>
</template>
<script>

export default {
  data() {
    return {
      isOpen: false,
      active: 2,
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  mounted() {
    // console.log('this.$refs.pressTabs.resize', this.$refs.pressTabs.resize);
    // setTimeout(() => {
    //   this.$refs.pressTabs.resize();
    // }, 0);
    this.$nextTick(() => {
      this.$refs.pressTabs.resize();
    });
  },
  methods: {
    onShow() {

    },
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
    onChange(val) {
      console.log('onChange.val', val);
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding: 20px;
  font-size: 16px;
  height: 1000px;
  background: #fff;
  overflow: scroll;
  .info-outer {
    display: flex;
    align-items: center;
    .info-wrap {
      position: relative;
      width: 50px;
    }
  }
  .text {
    font-size: 16px;
  }
  ::v-deep .press-tabs-demo {
    margin-top: 50px;
  }
}
</style>

