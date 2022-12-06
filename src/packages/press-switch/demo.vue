<template>
  <view class="wrap">
    <demo-block title="基础用法">
      <PressSwitch
        :checked="checkedMap.basic"
        @change="value=>onChange(value, 'basic')"
      />
    </demo-block>

    <demo-block title="禁用状态">
      <PressSwitch
        :checked="checkedMap.basic"
        disabled
        @change="value=>onChange(value, 'basic')"
      />
    </demo-block>

    <demo-block title="加载状态">
      <PressSwitch
        :checked="checkedMap.basic"
        loading
        @change="value=>onChange(value, 'basic')"
      />
    </demo-block>

    <demo-block title="自定义大小">
      <PressSwitch
        :checked="checkedMap.size"
        size="24px"
        @change="value=>onChange(value, 'size')"
      />
    </demo-block>

    <demo-block title="自定义颜色">
      <PressSwitch
        :checked="checkedMap.color"
        active-color="#07c160"
        inactive-color="#ee0a24"
        @change="value=>onChange(value, 'color')"
      />
    </demo-block>


    <demo-block title="异步控制">
      <PressSwitch
        :checked="checkedMap.async"
        @change="value=>onChange(value, 'async')"
      />
    </demo-block>

    <demo-block title="E-SPORT">
      <PressSwitch
        custom-class="press-switch--e-sport"
        :open="isOpen"
        @onSwitchChange="onSwitchChange"
      />
    </demo-block>

    <!-- #ifndef H5 -->
    <PressDialog
      v-if="isMPWeixin"
      id="tip-match-comm-tips-dialog"
    />
    <!-- #endif -->
  </view>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressSwitch from '../../../packages/press-switch/press-switch.vue';
// eslint-disable-next-line import/no-unresolved
import PressDialog from '../../../packages/press-dialog/press-dialog.vue';
// eslint-disable-next-line import/no-unresolved
import PressDialogHandler from '../../../packages/press-dialog';

export default {
  components: {
    PressSwitch,
    PressDialog,
  },
  data() {
    return {
      isOpen: true,
      checkedMap: {
        basic: true,
        color: true,
        size: true,
        async: true,
      },
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
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
    onChange(value, type) {
      console.log('value', value, type);

      if (type === 'async') {
        PressDialogHandler.show({
          title: '提示',
          content: '是否切换开关',
          confirmText: '确认',
          cancelText: '取消',
        }).then(() => {
          this.checkedMap.async = value;
        });
        return;
      }
      this.checkedMap[type] = value;
    },
  },
};
</script>

<style scoped lang="scss">
</style>

