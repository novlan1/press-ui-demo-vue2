<template>
  <div class="wrap">
    <demo-block title="基础用法">
      <press-rate
        :value="3"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义图标">
      <press-rate
        :value="value"
        icon="like"
        void-icon="like-o"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义样式">
      <press-rate
        :value="value"
        :size="25"
        color="#ffd21e"
        void-icon="star"
        void-color="#eee"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="半星">
      <press-rate
        :value="half"
        allow-half
        void-icon="star"
        void-color="#eee"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="自定义数量">
      <press-rate
        :value="value"
        :count="6"
        @change="onChange"
      />
    </demo-block>

    <demo-block title="禁用状态">
      <press-rate
        :value="value"
        disabled
        @change="onChange"
      />
    </demo-block>

    <demo-block title="只读状态">
      <press-rate
        :value="value"
        readonly
        @change="onChange"
      />
    </demo-block>
  </div>
</template>
<script>
import PressRate from 'src/packages/press-rate/press-rate.vue';
export default {
  components: {
    PressRate,
  },
  data() {
    return {
      value: 3,
      half: 2.5,
    };
  },
  methods: {
    onChange(val) {
      console.log('onChange.val', val);
    },

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
