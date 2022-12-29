# 国际化


Press UI 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。

## 使用方法

### 多语言切换

使用 locale.use 方法可以切换当前使用的语言，下面以英文为例：


```ts
import locale from '@tencent/press-ui/locale';
// 引入英文语言包
import enUS from '@tencent/press-ui/locale/lang/en-US';

locale.use(enUS);
```


### 覆盖语言包


通过 locale.add 方法可以实现文案的修改和扩展，示例如下：


```ts
import locale from '@tencent/press-ui/locale';

const messages = {
  'zh-CN': {
    picker: {
      confirm: '关闭', // 将'确认'修改为'关闭'
    },
  },
};

locale.add(messages);
```

### 语言包


目前支持的语言:

| 语言     | 文件名 |
| -------- | ------ |
| 简体中文 | zh-CN  |
| 英语     | en-US  |