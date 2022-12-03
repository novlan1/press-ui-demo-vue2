<template>
  <view class="wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.basic"
        @change="v=>onChange(v, 'basic')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="禁用状态"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.disabled"
        disabled
        @change="v=>onChange(v, 'disabled')"
      >
        复选框
      </press-checkbox>
    </demo-block>


    <demo-block
      title="自定义形状"
      :section-style="sectionStyle"
    >
      <press-checkbox
        shape="square"
        :value="checkedMap.shape"
        @change="v=>onChange(v, 'shape')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="自定义颜色"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.color"
        checked-color="#07c160"
        @change="v=>onChange(v, 'color')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="自定义大小"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.size"
        :icon-size="25"
        @change="v=>onChange(v, 'size')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="禁用文本点击"
      :section-style="sectionStyle"
    >
      <press-checkbox
        :value="checkedMap.noLabel"
        label-disabled
        @change="v=>onChange(v, 'noLabel')"
      >
        复选框
      </press-checkbox>
    </demo-block>

    <demo-block
      title="禁用文本点击"
      :section-style="sectionStyle"
    >
      <press-checkbox-group
        :value="checkedMap.group"
        @change="v=>onChange(v, 'group')"
      >
        <press-checkbox name="a">
          复选框 a
        </press-checkbox>
        <press-checkbox name="b">
          复选框 b
        </press-checkbox>
        <press-checkbox name="c">
          复选框 c
        </press-checkbox>
      </press-checkbox-group>
    </demo-block>
  </view>
</template>
<script>

export default {
  data() {
    return {
      checkedMap: {
        basic: true,
        shape: true,
        size: true,
        color: true,
        noLabel: true,
        disabled: true,
        group: ['a', 'b'],
      },
      sectionStyle: 'margin: 5px 18px;',
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  methods: {
    onChange(val, type) {
      console.log('onChange.val', val, type);
      this.checkedMap[type] = val;
    },
  },
};
</script>

<style scoped lang="scss">
</style>

