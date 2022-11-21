<template>
  <view>
    <view>
      <button @click.stop="onShowPopup('normal')">
        关闭icon
      </button>
      <button @click.stop="onShowPopup('cancel')">
        取消icon
      </button>
      <button @click.stop="onShowPopup('noClose')">
        没有关闭/取消
      </button>
      <button @click.stop="onShowPopup('hor')">
        横版
      </button>
    </view>
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

    <PressPopup
      v-if="popupOptions.cancel.show"
      :is-showpopup-close="true"
      :show-back-arrow="true"
      :popup-title="popupOptions.cancel.title"
      popup-title-btn="确定"
      @onConfirm="popupOptions.cancel.onConfirm"
      @onCancel="popupOptions.cancel.onCancel"
    >
      <view class="content">
        一些内容
      </view>
    </PressPopup>

    <PressPopup
      v-if="popupOptions.noClose.show"
      :is-showpopup-close="false"
      :show-back-arrow="false"
      :popup-title="popupOptions.noClose.title"
      popup-title-btn="确定"
      @onConfirm="popupOptions.noClose.onConfirm"
      @onCancel="popupOptions.noClose.onCancel"
    >
      <view class="content">
        一些内容
      </view>
    </PressPopup>

    <PressPopup
      v-if="popupOptions.hor.show"
      :is-showpopup-close="true"
      :is-cross-slab="true"
      :width-number="54"
      :popup-title="popupOptions.hor.title"
      @onConfirm="popupOptions.hor.onConfirm"
      @onCancel="popupOptions.hor.onCancel"
    >
      <view class="content">
        一些内容
      </view>
    </PressPopup>
  </view>
</template>
<script>

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
        cancel: {
          show: false,
          title: '决胜方式',
          onCancel: () => {
            this.popupOptions.cancel.show = false;
          },
          onConfirm: () => {
            this.popupOptions.cancel.show = false;
          },
        },
        noClose: {
          show: false,
          title: '决胜方式',
          onCancel: () => {
            this.popupOptions.noClose.show = false;
          },
          onConfirm: () => {
            this.popupOptions.noClose.show = false;
          },
        },
        hor: {
          show: false,
          title: '决胜方式',
          onCancel: () => {
            this.popupOptions.hor.show = false;
          },
          onConfirm: () => {
            this.popupOptions.hor.show = false;
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
