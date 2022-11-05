<template>
  <view
    v-if="show"
    class="u-toolbar"
    @touchmove.stop.prevent="noop"
  >
    <view
      class="u-toolbar__cancel__wrapper"
      hover-class="u-hover-class"
    >
      <text
        class="u-toolbar__wrapper__cancel"
        :style="{
          color: cancelColor
        }"
        @tap="cancel"
      >
        {{ cancelText }}
      </text>
    </view>
    <text
      v-if="title"
      class="u-toolbar__title u-line-1"
    >
      {{ title }}
    </text>
    <view
      class="u-toolbar__confirm__wrapper"
      hover-class="u-hover-class"
    >
      <text
        class="u-toolbar__wrapper__confirm"
        :style="{
          color: confirmColor
        }"
        @tap="confirm"
      >
        {{ confirmText }}
      </text>
    </view>
  </view>
</template>

<script>
/**
 * Toolbar 工具条
 * @description
 * @property {Boolean}	show			是否展示工具条（默认 true ）
 * @property {String}	cancelText		取消按钮的文字（默认 '取消' ）
 * @property {String}	confirmText		确认按钮的文字（默认 '确认' ）
 * @property {String}	cancelColor		取消按钮的颜色（默认 '#909193' ）
 * @property {String}	confirmColor	确认按钮的颜色（默认 '#3c9cff' ）
 * @property {String}	title			标题文字
 * @event {Function}
 * @example
 */
export default {
  name: 'UToolbar',
  // mixins: [uni.$u.mpMixin, uni.$u.mixin,props],
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: true,
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: '取消',
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: '确认',
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: '#909193',
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: '#3c9cff',
    },
    // 标题文字
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    // 点击取消按钮
    cancel() {
      this.$emit('cancel');
    },
    // 点击确定按钮
    confirm() {
      this.$emit('confirm');
    },
    // 阻止事件冒泡
    preventEvent(e) {
      e && typeof (e.stopPropagation) === 'function' && e.stopPropagation();
    },
    // 空操作
    noop(e) {
      this.preventEvent(e);
    },
  },
};
</script>

<style lang="scss" scoped>
// 通过scss的mixin功能，把原来需要写4行的css，变成一行
// 目的是保持代码干净整洁，不至于在nvue下，到处都要写display:flex的条件编译
@mixin flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: $direction;
}

/* #ifndef APP-NVUE */
// 由于uView是基于nvue环境进行开发的，此环境中普通元素默认为flex-direction: column;
// 所以在非nvue中，需要对元素进行重置为flex-direction: column; 否则可能会表现异常
view,
scroll-view,
swiper-item {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}
/* #endif */

.u-toolbar {
  height: 42px;
  @include flex;
  justify-content: space-between;
  align-items: center;

  &__wrapper {
    &__cancel {
      color: $u-tips-color;
      font-size: 15px;
      padding: 0 15px;
    }
  }

  &__title {
    color: $u-main-color;
    padding: 0 60rpx;
    font-size: 16px;
    flex: 1;
    text-align: center;
  }

  &__wrapper {
    &__confirm {
      color: $u-primary;
      font-size: 15px;
      padding: 0 15px;
    }
  }
}
</style>
