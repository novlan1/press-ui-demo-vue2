---
url : pages/press/popup/popup
title: 弹出层
subTitle: Popup
---

## Popup 弹出层


弹出层组件，在应用中弹出一个消息提示窗口、提示框等


### 基本用法

**示例**


```vue
<template>
  <PressPopup
    v-if="popupOptions.normal.show"
    :is-showpopup-close="true"
    :show-back-arrow="false"
    :popup-title="popupOptions.normal.title"
    popup-title-btn="确定"
    @onConfirm="popupOptions.normal.onConfirm"
    @onCancel="popupOptions.normal.onCancel"
  >
    <view class="content">
      一些内容
    </view>
  </PressPopup>
</template>

<script>
import PressPopup from '@tencent/press-ui/press-popup/press-popup';

export default {
  component: {
    PressPopup,
  },
};
</script>
```


## API

### Popup Props 

|      属性名      |   类型   | 默认值 |                         说明                         |
| :--------------: | :------: | :----: | :--------------------------------------------------: |
|   isShowTitle    | Boolean  |  true  |                     是否显示标题                     |
|    popupTitle    |  String  |   -    |                       弹窗标题                       |
|  popupTitleBtn   |  String  |   -    |                     弹窗标题按钮                     |
|   isBorderBtn    | Boolean  | false  |                     标题按钮样式                     |
| validateConfirm  | Function |   -    | 在执行确认动画前，validateConfirm返回false则进行拦截 |
|      zIndex      |  String  |  '99'  |                       弹窗层级                       |
|    popupClass    |  String  |   -    |                        class                         |
|  canTouchRemove  | Boolean  |  true  |                 是否可以点击蒙版关闭                 |
| isShowpopupClose | Boolean  | false  |                   是否显示关闭按钮                   |
|  showBackArrow   | Boolean  | false  |                  是否显示为返回箭头                  |
|   isCrossSlab    | Boolean  | false  |                   是否切换横板样式                   |
|   widthNumber    |  Number  |  100   |                  横板弹窗宽度百分比                  |





### Popup Events

| 事件称名  |   说明   | 返回值 |
| :-------: | :------: | :----: |
| onCancel  | 点击取消 |   -    |
| onConfirm | 点击确定 |   -    |

