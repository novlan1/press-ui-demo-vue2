<template>
  <view
    :class="'custom-class '+(utils.bem2('col', [span]))+' '+(offset ? 'press-col--offset-' + offset : '')"
    :style="computed.rootStyle({ gutter })"
  >
    <slot />
  </view>
</template>
<script>
import utils from '../wxs-js/utils';
import computed from './computed';
import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_ROW as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  mixins: [
    ChildrenMixin(PARENT),
  ],
  props: {
    span: { type: Number, default: 0 },
    offset: { type: Number, default: 0 },
    ...defaultProps,
  },
  data() {
    return {
      utils,
      computed,

      gutter: 0,
    };
  },
};
</script>

<style platform="mp-weixin" lang="scss">
.press-col {
  box-sizing: border-box;
  float: left;
}

@for $i from 1 through 24 {
  .press-col--#{$i} {
    width: calc($i * (100% / 24));
  }
  .press-col--offset-#{$i} {
    margin-left: calc($i * (100% / 24));
  }
}
</style>
