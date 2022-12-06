<template>
  <div class="wrap">
    <demo-block title="基础用法">
      <press-steps
        :steps="steps"
        :active="active"
      />

      <PressButton
        type="e-sport-primary"
        custom-style="margin: 8px 0 8px 0;"
        @click="onNextStep"
      >
        下一步
      </PressButton>
    </demo-block>

    <demo-block title="自定义样式">
      <press-steps
        :steps="steps"
        :active="active"
        active-icon="success"
        active-color="#38f"
      />
    </demo-block>

    <demo-block title="自定义图标">
      <press-steps
        :steps="stepsCustom"
        :active="active"
      />
    </demo-block>

    <demo-block title="竖向步骤条">
      <press-steps
        :steps="steps"
        :active="active"
        direction="vertical"
        active-color="#ee0a24"
      />
    </demo-block>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressSteps from '../../../packages/press-steps/press-steps.vue';
// eslint-disable-next-line import/no-unresolved
import PressButton from '../../../packages/press-button/press-button.vue';

export default {
  components: {
    PressSteps,
    PressButton,
  },
  data() {
    return {
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
        },
        {
          text: '步骤二',
          desc: '描述信息',
        },
        {
          text: '步骤三',
          desc: '描述信息',
        },
        {
          text: '步骤四',
          desc: '描述信息',
        },
      ],
      stepsCustom: [
        {
          text: '步骤一',
          desc: '描述信息',
          inactiveIcon: 'location-o',
          activeIcon: 'success',
        },
        {
          text: '步骤二',
          desc: '描述信息',
          inactiveIcon: 'like-o',
          activeIcon: 'plus',
        },
        {
          text: '步骤三',
          desc: '描述信息',
          inactiveIcon: 'star-o',
          activeIcon: 'cross',
        },
        {
          text: '步骤四',
          desc: '描述信息',
          inactiveIcon: 'phone-o',
          activeIcon: 'fail',
        },
      ],
      active: 1,
    };
  },
  methods: {
    onNextStep() {
      if (this.active === this.steps.length - 1) {
        this.active = 0;
        return;
      }
      this.active += 1;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
