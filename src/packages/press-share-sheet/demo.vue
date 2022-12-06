<template>
  <div class="wrap">
    <demo-block
      v-for="(item, index) of demoList"
      :key="index"
      :title="item.title"
    >
      <press-button
        type="e-sport-primary"
        custom-style="width: auto;"
        @click="onShowShareSheet(item.type)"
      >
        弹出菜单
      </press-button>
    </demo-block>

    <press-share-sheet
      :show="showShare"
      title="立即分享给好友"
      :description="description"
      :options="curOptions"
      @select="onSelect"
      @close="onClose"
    />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressShareSheet from '../../../packages/press-share-sheet/press-share-sheet.vue';

const options = [
  { name: '微信', icon: 'wechat', openType: 'share' },
  { name: '微博', icon: 'weibo' },
  { name: '复制链接', icon: 'link' },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];
const multiLineOptions = [
  [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: 'QQ', icon: 'qq' },
  ],
  [
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
  ],
];
const customIconOptions = [
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
  {
    name: '名称',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
  },
];

const descriptionOptions = [
  { name: '微信', icon: 'wechat' },
  { name: '微博', icon: 'weibo' },
  {
    name: '复制链接',
    icon: 'link',
    description: '描述信息',
  },
  { name: '分享海报', icon: 'poster' },
  { name: '二维码', icon: 'qrcode' },
];

export default {
  components: {
    PressShareSheet,
  },
  data() {
    return {
      demoList: [
        {
          title: '基础用法',
          type: 'basic',
        },
        {
          title: '展示多行选项',
          type: 'multiLine',
        },
        {
          title: '自定义图标',
          type: 'customIcon',
        },
        {
          title: '展示描述信息',
          type: 'description',
        },
      ],
      showShare: false,
      description: '',
      curOptions: options,
    };
  },
  methods: {
    onShowShareSheet(type) {
      let description = '';
      switch (type) {
        case 'basic': {
          this.curOptions = options;
          break;
        }
        case 'multiLine': {
          this.curOptions = multiLineOptions;
          break;
        }
        case 'customIcon': {
          this.curOptions = customIconOptions;
          break;
        }
        case 'description': {
          this.curOptions = descriptionOptions;
          description = '描述信息';
          break;
        }
        default: {
        }
      }
      this.showShare = true;
      this.description = description;
    },
    onSelect() {
      this.showShare = false;
    },
    onClose() {
      this.showShare = false;
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
