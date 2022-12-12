<template>
  <uni-shadow-root class="vant-steps-index">
    <div :class="stepsClass">
      <div class="van-step__wrapper">
        <div
          v-for="(item,index) in (steps)"
          :key="item.index"
          :data-index="index"
          :class="true ? getStepClass(index) : ''"
          :style="true ? getStepStyle(index) : ''"
          @click="onClick"
        >
          <div
            class="van-step__title"
            :style="index === active ? 'color: ' + activeColor : ''"
          >
            <div>{{ item.text }}</div>
            <div class="desc-class">
              {{ item.desc }}
            </div>
          </div>
          <div class="van-step__circle-container">
            <template v-if="index !== active">
              <van-icon
                v-if="item.inactiveIcon || inactiveIcon"
                :color="status(index, active) === 'inactive' ? inactiveColor: activeColor"
                :name="item.inactiveIcon || inactiveIcon"
                custom-class="van-step__icon"
              />
              <div
                v-else
                class="van-step__circle"
                :style="'background-color: ' + (index < active ? activeColor : inactiveColor)"
              />
            </template>

            <van-icon
              v-else
              :name="item.activeIcon || activeIcon"
              :color="activeColor"
              custom-class="van-step__icon"
            />
          </div>
          <div
            v-if="index !== steps.length - 1"
            class="van-step__line"
            :style="'background-color: ' + (index < active ? activeColor : inactiveColor)"
          />
        </div>
      </div>
    </div>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import { GREEN, GRAY_DARK } from '../common/color';
import { defaultProps, defaultOptions } from '../common/press-component';
import utils from '../wxs-js/utils';
import status from './index-status';

export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  components: {
    VanIcon,
  },
  classes: ['desc-class'],
  props: {
    icon: { type: String, default: '' },
    steps: { type: Array, default: () => [] },
    active: { type: Number, default: -1 },
    direction: {
      type: String,
      default: 'horizontal',
    },
    activeColor: {
      type: String,
      default: GREEN,
    },
    inactiveColor: {
      type: String,
      default: GRAY_DARK,
    },
    activeIcon: {
      type: String,
      default: 'checked',
    },
    inactiveIcon: { type: String, default: '' },
    ...defaultProps,
  },
  data() {
    return {
      status,
    };
  },
  computed: {
    stepsClass() {
      const { direction, customClass } = this;
      return `${customClass} ${utils.bem('steps', [direction])}`;
    },
  },
  methods: {
    onClick(event) {
      const { index } = event.currentTarget.dataset;
      this.$emit('click-step', index);
    },
    getStepClass(index) {
      const { direction, active } = this;
      return `${utils.bem('step', [direction, status(index, active)])} van-hairline`;
    },
    getStepStyle(index) {
      const { active, inactiveColor } = this;
      return status(index, active) === 'inactive' ? `color: ${inactiveColor}` : '';
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";

.van-steps {
  overflow: hidden;
  background-color: var(--steps-background-color, $steps-background-color);

  &--horizontal {
    padding: 10px;

    .van-step__wrapper {
      position: relative;
      display: flex;
      overflow: hidden;
    }
  }

  &--vertical {
    padding-left: 10px;

    .van-step__wrapper {
      padding: 0 0 0 20px;
    }
  }
}

.van-step {
  position: relative;
  flex: 1;
  font-size: var(--step-font-size, $step-font-size);
  color: var(--step-text-color, $step-text-color);

  &--finish {
    color: var(--step-finish-text-color, $step-finish-text-color);
  }

  &__circle {
    border-radius: 50%;
    width: var(--step-circle-size, $step-circle-size);
    height: var(--step-circle-size, $step-circle-size);
    background-color: var(--step-circle-color, $step-circle-color);
  }

  &--horizontal {
    padding-bottom: 14px;

    &:first-child {
      .van-step__title {
        transform: none;
      }

      .van-step__circle-container {
        padding: 0 8px 0 0;
        transform: translate3d(0, 50%, 0);
      }
    }

    &:last-child {
      position: absolute;
      right: 0;
      width: auto;

      .van-step__title {
        text-align: right;
        transform: none;
      }

      .van-step__circle-container {
        right: 0;
        padding: 0 0 0 8px;
        transform: translate3d(0, 50%, 0);
      }
    }

    .van-step__circle-container {
      position: absolute;
      bottom: 6px;
      z-index: 1;
      transform: translate3d(-50%, 50%, 0);
      background-color: $white;
      padding: 0 var(--padding-xs, $padding-xs);
    }

    .van-step__title {
      display: inline-block;
      transform: translate3d(-50%, 0, 0);
      font-size: var(
        --step-horizontal-title-font-size,
        $step-horizontal-title-font-size
      );
    }

    .van-step__line {
      position: absolute;
      right: 0;
      bottom: 6px;
      left: 0;
      height: 1px;
      transform: translate3d(0, 50%, 0);
      background-color: var(--step-line-color, $step-line-color);
    }

    &.van-step--process {
      color: var(--step-process-text-color, $step-process-text-color);

      .van-step__icon {
        display: block;
        line-height: 1;
        font-size: var(--step-icon-size, $step-icon-size);
      }
    }
  }

  &--vertical {
    padding: 10px 10px 10px 0;
    line-height: 18px;

    &::after {
      border-bottom-width: 1px;
    }

    &:last-child::after {
      border-bottom-width: none;
    }

    &:first-child {
      &::before {
        position: absolute;
        top: 0;
        left: -15px;
        z-index: 1;
        width: 1px;
        height: 20px;
        content: "";
        background-color: $white;
      }
    }

    .van-step__icon,
    .van-step__circle,
    .van-step__line {
      position: absolute;
      top: 19px;
      left: -14px;
      z-index: 2;
      transform: translate3d(-50%, -50%, 0);
    }

    .van-step__icon {
      line-height: 1;
      font-size: var(--step-icon-size, $step-icon-size);
    }

    .van-step__line {
      z-index: 1;
      width: 1px;
      height: 100%;
      transform: translate3d(-50%, 0, 0);
      background-color: var(--step-line-color, $step-line-color);
    }
  }
}
</style>
