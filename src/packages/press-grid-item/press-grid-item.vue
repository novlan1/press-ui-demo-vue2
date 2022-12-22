<template>
  <uni-shadow-root class="vant-grid-item-index">
    <view
      :class="'custom-class '+(utils.bem('grid-item', { square }))"
      :style="true ? computed.wrapperStyle({ square, gutter, columnNum, index }) : ''"
      @click="onClick"
    >
      <view
        :class="gridContentClass"
        :style="true ? computed.contentStyle({ square, gutter }) : ''"
      >
        <block v-if="useSlot">
          <slot />
        </block>
        <block v-else>
          <view class="van-grid-item__icon icon-class">
            <van-icon
              v-if="icon"
              :name="icon"
              :color="iconColor"
              :class-prefix="iconPrefix"
              :dot="dot"
              :info="badge || info"
              :size="iconSize"
            />
            <slot
              v-else
              name="icon"
            />
          </view>

          <view class="van-grid-item__text text-class">
            <text v-if="text">
              {{ text }}
            </text>

            <slot
              v-else
              name="text"
            />
          </view>
        </block>
      </view>
    </view>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
// import { useParent } from '../common/relation';
import { link } from '../mixins/link';
import utils from '../wxs-js/utils';
import computed from './computed';

import { defaultOptions, defaultProps } from '../common/press-component';
import { ChildrenMixin } from '../mixins/relation';
import { PARENT_GRID as PARENT } from '../common/parent-map';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  // relation: useParent('grid'),
  classes: ['content-class', 'icon-class', 'text-class'],
  components: {
    VanIcon,
  },
  mixins: [ChildrenMixin(PARENT), link],
  props: {
    icon: { type: String, default: '' },
    iconColor: { type: String, default: '' },
    iconPrefix: {
      type: String,
      default: 'van-icon',
    },
    dot: Boolean,
    info: { type: String, default: '' },
    badge: { type: String, default: '' },
    text: { type: String, default: '' },
    useSlot: Boolean,
    ...defaultProps,
  },
  data() {
    return {
      viewStyle: '',
      computed,
      utils,

      square: false,
      gutter: 0,
      clickable: false,
      columnNum: 4,
      center: true,
      border: true,
      direction: '',
      iconSize: '',
      reverse: false,
    };
  },
  computed: {
    gridContentClass() {
      const {
        direction,
        center,
        square,
        reverse,
        clickable,
        border,
        gutter,
      } = this;
      console.log('border', border, center);
      return `content-class ${utils.bem('grid-item__content', [direction, { center, square, reverse, clickable, surround: border && gutter }])} ${border ? 'van-hairline--surround' : ''}`;
    },
  },
  mounted() {
    this.updateStyle();
    // setTimeout(() => {
    //   this.updateStyle();
    //   console.log('========11===');
    // }, 5000);
  },
  methods: {
    updateStyle() {
      // console.log('========', this[PARENT]);
      if (!this[PARENT]) {
        return;
      }
      const {
        // children,
        columnNum,
        border,
        square,
        gutter,
        clickable,
        center,
        direction,
        reverse,
        iconSize,

      } = this[PARENT];
      // const { columnNum, border, square, gutter, clickable, center, direction, reverse, iconSize } = data;
      console.log('columnNum', columnNum, border);
      this.center = center;
      this.border = border;
      this.square = square;
      this.gutter = gutter;
      this.clickable = clickable;
      this.direction = direction;
      this.reverse = reverse;
      this.iconSize = iconSize;
      this.columnNum = columnNum;
      // this.setData({
      //   center,
      //   border,
      //   square,
      //   gutter,
      //   clickable,
      //   direction,
      //   reverse,
      //   iconSize,
      //   index: children.indexOf(this),
      //   columnNum,
      // });
    },
    onClick() {
      this.$emit('click');
      this.jumpLink();
    },
  },
};
</script>

<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-grid-item {
  box-sizing: border-box;
  float: left;
  position: relative;
}
.van-grid-item--square {
  height: 0;
}
.van-grid-item__content {
  background-color: var(--grid-item-content-background-color, #fff);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: var(--grid-item-content-padding, 16px 8px);
}
.van-grid-item__content:after {
  border-width: 0 1px 1px 0;
  z-index: 1;
}
.van-grid-item__content--surround:after {
  border-width: 1px;
}
.van-grid-item__content--center {
  align-items: center;
  justify-content: center;
}
.van-grid-item__content--square {
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.van-grid-item__content--horizontal {
  flex-direction: row;
}
.van-grid-item__content--horizontal .van-grid-item__text {
  margin: 0 0 0 8px;
}
.van-grid-item__content--reverse {
  flex-direction: column-reverse;
}
.van-grid-item__content--reverse .van-grid-item__text {
  margin: 0 0 8px;
}
.van-grid-item__content--horizontal.van-grid-item__content--reverse {
  flex-direction: row-reverse;
}
.van-grid-item__content--horizontal.van-grid-item__content--reverse
  .van-grid-item__text {
  margin: 0 8px 0 0;
}
.van-grid-item__content--clickable:active {
  background-color: var(--grid-item-content-active-color, #f2f3f5);
}
.van-grid-item__icon {
  align-items: center;
  display: flex;
  font-size: var(--grid-item-icon-size, 26px);
  height: var(--grid-item-icon-size, 26px);
}
.van-grid-item__text {
  word-wrap: break-word;
  color: var(--grid-item-text-color, #646566);
  font-size: var(--grid-item-text-font-size, 12px);
}
.van-grid-item__icon + .van-grid-item__text {
  margin-top: 8px;
}
</style>
