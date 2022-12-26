<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-row>
        <press-col :span="8">
          span: 8
        </press-col>
        <press-col :span="8">
          span: 8
        </press-col>
        <press-col :span="8">
          span: 8
        </press-col>
      </press-row>

      <press-row>
        <press-col :span="4">
          span: 4
        </press-col>
        <press-col
          :span="10"
          :offset="4"
        >
          offset: 4, span: 10
        </press-col>
      </press-row>

      <press-row>
        <press-col
          :offset="12"
          :span="12"
        >
          offset: 12, span: 12
        </press-col>
      </press-row>
    </demo-block>

    <demo-block title="设置列元素间距">
      <press-row :gutter="20">
        <press-col :span="8">
          span: 8
        </press-col>
        <press-col :span="8">
          span: 8
        </press-col>
        <press-col :span="8">
          span: 8
        </press-col>
      </press-row>
    </demo-block>
  </div>
</template>
<script>
import PressCol from 'src/packages/press-col/press-col.vue';
import PressRow from 'src/packages/press-row/press-row.vue';

export default {
  components: {
    PressCol,
    PressRow,
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-wrap {
  ::v-deep .press-col {
    margin-bottom: 10px;
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    background-clip: content-box;

    &:nth-child(odd) {
      background-color: #39a9ed;
    }
    &:nth-child(even) {
      background-color: #66c6f2;
    }
  }
}
</style>
