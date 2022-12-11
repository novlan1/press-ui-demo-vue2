<template>
  <div class="wrap">
    <demo-block title="基础用法">
      <press-search
        :value="value"
        placeholder="请输入搜索关键词"
      />
    </demo-block>

    <demo-block title="事件监听">
      <press-search
        :value="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </demo-block>

    <demo-block title="搜索框内容对齐">
      <press-search
        :value="value"
        placeholder="请输入搜索关键词"
        input-align="center"
        @search="onSearch"
        @cancel="onCancel"
      />
    </demo-block>

    <demo-block title="禁用搜索框">
      <press-search
        :value="value"
        disabled
        placeholder="请输入搜索关键词"
      />
    </demo-block>

    <demo-block title="自定义背景色">
      <press-search
        :value="value"
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
      />
    </demo-block>

    <demo-block title="自定义背景色">
      <press-search
        :value="value"
        label="地址"
        use-action-slot
        placeholder="请输入搜索关键词"
      >
        <div
          slot="action"
          @click="onClick"
        >
          搜索
        </div>
      </press-search>
    </demo-block>
  </div>
</template>
<script>
import PressSearch from 'src/packages/press-search/press-search.vue';

export default {
  components: {
    PressSearch,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onCancel() {
      console.log('onCancel');
    },
    onSearch() {
      console.log('onSearch');
    },
    onClick() {
      console.log('onClick');
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
