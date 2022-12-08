<template>
  <div
    class="team-zone-input-wrap"
    :style="{ paddingBottom: `${inputBottom}px` }"
  >
    <!-- div模拟输入框 -->
    <div
      id="msg-footer-input"
      ref="msgFooterInput"
      class="team-zone-input"
      @click="clickInput()"
    >
      <input
        id="msg-footer-textarea"
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
      :class="{'disabled': !sendBtnEnable}"
      class="submit-btn"
      @click.stop="sendMsg()"
    >
      <p>发送</p>
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
<style lang="scss" scoped src="./index.scss"></style>
