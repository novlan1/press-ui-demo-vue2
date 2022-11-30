---
url : pages/press/dialog/dialog
title: 弹窗
subTitle: Dialog
---

## Dialog 弹窗


弹窗组件，支持函数式调用

### 基本用法

**示例**

```html
<press-dialog id="tip-match-comm-tips-dialog" />
```

```ts
import PressDialogHandler from 'src/packages/press-dialog';

export default {
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
  },
};
```

## API

### Props

|   属性名    |  类型  |  默认值  |     说明     |
| :---------: | :----: | :------: | :----------: |
|    title    | String | 温馨提示 |     标题     |
| htmlContent | String |    -     |   html内容   |
|   content   | String |    -     |     内容     |
| confirmText | String |   确定   | 确认按钮文案 |
| cancelText  | String |    -     | 取消按钮文案 |

