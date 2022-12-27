<template>
  <div class="wrap">
    <press-cell title="基础用法">
      <press-stepper
        :value="value"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="步长设置">
      <press-stepper
        :value="value"
        :step="2"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="限制输入范围">
      <press-stepper
        :value="value"
        :min="5"
        :max="8"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="限制输入整数">
      <press-stepper
        :value="value"
        integer
        @change="onChange"
      />
    </press-cell>

    <press-cell title="禁用状态">
      <press-stepper
        disabled
        :value="value"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="关闭长按">
      <press-stepper
        :long-press="false"
        :value="value"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="固定小数位数">
      <press-stepper
        :step="0.2"
        :decimal-length="1"
        :value="value"
        @change="onChange"
      />
    </press-cell>

    <press-cell title="异步变更">
      <press-stepper
        async-change
        :value="asyncValue"
        @change="onSyncChange"
      />
    </press-cell>

    <press-cell title="自定义大小">
      <press-stepper
        input-width="40px"
        button-size="32px"
        :value="value"
        @change="onChange"
      />
    </press-cell>


    <!-- #ifndef H5 -->
    <PressToast id="press-toast" />
    <!-- #endif -->
  </div>
</template>
<script>
import PressStepper from 'src/packages/press-stepper/press-stepper.vue';
import PressToast from 'src/packages/press-toast/press-toast.vue';

export default {
  components: {
    PressStepper,
    PressToast,
  },
  data() {
    return {
      value: 1,
      asyncValue: 1,
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
    },
    onSyncChange(val) {
      this.$toast.loading({
        duration: 1000,
      });
      setTimeout(() => {
        console.log('onSyncChange.val', val);
        this.asyncValue = val;
      }, 1000);
    },

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
