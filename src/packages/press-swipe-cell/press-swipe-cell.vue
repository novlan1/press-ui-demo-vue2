<template>
  <uni-shadow-root class="vant-swipe-cell-index">
    <!-- @touchmove.stop.prevent="catchMove?noop:noop" -->
    <view
      class="van-swipe-cell custom-class"
      data-key="cell"
      @click.stop.prevent="onClick"
      @touchstart="startDrag"
      @touchmove.capture="onDrag"
      @touchend="endDrag"
      @touchcancel="endDrag"
    >
      <view :style="wrapperStyle">
        <view
          v-if="leftWidth"
          class="van-swipe-cell__left"
          data-key="left"
          @click.stop.prevent="onClick"
        >
          <slot name="left" />
        </view>

        <slot />

        <view
          v-if="rightWidth"
          class="van-swipe-cell__right"
          data-key="right"
          @click.stop.prevent="onClick"
        >
          <slot name="right" />
        </view>
      </view>
    </view>
  </uni-shadow-root>
</template>

<script>

// import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
import { range } from '../common/utils';
// global.__wxRoute = 'vant/swipe-cell/index';
const THRESHOLD = 0.3;

let ARRAY = [];

export default {
  mixins: [touch],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    leftWidth: {
      type: Number,
      default: 0,
      // observer(leftWidth = 0) {
      //   if (this.offset > 0) {
      //     this.swipeMove(leftWidth);
      //   }
      // },
    },
    rightWidth: {
      type: Number,
      default: 0,
      // observer(rightWidth = 0) {
      //   if (this.offset < 0) {
      //     this.swipeMove(-rightWidth);
      //   }
      // },
    },
    asyncClose: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, null],
      default: '',
    },
  },
  data() {
    return {
      catchMove: false,
      wrapperStyle: '',
    };
  },
  watch: {
    leftWidth: {
      handler(leftWidth = 0) {
        if (this.offset > 0) {
          this.swipeMove(leftWidth);
        }
      },
    },
    rightWidth: {
      handler(rightWidth = 0) {
        if (this.offset < 0) {
          this.swipeMove(-rightWidth);
        }
      },
    },
  },
  created() {
    this.offset = 0;
    ARRAY.push(this);
  },
  destroyed() {
    ARRAY = ARRAY.filter(item => item !== this);
  },
  methods: {
    setData(data) {
      Object.keys(data).forEach((key) => {
        this[key] = data[key];
      });
    },
    open(position) {
      const { leftWidth, rightWidth } = this;
      const offset = position === 'left' ? leftWidth : -rightWidth;
      this.swipeMove(offset);
      this.$emit('open', {
        position,
        name: this.name,
      });
    },
    close() {
      this.swipeMove(0);
    },
    swipeMove(offset = 0) {
      this.offset = range(offset, -this.rightWidth, this.leftWidth);
      const transform = `translate3d(${this.offset}px, 0, 0)`;
      const transition = this.dragging
        ? 'none'
        : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
      this.setData({
        wrapperStyle: `
        -webkit-transform: ${transform};
        -webkit-transition: ${transition};
        transform: ${transform};
        transition: ${transition};
      `,
      });
    },
    swipeLeaveTransition() {
      const { leftWidth, rightWidth } = this;
      const { offset } = this;
      if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
        this.open('right');
      } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
        this.open('left');
      } else {
        this.swipeMove(0);
      }
      this.setData({ catchMove: false });
    },
    startDrag(event) {
      if (this.disabled) {
        return;
      }
      this.startOffset = this.offset;
      this.touchStart(event);
    },
    noop() { },
    onDrag(event) {
      // if (this.catchMove) {
      //   event.stopPropagation();
      //   event.preventDefault();
      //   return;
      // }
      if (this.disabled) {
        return;
      }
      this.touchMove(event);
      if (this.direction !== 'horizontal') {
        return;
      }
      this.dragging = true;
      ARRAY.filter(item => item !== this && item.offset !== 0).forEach(item => item.close());
      this.setData({ catchMove: true });
      this.swipeMove(this.startOffset + this.deltaX);
    },
    endDrag() {
      if (this.disabled) {
        return;
      }
      this.dragging = false;
      this.swipeLeaveTransition();
    },
    onClick(event) {
      const { key: position = 'outside' } = event.currentTarget.dataset;
      this.$emit('click', position);
      if (!this.offset) {
        return;
      }
      if (this.asyncClose) {
        this.$emit('close', {
          position,
          instance: this,
          name: this.name,
        });
      } else {
        this.swipeMove(0);
      }
    },
  },
};
// export default global.__wxComponents['vant/swipe-cell/index'];
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";

.van-swipe-cell {
  overflow: hidden;
  position: relative;
}

.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 65px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  background-color: #f44;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
}

.van-swipe-cell__left,
.van-swipe-cell__right {
  height: 100%;
  position: absolute;
  top: 0;
}

.van-swipe-cell__left {
  left: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-swipe-cell__right {
  right: 0;
  transform: translate3d(100%, 0, 0);
}
</style>
