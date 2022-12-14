<template>
  <div class="demo-radio-group">
    <demo-block title="基础用法">
      <press-radio-group
        :value="valueMap.basic"
        @change="(val) => onChange(val, 'basic')"
      >
        <press-radio name="a">
          单选框 1
        </press-radio>
        <press-radio name="b">
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="水平排列">
      <press-radio-group
        :value="valueMap.horizontal"
        direction="horizontal"
        @change="(val) => onChange(val, 'horizontal')"
      >
        <press-radio name="a">
          单选框 1
        </press-radio>
        <press-radio name="b">
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="禁用状态">
      <press-radio-group
        :value="valueMap.disabled"
        disabled
        @change="(val) => onChange(val, 'disabled')"
      >
        <press-radio name="a">
          单选框 1
        </press-radio>
        <press-radio name="b">
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="自定义形状">
      <press-radio-group
        :value="valueMap.square"
        @change="(val) => onChange(val, 'square')"
      >
        <press-radio
          name="a"
          shape="square"
        >
          单选框 1
        </press-radio>
        <press-radio
          name="b"
          shape="square"
        >
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="自定义颜色">
      <press-radio-group
        :value="valueMap.customStyle"
        @change="(val) => onChange(val, 'customStyle')"
      >
        <press-radio
          name="a"
          checked-color="#07c160"
        >
          单选框 1
        </press-radio>
        <press-radio
          name="b"
          checked-color="#07c160"
        >
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="自定义大小">
      <press-radio-group
        :value="valueMap.customSize"
        @change="(val) => onChange(val, 'customSize')"
      >
        <press-radio
          name="a"
          icon-size="24px"
        >
          单选框 1
        </press-radio>
        <press-radio
          name="b"
          icon-size="24px"
        >
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="自定义图标">
      <press-radio-group
        :value="valueMap.customIcon"
        @change="(val) => onChange(val, 'customIcon')"
      >
        <press-radio
          name="a"
          use-icon-slot
        >
          单选框 1
          <img
            slot="icon"
            :src="valueMap.customIcon === 'a' ? icon.active : icon.normal"
          >
        </press-radio>
        <press-radio
          name="b"
          use-icon-slot
        >
          单选框 2
          <img
            slot="icon"
            :src="valueMap.customIcon === 'b' ? icon.active : icon.normal"
          >
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block title="禁用文本点击">
      <press-radio-group
        :value="valueMap.labelDisabled"
        @change="(val) => onChange(val, 'labelDisabled')"
      >
        <press-radio
          name="a"
          label-disabled
        >
          单选框 1
        </press-radio>
        <press-radio
          name="b"
          label-disabled
        >
          单选框 2
        </press-radio>
      </press-radio-group>
    </demo-block>

    <demo-block
      title="与 Cell 组件一起使用"
      section-style="margin: 0;"
    >
      <press-radio-group
        :value="valueMap.cell"
        @change="val => onChange(val, 'cell')"
      >
        <press-cell-group>
          <press-cell
            title="单选框 1"
            clickable
            data-name="1"
            @click="valueMap.cell = '1'"
          >
            <press-radio
              slot="right-icon"
              name="1"
            />
          </press-cell>
          <press-cell
            title="单选框 2"
            clickable
            data-name="2"
            @click="valueMap.cell = '2'"
          >
            <press-radio
              slot="right-icon"
              name="2"
            />
          </press-cell>
        </press-cell-group>
      </press-radio-group>
    </demo-block>
  </div>
</template>
<script>
import PressRadio from 'src/packages/press-radio/press-radio.vue';
import PressRadioGroup from 'src/packages/press-radio-group/press-radio-group.vue';

export default {
  components: {
    PressRadio,
    PressRadioGroup,
  },
  data() {
    return {
      valueMap: {
        basic: 'a',
        horizontal: 'a',
        disabled: 'a',
        square: 'a',
        customStyle: 'a',
        customSize: 'a',
        customIcon: 'a',
        labelDisabled: 'a',
        cell: '1',
      },
      icon: {
        normal: '//mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-inactive.png',
        active: '//mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fuser-active.png',
      },
    };
  },
  methods: {
    onChange(val, type) {
      console.log('onChange.val', val);
      this.$set(this.valueMap, type, val);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-radio-group {
  padding-bottom: 20px;
  &::v-deep .van-radio {
    margin-bottom: 8px;
  }
  img {
    height: 20px;
    width: 25px;
  }
}
</style>
