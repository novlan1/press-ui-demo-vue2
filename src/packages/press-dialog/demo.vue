<template>
  <div class="wrap">
    <demo-block
      v-for="(item, index) of dialogTypeList"
      :key="index"
      :title="item.title"
      :section-style="sectionStyle"
    >
      <press-button
        type="e-sport-primary-bg"
        @click="onShowDialog(item.name)"
      >
        查看
      </press-button>
    </demo-block>

    <press-dialog id="tip-match-comm-tips-dialog" />
  </div>
</template>
<script>
import PressDialog from 'src/packages/press-dialog';

const LONG_TEXT = [
  '念奴娇·赤壁怀古',
  '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。',
  '遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
  '<br/>',
  '沁园春·雪',
  '北国风光，千里冰封，万里雪飘。望长城内外，惟余莽莽；大河上下，顿失滔滔。山舞银蛇，原驰蜡象，欲与天公试比高。须晴日，看红装素裹，分外妖娆。',
  '江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。一代天骄，成吉思汗，只识弯弓射大雕。俱往矣，数风流人物，还看今朝。',
  '<br/>',
  '沁园春·长沙',
  '独立寒秋，湘江北去，橘子洲头。看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。怅寥廓，问苍茫大地，谁主沉浮？',
  '携来百侣曾游，忆往昔峥嵘岁月稠。恰同学少年，风华正茂；书生意气，挥斥方遒。指点江山，激扬文字，粪土当年万户侯。曾记否，到中流击水，浪遏飞舟？',
].join('<br/>');


const loadingConfirm = function () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
};

export default {
  data() {
    return {
      sectionStyle: '',
      dialogTypeList: [
        {
          name: 'normal',
          title: '基本用法',
        },
        {
          name: 'noCancel',
          title: '没有取消按钮',
        },
        {
          name: 'loading',
          title: '加载中',
        },
        {
          name: 'noCancelLoading',
          title: '没有取消+加载中',
        },
        {
          name: 'img',
          title: '图片',
        },
        {
          name: 'html',
          title: 'HTML内容',
        },
        {
          name: 'noTouchMove',
          title: '点击蒙层不可关闭',
        },
        {
          name: 'longText',
          title: '长文本',
        },
      ],
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
    onShowDialog(type) {
      let cancelText = '取消';
      let dialogType = 1;
      let onConfirmClick = null;
      let content = '仅限队长报名，发给队长来报名吧！';
      let htmlContent = '';
      let src = '';
      let canTouchRemove = true;
      let useScrollView = false;

      if (type === 'noCancel') {
        cancelText = '';
      } else if (type === 'loading') {
        dialogType = 2;
        onConfirmClick = loadingConfirm;
      } else if (type === 'noCancelLoading') {
        dialogType = 2;
        cancelText = '';
        onConfirmClick = loadingConfirm;
      } else if (type === 'html') {
        content = '',
        htmlContent = '<div>自定义<span style="color: red;">内容</span></div>';
      } else if (type === 'img') {
        src = 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press/qrcode/qrcode-wx-mp.png';
      } else if (type === 'noTouchMove') {
        canTouchRemove = false;
      } else if (type === 'longText') {
        content = '';
        htmlContent = `<div style="max-height:100%;overflow:scroll;">${LONG_TEXT}</div>`;
        useScrollView = true;
      }

      PressDialog.show({
        title: '提示',
        content,
        htmlContent,
        src,
        confirmText: '确认',
        cancelText,
        dialogType,
        onConfirmClick,
        canTouchRemove,
        useScrollView,
      }).then(() => {})
        .catch(() => {});
    },
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 20px;
}
</style>
