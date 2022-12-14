<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-area :area-list="areaList" />
    </demo-block>

    <demo-block title="选中省市区">
      <press-area
        :area-list="areaList"
        value="440304"
      />
    </demo-block>

    <demo-block title="配置显示列">
      <press-area
        :area-list="areaList"
        :columns-num="2"
        value="440304"
      />
    </demo-block>

    <demo-block title="配置列占位提示文字">
      <press-area
        :area-list="areaList"
        value="440304"
        :columns-placeholder="['请选择', '请选择', '请选择']"
      />
    </demo-block>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressArea from '../../../packages/press-area/press-area.vue';


const AREA_DATA_URL = 'https://tip-components-1251917893.cos.ap-guangzhou.myqcloud.com/rb/front-open-config__match__default__area_data.json';


function getAreaData() {
  return new Promise((resolve, reject) => {
    uni.request({
      url: AREA_DATA_URL,
      data: {},
      method: 'GET',
      sslVerify: true,
      success: ({ data }) => {
        resolve(data);
      },
      fail: (error) => {
        reject(error);
      },
    });
  });
}


export default {
  components: {
    PressArea,
  },
  data() {
    return {
      areaList: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getAreaData().then(data => [
        this.areaList = data,
      ]);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-wrap {
  padding-bottom: 30px;
}
</style>
