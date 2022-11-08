<template>
  <PressPopup
    :is-showpopup-close="true"
    :show-back-arrow="showBackArrow"
    :popup-title="title"
    popup-title-btn="确定"
    :class="tip ? 'tip-picker':''"
    @onCancel="onCancel"
    @onConfirm="onConfirm"
  >
    <div
      v-if="tip"
      class="tips"
    >
      {{ tip }}
    </div>
    <PressPickerView
      ref="picker"
      :data="data"
      :current="current"
      @currentIndexChanged="onCurrentIndexChanged"
    />
  </PressPopup>
</template>
<script>
import PressPopup from '../press-popup/press-popup.vue';
import PressPickerView from '../press-picker-view/press-picker-view.vue';

export default {
  components: {
    PressPopup,
    PressPickerView,
  },
  props: {
    // 弹窗标题
    title: {
      type: String,
      default: '',
      required: false,
    },
    // 左上角是否显示为返回箭头
    showBackArrow: {
      type: Boolean,
      default: false,
    },

    // 提示
    tip: {
      type: String,
      default: '',
      required: false,
    },
    // 列表数据
    // [{label: '文本', value: '值'}]
    data: {
      type: Array,
      default: () => ([
        {
          label: 'test',
        },
        {
          label: 'test',
        },
        {
          label: 'test',
        },
        {
          label: 'test',
        },
        {
          label: 'test',
        },
        {
          label: 'test',
        },
      ]),
      required: true,
    },
    current: {
      type: Object,
      default: null,
      required: false,
    },
  },
  options: {
    virtualHost: true,
  },
  data() {
    return {
      currentIndex: -1,
    };
  },
  mounted() {
  },
  methods: {
    onCurrentIndexChanged(index) {
      this.currentIndex = index;
    },
    onConfirm() {
      if (this.$refs?.picker) {
        this.$emit('onSelect', this.$refs.picker.getCurrentItem());
      } else {
        this.$emit('onSelect', this.data?.[this.currentIndex]);
      }
    },
    onCancel() {
      this.$emit('onCancel');
    },
  },
};

</script>
<style lang="scss" scoped src="./css/index.scss"></style>
