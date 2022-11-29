<template>
  <uni-shadow-root class="vant-button-index">
    <Button
      :id="id"
      :data-detail="dataset"
      :class="buttonClass"
      hover-class="van-button--active hover-class"
      :lang="lang"
      :form-type="formType"
      :style="buttonStyle"
      :open-type="disabled || loading || (canIUseGetUserProfile && openType === 'getUserInfo') ? '' : openType"
      :business-id="businessId"
      :session-from="sessionFrom"
      :send-message-title="sendMessageTitle"
      :send-message-path="sendMessagePath"
      :send-message-img="sendMessageImg"
      :show-message-card="showMessageCard"
      :app-parameter="appParameter"
      :aria-label="ariaLabel"
      @click="onFakeClick"
      @getuserinfo="onGetUserInfo"
      @contact="onContact"
      @getphonenumber="onGetPhoneNumber"
      @error="onError"
      @launchapp="onLaunchApp"
      @opensetting="onOpenSetting"
      @chooseavatar="onChooseAvatar"
    >
      <block v-if="loading">
        <van-loading
          custom-class="loading-class"
          :size="loadingSize"
          :type="loadingType"
          :color="loadingColor"
        />
        <view
          v-if="loadingText"
          class="van-button__loading-text"
        >
          {{ loadingText }}
        </view>
      </block>
      <block v-else>
        <van-icon
          v-if="icon"
          size="1.2em"
          :name="icon"
          :class-prefix="classPrefix"
          class="van-button__icon"
          custom-style="line-height: inherit;"
        />
        <view class="van-button__text">
          <slot />
        </view>
      </block>
    </Button>
  </uni-shadow-root>
</template>
<script>
import VanIcon from '../press-icon-plus/press-icon-plus.vue';
import VanLoading from '../press-loading-plus/press-loading-plus.vue';
import { button } from '../mixins/button';
import { canIUseFormFieldButton } from '../common/version';
import utils from '../wxs-js/utils';
import { DEFAULT_SIZE_LIST, rootStyle, loadingColor } from './index';
import { defaultProps, defaultOptions } from '../common/press-component';
// global.__wxVueOptions = { components: { 'van-icon': VanIcon, 'van-loading': VanLoading } };

