<template>
  <uni-shadow-root class="vant-tab-index van-tab__pane-wrapper">
    <view
      :class="tabClass"
      :style="shouldShow ? '' : 'display: none;'"
    >
      <slot v-if="shouldRender" />
    </view>
  </uni-shadow-root>
</template>
<script>
import utils from '../wxs-js/utils';

// import { useParent } from '../common/relation';
import { ChildrenMixin } from '../mixins/relation';
import { defaultProps, defaultOptions } from '../common/press-component';
import { PARENT_TABS as PARENT } from '../common/parent-map';


export default {
  // relation: useParent('tabs'),
  mixins: [
    // useParent('tabs').mixin,
    ChildrenMixin(PARENT),
  ],
  options: {
    ...defaultOptions,
    virtualHost: true,
  },
  props: {
    ...defaultProps,
    dot: {
      type: Boolean,
      default: false,
      // observer: 'update',
    },
    info: {
      type: [String, Number, null],
      default: '',
      // observer: 'update',
    },
    title: {
      type: [String, Number, null],
      default: '',
      // observer: 'update',
    },
    disabled: {
      type: Boolean,
      default: false,
      // observer: 'update',
    },
    titleStyle: {
      type: String,
      default: '',
      // observer: 'update',
    },
    name: {
      type: [String, Number, null],
      default: '',
    },
  },
  data() {
    return {
      active: false,
      shouldShow: false,
      shouldRender: false,
      initialled: false,
    };
  },
  computed: {
    tabClass() {
      const { active, customClass = '' } = this;
      return `${utils.bem('tab__pane', { active, inactive: !active })} ${customClass}`;
    },
  },
  watch: {
    dot: {
      handler() {
        this.update();
      },
    },
    info: {
      handler() {
        this.update();
      },
    },
    title: {
      handler() {
        this.update();
      },
    },
    disabled: {
      handler() {
        this.update();
      },
    },
    titleStyle: {
      handler() {
        this.update();
      },
    },

  },
  created() {
  },
  mounted() {
    this.update();
  },
  methods: {
    // setData(data) {
    //   Object.keys(data).forEach((key) => {
    //     this[key] = data[key];
    //   });
    // },
    getComputedName() {
      if (this.name !== '') {
        return this.name;
      }
      return this.index;
    },
    updateRender(active, parent) {
      this.initialled = this.initialled || active;
      this.active = active;
      this.shouldRender = this.initialled || !parent.lazyRender;
      this.shouldShow = active || parent.animated;
    },
    update() {
      if (this[PARENT]) {
        this[PARENT].updateTabs();
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
  box-sizing: border-box;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  &--active {
    height: auto;
  }

  &--inactive {
    height: 0;
    overflow: visible;
  }
}
</style>
