<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-dropdown-menu>
        <press-dropdown-item
          :value="value1"
          :options="option1"
        />
        <press-dropdown-item
          :value="value2"
          :options="option2"
        />
      </press-dropdown-menu>
    </demo-block>

    <demo-block title="自定义菜单内容">
      <press-dropdown-menu>
        <press-dropdown-item
          :value="value1"
          :options="option1"
        />
        <press-dropdown-item
          id="item"
          :title="itemTitle"
        >
          <press-cell :title="switchTitle1">
            <press-switch
              slot="right-icon"
              size="24px"
              style="height: 26px"
              :checked="switch1"
              active-color="#ee0a24"
              @change="onSwitch1Change"
            />
          </press-cell>
          <press-cell :title="switchTitle2">
            <press-switch
              slot="right-icon"
              size="24px"
              style="height: 26px"
              :checked="switch2"
              active-color="#ee0a24"
              @change="onSwitch2Change"
            />
          </press-cell>
          <view style="padding: 5px 16px;">
            <press-button
              type="danger"
              block
              round
              @click="onConfirm"
            >
              确认
            </press-button>
          </view>
        </press-dropdown-item>
      </press-dropdown-menu>
    </demo-block>

    <demo-block title="自定义选中状态颜色">
      <press-dropdown-menu active-color="#1989fa">
        <press-dropdown-item
          :value="value1"
          :options="option1"
        />
        <press-dropdown-item
          :value="value2"
          :options="option2"
        />
      </press-dropdown-menu>
    </demo-block>

    <demo-block title="向上展开">
      <press-dropdown-menu direction="up">
        <press-dropdown-item
          :value="value1"
          :options="option1"
        />
        <press-dropdown-item
          :value="value2"
          :options="option2"
        />
      </press-dropdown-menu>
    </demo-block>

    <demo-block title="禁用菜单">
      <press-dropdown-menu>
        <press-dropdown-item
          :value="value1"
          disabled
          :options="option1"
        />
        <press-dropdown-item
          :value="value2"
          disabled
          :options="option2"
        />
      </press-dropdown-menu>
    </demo-block>
  </div>
</template>
<script>
import PressDropdownMenu from 'src/packages/press-dropdown-menu/press-dropdown-menu.vue';
import PressDropdownItem from 'src/packages/press-dropdown-item/press-dropdown-item.vue';
import PressSwitch from 'src/packages/press-switch/press-switch.vue';

export default {
  components: {
    PressDropdownMenu,
    PressDropdownItem,
    PressSwitch,
  },
  data() {
    return {
      option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '好评排序', value: 'b' },
        { text: '销量排序', value: 'c' },
      ],
      value1: 0,
      value2: 'a',

      switchTitle1: '包邮',
      switchTitle2: '团购',
      itemTitle: '筛选',
      switch1: true,
      switch2: true,
    // option1: [
    //   { text: '全部商品', value: 0 },
    //   { text: '新款商品', value: 1 },
    //   { text: '活动商品', value: 2 },
    // ],
    // value1: 0,
    };
  },
  methods: {
    onConfirm() {
      this.selectComponent('#item').toggle();
    },

    onSwitch1Change(detail) {
      console.log('onSwitch1Change.detail', detail);
      this.switch1 = detail;
    // this.setData({ switch1: detail });
    },

    onSwitch2Change(detail) {
      console.log('onSwitch2Change.detail', detail);
      this.switch2 = detail;
    // this.setData({ switch2: detail });
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