// global.__wxRoute = 'vant/button/index';
const mixins = [button];
if (canIUseFormFieldButton()) {
  mixins.push('wx://form-field-button');
}
export default {
  options: {
    virtualHost: true,
    ...defaultOptions,
  },
  components: {
    VanIcon,
    VanLoading,
  },
  mixins,
  classes: ['hover-class', 'loading-class'],
  props: {
    formType: { type: String, default: '' },
    icon: { type: String, default: '' },
    classPrefix: {
      type: String,
      default: 'van-icon',
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: { type: String, default: '' },
    customStyle: { type: String, default: '' },
    loadingType: {
      type: String,
      default: 'circular',
    },
    type: {
      type: String,
      default: 'default',
    },
    dataset: {
      type: [Object, null],
      default: null,
    },
    size: {
      type: [String, Object],
      default: 'normal',
    },
    loadingSize: {
      type: String,
      default: '20px',
    },
    color: { type: String, default: '' },
    ...defaultProps,
  },
  data() {
    return {
      baseStyle: '',
    };
  },
  computed: {
    buttonClass() {
      const {
        type,
        size,
        block,
        round,
        plain,
        square,
        loading,
        disabled,
        hairline,
        customClass,
      } = this;
      const classSize = DEFAULT_SIZE_LIST.indexOf(size) > -1 ? size : '';
      return `${customClass} ${utils.bem('button', [type, classSize, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }])} ${hairline ? 'van-hairline--surround' : ''}`;
    },
    buttonStyle() {
      const { plain, color, customStyle, size } = this;
      console.log('buttonStyle.size', size);
      return rootStyle({ plain, color, customStyle, size });
    },
    loadingColor() {
      const { type, color, plain } = this;
      return loadingColor({ type, color, plain });
    },
  },
  methods: {
    onFakeClick(event) {
      const { disabled,  loading } = this;
      if (disabled || loading) return;
      this.onClick(event);
    },
    onClick(event) {
      this.$emit('click', event);
      const { canIUseGetUserProfile, openType, getUserProfileDesc, lang } = this;
      if (openType === 'getUserInfo' && canIUseGetUserProfile) {
        wx.getUserProfile({
          desc: getUserProfileDesc || '  ',
          lang: lang || 'en',
          complete: (userProfile) => {
            this.$emit('getuserinfo', userProfile);
          },
        });
      }
    },
  },
};

</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
@import "../common/style/var.scss";
.van-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  height: var(--button-default-height, $button-default-height);
  line-height: var(--button-line-height, $button-line-height);
  font-size: var(--button-default-font-size, $button-default-font-size);
  transition: opacity $animation-duration-fast;
  border-radius: var(--button-border-radius, $button-border-radius);

  &:not(&--bg) {
    &::before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      border: inherit;
      border-radius: inherit; /* inherit parent's border radius */
      transform: translate(-50%, -50%);
      opacity: 0;
      content: " ";
      background-color: $black;
      border-color: $black;
    }

    // reset weapp default border
    &::after {
      border-width: 0;
    }
  }
  &--active::before {
    opacity: 0.15;
  }

  &:active::before {
    opacity: 0.15;
  }

  &--unclickable::after {
    display: none;
  }

  &--default {
    color: var(--button-default-color, $button-default-color);
    background: var(
      --button-default-background-color,
      $button-default-background-color
    );
    border: var(--button-border-width, $button-border-width) solid
      var(--button-default-border-color, $button-default-border-color);
  }

  &--primary {
    color: var(--button-primary-color, $button-primary-color);
    background: var(
      --button-primary-background-color,
      $button-primary-background-color
    );
    border: var(--button-border-width, $button-border-width) solid
      var(--button-primary-border-color, $button-primary-border-color);
  }

  &--info {
    color: var(--button-info-color, $button-info-color);
    background: var(
      --button-info-background-color,
      $button-info-background-color
    );
    border: var(--button-border-width, $button-border-width) solid
      var(--button-info-border-color, $button-info-border-color);
  }

  &--danger {
    color: var(--button-danger-color, $button-danger-color);
    background: var(
      --button-danger-background-color,
      $button-danger-background-color
    );
    border: var(--button-border-width, $button-border-width) solid
      var(--button-danger-border-color, $button-danger-border-color);
  }

  &--warning {
    color: var(--button-warning-color, $button-warning-color);
    background: var(
      --button-warning-background-color,
      $button-warning-background-color
    );
    border: var(--button-border-width, $button-border-width) solid
      var(--button-warning-border-color, $button-warning-border-color);
  }

  &--plain {
    background: var(
      --button-plain-background-color,
      $button-plain-background-color
    );

    &.van-button--primary {
      color: var(
        --button-primary-background-color,
        $button-primary-background-color
      );
    }

    &.van-button--info {
      color: var(--button-info-background-color, $button-info-background-color);
    }

    &.van-button--danger {
      color: var(
        --button-danger-background-color,
        $button-danger-background-color
      );
    }

    &.van-button--warning {
      color: var(
        --button-warning-background-color,
        $button-warning-background-color
      );
    }
  }

  &--large {
    width: 100%;
    height: var(--button-large-height, $button-large-height);
  }

  &--normal {
    padding: 0 15px;
    font-size: var(--button-normal-font-size, $button-normal-font-size);
  }

  &--small {
    min-width: var(--button-small-min-width, $button-small-min-width);
    height: var(--button-small-height, $button-small-height);
    padding: 0 var(--padding-xs, $padding-xs);
    font-size: var(--button-small-font-size, $button-small-font-size);
  }

  // mini图标默认宽度50px，文字不能超过4个
  &--mini {
    display: inline-block;
    min-width: var(--button-mini-min-width, $button-mini-min-width);
    height: var(--button-mini-height, $button-mini-height);
    font-size: var(--button-mini-font-size, $button-mini-font-size);

    & + .van-button--mini {
      margin-left: 5px;
    }
  }

  ////////////////////////////////////////
  // 增加一些额外的size
  &--width-auto {
    width: auto;
  }

  &--width-136 {
    width: $button-width-136;
  }

  &--height-auto {
    height: auto;
  }

  &--height-36 {
    height: $button-height-36;
  }

  // 增加bg
  &--bg {
    &::before {
      position: absolute;
      bottom: 0;
      left: 0;
      content: "";
      width: 63px;
      height: 15px;
      background: url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png)
        no-repeat center;
      background-size: contain;
      pointer-events: none;
    }
    &::after {
      position: absolute;
      top: 4px;
      right: 0;
      content: "";
      width: 76px;
      height: 15px;
      background: url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png)
        no-repeat center;
      background-size: contain;
      pointer-events: none;
    }

    &-default,
    &-md {
      &::before {
        width: 63px;
        height: 15px;
      }
      &::after {
        top: 4px;
        width: 76px;
        height: 15px;
      }
    }

    &-large,
    &-lg {
      &::before {
        width: 93px;
        height: 15px;
      }
      &::after {
        top: 4px;
        width: 93px;
        height: 15px;
      }
    }

    &-xl {
      &::before {
        width: 105px;
        height: 42px;
      }
      &::after {
        top: 0;
        width: 105px;
        height: 42px;
      }
    }
  }
  ////////////////////////////////////////

  &--block {
    display: flex;
    width: 100%;
  }

  &--round {
    border-radius: var(
      --button-round-border-radius,
      $button-round-border-radius
    );
  }

  &--square {
    border-radius: 0;
  }

  &--disabled {
    opacity: var(--button-disabled-opacity, $button-disabled-opacity);
  }

  &__text {
    display: inline;
  }

  &__loading-text,
  &__icon + &__text:not(:empty) {
    margin-left: $padding-base;
  }

  &__icon {
    min-width: 1em;
    line-height: inherit !important;
    vertical-align: top;
  }

  &--hairline {
    padding-top: 1px; // add 1px padding for text vertical align middle
    border-width: 0;

    &::after {
      border-color: inherit;
      border-width: 1px;
      border-radius: calc(
        var(--button-border-radius, $button-border-radius) * 2
      );
    }

    &.van-button--round::after {
      border-radius: var(
        --button-round-border-radius,
        $button-round-border-radius
      );
    }

    &.van-button--square::after {
      border-radius: 0;
    }

    &.van-hairline--surround::after {
      border-width: 1px;
    }
  }
}
</style>
