<template>
  <div class="wrap">
    <demo-block
      title="基础用法"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <press-circle
        :value="value"
        :text="`${value}%`"
      />
    </demo-block>

    <demo-block
      title="样式定制"
      :header-style="headerStyle"
      :section-style="sectionStyle"
    >
      <div class="demo-part">
        <press-circle
          :value="value"
          :stroke-width="6"
          text="宽度定制"
        />
      </div>

      <div class="demo-part">
        <press-circle
          :value="value"
          :stroke-width="6"
          layer-color="#eeeeee"
          color="#ee0a24"
          text="颜色定制"
        />
      </div>

      <div class="demo-part">
        <press-circle
          :value="value"
          :stroke-width="6"
          :color="gradientColor"
          text="渐变色"
        />
      </div>

      <div class="demo-part">
        <press-circle
          :value="value"
          :stroke-width="6"
          color="#07c160"
          :clockwise="false"
          text="逆时针"
        />
      </div>

      <div class="demo-part">
        <press-circle
          :value="value"
          :size="120"
          text="大小定制"
        />
      </div>

      <div>
        <press-button
          type="e-sport-primary"
          custom-style="margin-right:8px;"
          @click="onChangeCircleValue('plus')"
        >
          增加
        </press-button>
        <press-button
          type="e-sport-primary"
          @click="onChangeCircleValue('minus')"
        >
          减少
        </press-button>
      </div>
    </demo-block>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressCircle from '../../../packages/press-circle/press-circle.vue';

export default {
  components: {
    PressCircle,
  },
  data() {
    return {
      value: 20,
      headerStyle: 'background: #f7f8fa;',
      sectionStyle: 'background: #f7f8fa;margin: 0;padding: 0 12px;',
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },
  methods: {
    onChangeCircleValue(type) {
      const STEP = 20;

      if (type === 'plus') {
        if (this.value >= 100) return;
        this.value += STEP;
      } else if (type === 'minus') {
        if (this.value <= 0) return;
        this.value -= STEP;
      }
    },
  },
};
</script>
<style lang="scss">
@import "src/packages/base/mixin.scss";
page {
  background: #f7f8fa !important;
}

.demo-part {
  margin: 0 12px 12px 0;
  display: inline-block;
}
</style>
