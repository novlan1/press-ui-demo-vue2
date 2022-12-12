<template>
  <uni-shadow-root class="vant-collapse-index">
    <div :class="'custom-class van-collapse '+(border ? 'van-hairline--top-bottom' : '')">
      <slot />
    </div>
  </uni-shadow-root>
</template>

<script>

// import { useChildren } from '../common/relation';
import { defaultProps, defaultOptions } from '../common/press-component';
import { ParentMixin } from '../mixins/relation';
import { PARENT_COLLAPSE as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
  },
  mixins: [
    ParentMixin(PARENT),
  ],
  // relation: useChildren('collapse-item'),
  props: {
    value: {
      type: [Array, String],
      default: () => [],
      // observer: 'updateExpanded',
    },
    accordion: {
      type: Boolean,
      default: false,
      // observer: 'updateExpanded',
    },
    border: {
      type: Boolean,
      default: true,
    },
    ...defaultProps,
  },
  watch: {
    value: {
      handler() {
        this.updateExpanded();
      },
    },
    accordion: {
      handler() {
        this.updateExpanded();
      },
    },
  },
  created() {
    this.children = [];
  },
  methods: {
    updateExpanded() {
      this.children.forEach((child) => {
        child.updateExpanded();
      });
    },
    switch(name, expanded) {
      const { accordion, value } = this;
      const changeItem = name;
      if (!accordion) {
        name = expanded
          ? (value || []).concat(name)
          : (value || []).filter(activeName => activeName !== name);
      } else {
        name = expanded ? name : '';
      }
      if (expanded) {
        this.$emit('open', changeItem);
      } else {
        this.$emit('close', changeItem);
      }
      this.$emit('change', name);
      this.$emit('input', name);
    },
  },
};
</script>
<style platform="mp-weixin">
@import "../common/index.scss";
</style>
