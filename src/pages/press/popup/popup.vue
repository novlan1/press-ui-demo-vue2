<template>
  <view>
    <view>
      <button @click.stop="onShowPopup('normal')">
        展示
      </button>
      <!-- <button @click.stop="onShowPopup('default')">
        设置默认项
      </button>
      <button @click.stop="onShowPopup('multiColumn')">
        多列
      </button>
      <button @click.stop="onShowPopup('children')">
        级联选择
      </button> -->
    </view>
    <!-- <press-dialog id="tip-match-comm-tips-dialog" /> -->
    <PressPopup
      v-if="popupOptions.normal.show"
      :is-showpopup-close="true"
      :show-back-arrow="false"
      :popup-title="popupOptions.normal.title"
      popup-title-btn="确定"
      @onConfirm="popupOptions.normal.onConfirm"
      @onCancel="popupOptions.normal.onCancel"
    >
      <view class="content">
        一些内容
      </view>
    </PressPopup>
  </view>
</template>
<script>
// import PressDialog from 'src/packages/press-dialog';

export default {
  data() {
    return {
      popupOptions: {
        normal: {
          show: false,
          title: '决胜方式',
          onCancel: () => {
            this.popupOptions.normal.show = false;
          },
          onConfirm: () => {
            this.popupOptions.normal.show = false;
          },
        },
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
    onShowPopup(type) {
      console.log('type', type);
      if (this.popupOptions[type]) {
        this.popupOptions[type].show = true;
      }
    },
  },
};
</script>
<style scoped>
.content {
  font-size: 16px;
  padding: 20px;
}
</style>
