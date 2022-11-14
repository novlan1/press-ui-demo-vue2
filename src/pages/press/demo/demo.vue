<template>
  <view>
    <page-head title="scroll-view,区域滚动视图" />
    <view class="uni-padding-wrap uni-common-mt">
      <view class="uni-title uni-common-mt">
        Vertical Scroll
        <text>\n纵向滚动</text>
      </view>
      <view>
        <scroll-view
          :scroll-top="scrollTop"
          scroll-y="true"
          class="scroll-Y"
          @scrolltoupper="upper"
          @scrolltolower="lower"
          @scroll="scroll"
        >
          <view
            id="demo1"
            class="scroll-view-item uni-bg-red"
          >
            A
          </view>
          <view
            id="demo2"
            class="scroll-view-item uni-bg-green"
          >
            B
          </view>
          <view
            id="demo3"
            class="scroll-view-item uni-bg-blue"
          >
            C
          </view>
        </scroll-view>
      </view>
      <view
        class="uni-link uni-center uni-common-mt"
        @tap="goTop"
      >
        点击这里返回顶部
      </view>

      <view class="uni-title uni-common-mt">
        Horizontal Scroll
        <text>\n横向滚动</text>
      </view>
      <view>
        <scroll-view
          class="scroll-view_H"
          scroll-x="true"
          scroll-left="120"
          @scroll="scroll"
        >
          <view
            id="demo1"
            class="scroll-view-item_H uni-bg-red"
          >
            A
          </view>
          <view
            id="demo2"
            class="scroll-view-item_H uni-bg-green"
          >
            B
          </view>
          <view
            id="demo3"
            class="scroll-view-item_H uni-bg-blue"
          >
            C
          </view>
        </scroll-view>
      </view>
      <view class="uni-common-pb" />
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      scrollTop: 0,
      old: {
        scrollTop: 0,
      },
    };
  },
  methods: {
    upper(e) {
      console.log(e);
    },
    lower(e) {
      console.log(e);
    },
    scroll(e) {
      console.log(e);
      this.old.scrollTop = e.detail.scrollTop;
    },
    goTop() {
      // 解决view层不同步的问题
      this.scrollTop = this.old.scrollTop;
      this.$nextTick(function () {
        this.scrollTop = 0;
      });
      uni.showToast({
        icon: 'none',
        title: '纵向滚动 scrollTop 值已被修改为 0',
      });
    },
  },
};
</script>

<style>
.scroll-Y {
  height: 300rpx;
}
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
}
.scroll-view-item {
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 100%;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
  font-size: 36rpx;
}
.uni-bg-red {
  background: #f76260;
  color: #fff;
}
.uni-bg-blue {
  background: #007aff;
  color: #fff;
}
.uni-bg-green {
  background: #09bb07;
  color: #fff;
}
</style>
