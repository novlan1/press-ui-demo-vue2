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
        v-model="msgContent"
        placeholder-style="color:#596297"
        :show-confirm-bar="showConfirmBar"
        :placeholder="placeholder"
        maxlength="100"
        :auto-height="textAreaIsAutoHeight"
        :adjust-position="adjustPosition"
        :focus="textAreaIsFocus"
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
export default {
  props: {
    inputBottom: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      default: '说点什么...',
    },
    textAreaIsAutoHeight: {
      type: Boolean,
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
  },
  data() {
    return {
      msgContent: '',
    };
  },
  computed: {
    sendBtnEnable() {
      return this.msgContent && this.msgContent.trim().length > 0;
    },
  },
  mounted() {
  },
  methods: {
    clickInput() {
      this.$emit('clickInput');
    },
    sendMsg() {
      this.$emit('sendMsg', this.msgContent);
    },
    keyboardheightchange(e) {
      console.log('keyboardheightchange.e', e);
      this.$emit('keyboardheightchange', e);
    },
    onBlur() {
      this.$emit('blur');
    },
  },
};

</script>
<style lang="scss" scoped src="./index.scss"></style>
