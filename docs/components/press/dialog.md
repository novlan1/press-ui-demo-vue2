---
url : pages/press/dialog/dialog
---

## Dialog 弹窗
::: tip 组件名：press-dialog
代码块： `press-dialog`
:::

弹窗组件，支持函数式调用

### 基本用法

**示例**


```vue
<template>
  <button @click.stop="onShowDialog()">
    展示
  </button>
  <press-dialog id="tip-match-comm-tips-dialog" />
</template>

<script>
import PressDialogHandler from 'src/packages/press-dialog';
import PressDialog from 'src/packages/press-dialog/press-dialog';

export default {
  component: {
    PressDialog
  },
  methods: {
    onShowDialog() {
      PressDialogHandler.show({
        title: '提示',
        content: '仅限队长报名，发给队长来报名吧！',
        confirmText: '确认',
        cancelText: '取消',
      }).then(() => {})
        .catch(() => {});
    },
  }
},
</script>
```


## API

### Props

|属性名				|类型		|默认值	|说明																																														|
|:-:					|:-:		|:-:		|:-:																																														|
|title					|String	|温馨提示			|标题																																												|
|htmlContent					|String	|-|html内容|
|content					|String	|-|内容|
|confirmText					|String	|确定|确认按钮文案|
|cancelText					|String	|-|取消按钮文案|





