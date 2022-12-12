<template>
  <uni-shadow-root class="vant-sidebar-index">
    <view class="van-sidebar custom-class">
      <slot />
    </view>
  </uni-shadow-root>
</template>

<script>

// import { useChildren } from '../common/relation';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_SIDEBAR as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  // relation: useChildren('sidebar-item', function () {
  //   this.setActive(this.data.activeKey);
  // }),
  props: {
    activeKey: {
      type: Number,
      default: 0,
      // observer: 'setActive',
    },
    ...defaultProps,
  },
  watch: {
    activeKey: {
      handler() {
        this.setActive();
      },
    },
  },
  beforeCreate() {
    this.currentActive = -1;
  },
  created() {
    this.children = [];
  },
  mounted() {
    this.setActive(this.activeKey);
  },
  methods: {
    setActive(activeKey) {
      const { children, currentActive } = this;
      if (!children.length) {
        return Promise.resolve();
      }
      this.currentActive = activeKey;
      const stack = [];
      if (currentActive !== activeKey && children[currentActive]) {
        stack.push(children[currentActive].setActive(false));
      }
      if (children[activeKey]) {
        stack.push(children[activeKey].setActive(true));
      }
      return Promise.all(stack);
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-sidebar {
  width: var(--sidebar-width, 80px);
}
</style>
