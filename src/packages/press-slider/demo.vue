<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <PressSlider
        :value="valueMap.basic"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="双滑块"
      :section-style="sectionStyle"
    >
      <PressSlider
        :value="valueMap.range"
        range
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="指定选择范围"
      :section-style="sectionStyle"
    >
      <PressSlider
        :min="-50"
        :max="50"
        :value="valueMap.maxAndMin"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="禁用"
      :section-style="sectionStyle"
    >
      <PressSlider
        disabled
        :value="valueMap.basic"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="指定步长"
      :section-style="sectionStyle"
    >
      <PressSlider
        :step="10"
        :value="valueMap.basic"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="自定义样式"
      :section-style="sectionStyle"
    >
      <PressSlider
        bar-height="4px"
        active-color="#ee0a24"
        :value="valueMap.customStyle"
        @change="onChange"
      />
    </demo-block>

    <demo-block
      title="自定义按钮"
      :section-style="sectionStyle"
    >
      <PressSlider
        use-button-slot
        :value="dragValue"
        @change="onChange"
        @drag="onDrag"
      >
        <div
          slot="button"
          class="custom-button"
        >
          {{ dragValue }}
        </div>
      </PressSlider>
    </demo-block>

    <demo-block
      title="垂直方向"
      :section-style="sectionStyle"
    >
      <div style="height: 150px;">
        <press-slider
          value="50"
          vertical
          @change="onChange"
        />
        <press-slider
          :value="valueMap.range"
          range
          vertical
          style="margin-left: 100px;"
          @change="onChange"
        />
      </div>
    </demo-block>

    <!-- #ifndef H5 -->
    <PressToast id="press-toast" />
    <!-- #endif -->
  </div>
</template>
<script>
import PressSlider from 'src/packages/press-slider/press-slider.vue';
import PressToast from 'src/packages/press-toast/press-toast.vue';

export default {
  components: {
    PressSlider,
    PressToast,
  },
  data() {
    return {
      sectionStyle: 'margin: 12px 16px',
      valueMap: {
        basic: '50',
        range: [10, 50],
        maxAndMin: 50,
        customStyle: 50,
        customButton: 30,
      },
      dragValue: 50,
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
      this.$toast(`当前值： ${val.toString()}`, val);
    },
    onDrag(val) {
      console.log('onDrag', val);
      this.dragValue = val;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.wrap {
  padding-bottom: 20px;

  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
}
</style>
