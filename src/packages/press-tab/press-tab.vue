<template>
  <view
    :class="tabClass"
    :style="shouldShow ? '' : 'display: none;'"
  >
    <slot v-if="shouldRender" />
  </view>
</template>
<script>
import utils from '../wxs-js/utils';

import { useParent } from '../common/relation';
import { ChildrenMixin } from '../mixins/relation';

export default {
  relation: useParent('tabs'),
  mixins: [useParent('tabs').mixin, ChildrenMixin('vanTabs')],
  props: {
    dot: {
      type: Boolean,
      observer: 'update',
    },
    info: {
      type: null,
      observer: 'update',
    },
    title: {
      type: String,
      observer: 'update',
    },
    disabled: {
      type: Boolean,
      observer: 'update',
    },
    titleStyle: {
      type: String,
      observer: 'update',
    },
    name: {
      type: null,
      value: '',
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      active: false,
      shouldShow: false,
      shouldRender: false,
    };
  },
  computed: {
    tabClass() {
      const { active, customClass } = this;
      return `${utils.bem('tab__pane', { active, inactive: !active })} ${customClass}`;
    },
  },
  created() {
    this.update();
  },
  mounted() {
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    getComputedName() {
      if (this.name !== '') {
        return this.name;
      }
      return this.index;
    },
    updateRender(active, parent) {
      this.initialled = this.initialled || active;
      this.setData({
        active,
        shouldRender: this.initialled || !parent.lazyRender,
        shouldShow: active || parent.animated,
      });
    },
    update() {
      console.log('parent', this.parent.updateTabs);
      if (this.parent) {
        this.parent.updateTabs();
      }
    },
  },
};
</script>
<style lang="scss">
@import "../common/index.scss";
.vant-tab-index {
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
}
.van-tab__pane {
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  overflow-y: auto;
}
.van-tab__pane--active {
  height: auto;
}
.van-tab__pane--inactive {
  height: 0;
  overflow: visible;
}
</style>
