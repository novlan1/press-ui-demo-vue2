<template>
  <div
    class="press-message-board-input"
    :style="{ paddingBottom: `${inputBottom}px` }"
  >
    <!-- div模拟输入框 -->
    <div
      id="msg-footer-input"
      ref="msgFooterInput"
      class="press-message-board-input__wrap"
      @click="clickInput()"
    >
      <input
        id="msg-footer-textarea"
        class="press-message-board-input__input"
        :value="value"
        placeholder-style="color:#596297"
        :show-confirm-bar="showConfirmBar"
        :placeholder="placeholder"
        maxlength="100"
        :auto-height="textAreaIsAutoHeight"
        :adjust-position="adjustPosition"
        :focus="textAreaIsFocus"
        @input="onInput"
        @blur="onBlur"
        @keyboardheightchange="keyboardheightchange"
      >
    </div>
    <div
      class="press-message-board-input__btn"
      :class="{'press-message-board-input__btn--disabled': !sendBtnEnable}"
      @click.stop="sendMsg()"
    >
      <p
        class="press-message-board-input__btn__send"
      >
        发送
      </p>
    </div>
  </div>
</template>
<script>
import { defaultProps, defaultOptions } from '../common/press-component';


export default {
  options: {
    ...defaultOptions,
    styleIsolation: 'shared',
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    sendBtnEnable: {
      type: Boolean,
      default: false,
    },
    inputBottom: {
      type: [Number, String],
      default: 0,
    },
    placeholder: {
      type: String,
      default: '说点什么...',
    },
    textAreaIsAutoHeight: {
      type: [Boolean, String],
      default: false,
    },
    adjustPosition: {
      type: Boolean,
      default: false,
    },
    textAreaIsFocus: {
      type: Boolean,
      default: false,
    },
    showConfirmBar: {
      type: Boolean,
      default: false,
    },
    ...defaultProps,
  },
  data() {
    return {
    };
  },
  computed: {

  },
  mounted() {
  },
  methods: {
    onInput(e) {
      this.$emit('input', e.target.value);
    },
    clickInput() {
      this.$emit('clickInput');
    },
    sendMsg() {
      this.$emit('sendMsg', this.value);
    },
    keyboardheightchange(e) {
      this.$emit('keyboardheightchange', e);
    },
    onBlur() {
      this.$emit('blur');
    },
  },
};

</script>
<style lang="scss" scoped src="./press-message-board-input.scss"></style>
