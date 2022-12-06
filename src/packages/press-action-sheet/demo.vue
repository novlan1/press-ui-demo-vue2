<template>
  <div class="wrap">
    <demo-block
      v-for="(item,index) of demoList"
      :key="index"
      :title="item.title"
    >
      <press-button
        type="e-sport-primary"
        custom-style="width: auto;"
        @click="onShowActionSheet(item.type)"
      >
        弹出菜单
      </press-button>
    </demo-block>


    <press-action-sheet
      :show="show"
      :actions="curActions"
      :cancel-text="cancelText"
      :description="description"
      :title="title"
      @close="onClose"
      @select="onSelect"
      @getuserinfo="onGetUserInfo"
    />

    <press-action-sheet
      :show="showCustom"
      title="标题"
      @close="onClose"
      @select="onSelect"
    >
      <div style="padding: 16px;">
        内容
      </div>
    </press-action-sheet>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-unresolved
import PressActionSheet from '../../../packages/press-action-sheet/press-action-sheet.vue';

const actions = [
  {
    name: '选项1',
  },
  {
    name: '选项2',
  },
  {
    name: '选项3',
    subname: '描述信息',
    openType: 'share',
  },
];
const statusActions = [
  { name: '着色选项', color: '#ee0a24' },
  { loading: true },
  { name: '禁用选项', disabled: true },
];

const wxActions = [
  { name: '获取用户信息', color: '#07c160', openType: 'getUserInfo' },
];

export default {
  components: {
    PressActionSheet,
  },
  data() {
    const  demoList = [
      {
        title: '基础用法',
        type: 'basic',
      },
      {
        title: '选项状态',
        type: 'status',
      },
      {
        title: '展示取消状态',
        type: 'cancel',
      },
      {
        title: '展示描述状态',
        type: 'description',
      },
      {
        title: '展示标题栏',
        type: 'title',
      },

    ];
    if (process.env.UNI_PLATFORM !== 'h5') {
      demoList.push({
        title: '微信开放能力',
        type: 'wxOpen',
      });
    }

    return {
      demoList,
      show: false,
      showCustom: false,
      cancelText: '',
      description: '',
      title: '',
      curActions: actions,
    };
  },
  methods: {
    onShowActionSheet(type) {
      let cancelText = '';
      let description = '';
      let curActions = [];
      let title = '';
      switch (type) {
        case 'title': {
          this.showCustom = true;
          return;
        }
        case 'basic': {
          curActions = actions;
          break;
        }
        case 'wxOpen': {
          curActions = wxActions;
          title = '标题';
          break;
        }
        case 'status': {
          curActions = statusActions;
          break;
        }
        case 'cancel': {
          curActions = actions;
          cancelText = '取消';
          break;
        }
        case 'description': {
          curActions = actions;
          description = '这是一段描述信息';
          break;
        }
        default: {
        }
      }
      this.show = true;
      this.cancelText = cancelText;
      this.description = description;
      this.curActions = curActions;
      this.title = title;
    },
    onClose() {
      this.show = false;
      this.showCustom = false;
    },
    onSelect(e) {
      console.log('onSelect.e', e);
    },
    onGetUserInfo(e) {
      console.log('onGetUserInfo.e', e);
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
</style>
