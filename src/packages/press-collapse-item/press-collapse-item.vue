<template>
  <uni-shadow-root class="vant-collapse-item-index">
    <view :class="'van-collapse-item custom-class '+(index !== 0 ? 'van-hairline--top' : '')">
      <!-- 【修改点】cell增加center，垂直居中 -->
      <van-cell
        :size="size"
        :title="title"
        title-class="title-class"
        :icon="icon"
        :value="value"
        :label="label"
        :is-link="isLink"
        :clickable="clickable"
        :border="border && expanded"
        :class="collapseItemClass"
        right-icon-class="van-cell__right-icon"
        custom-class="van-cell"
        hover-class="van-cell--hover"
        center
        @click="onClick"
      >
        <!-- #ifndef H5 -->
        <template
          #title
        >
          <slot
            slot="title"
            name="title"
          />
        </template>
        <!-- #endif -->
        <!-- #ifdef H5 -->
        <slot
          slot="title"
          name="title"
        />
        <!-- #endif -->

        <!-- <slot
          slot="icon"
          name="icon"
        /> -->

        <slot name="value" />

        <slot
          slot="right-icon"
          name="right-icon"
        />
      </van-cell>
      <view
        :class="wrapperClass"
        style="height: 0;"
        :animation="animation"
      >
        <view class="van-collapse-item__content content-class">
          <slot />
        </view>
      </view>
    </view>
  </uni-shadow-root>
</template>
<script>
import VanCell from '../press-cell/press-cell.vue';
import { useParent } from '../common/relation';
import { setContentAnimate } from './animate';
import { defaultProps, defaultOptions } from '../common/press-component';
import utils from '../wxs-js/utils';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_COLLAPSE as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanCell,
  },
  mixins: [
    ChildrenMixin(PARENT),
  ],

  classes: ['title-class', 'content-class'],
  relation: useParent('collapse'),
  props: {
    size: { type: String, default: '' },
    name: { type: String, default: '' },
    title: { type: String, default: '' },
    value: { type: String, default: '' },
    icon: { type: String, default: '' },
    label: { type: String, default: '' },
    disabled: Boolean,
    clickable: Boolean,
    border: {
      type: Boolean,
      default: true,
    },
    isLink: {
      type: Boolean,
      default: true,
    },
    ...defaultProps,
  },
  data() {
    return {
      expanded: false,
      animation: {},
      mounted: false,
    };
  },
  computed: {
    collapseItemClass() {
      const { disabled, expanded } = this;
      return utils.bem('collapse-item__title', { disabled, expanded });
    },
    wrapperClass() {
      return utils.bem('collapse-item__wrapper');
    },
  },
  mounted() {
    this.updateExpanded();
    this.mounted = true;
  },
  methods: {
    updateExpanded() {
      if (!this[PARENT]) {
        return;
      }
      const { value, accordion } = this[PARENT];
      const { children = [] } = this[PARENT];
      const { name } = this;
      const index = children.indexOf(this);
      const currentName = name == null ? index : name;
      console.log('accordion', accordion);
      const expanded = accordion
        ? value === currentName
        : (value || []).some(name => name === currentName);
      if (expanded !== this.expanded) {
        setContentAnimate(this, expanded, this.mounted);
      }
      // this.index = index;
      this.expanded = expanded;
    },
    onClick() {
      if (this.disabled) {
        return;
      }
      const { name, expanded } = this;
      const index = this[PARENT].children.indexOf(this);
      const currentName = name == null ? index : name;
      this[PARENT].switch(currentName, !expanded);
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-collapse-item__title ::v-deep .van-cell__right-icon {
  transform: rotate(90deg);
  transition: transform var(--collapse-item-transition-duration, 0.3s);
}
.van-collapse-item__title--expanded ::v-deep .van-cell__right-icon {
  transform: rotate(-90deg);
}
.van-collapse-item__title--disabled ::v-deep .van-cell,
.van-collapse-item__title--disabled ::v-deep .van-cell__right-icon {
  color: var(--collapse-item-title-disabled-color, #c8c9cc) !important;
}
.van-collapse-item__title--disabled .van-cell--hover {
  background-color: #fff !important;
}
.van-collapse-item__wrapper {
  overflow: hidden;
  // position: relative;
}
.van-collapse-item__content {
  background-color: var(--collapse-item-content-background-color, #fff);
  color: var(--collapse-item-content-text-color, #969799);
  font-size: var(--collapse-item-content-font-size, 13px);
  line-height: var(--collapse-item-content-line-height, 1.5);
  padding: var(--collapse-item-content-padding, 15px);
}
</style>
