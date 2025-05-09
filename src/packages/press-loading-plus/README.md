---
url : pages/press/loading-plus/loading-plus
---

## LoadingPlus 加载中

用于表示页面或操作的加载状态，给予用户反馈的同时减缓等待的焦虑感，由一个或一组反馈动效组成。

## 引入

```ts
import PressLoadingPlus from 'press-ui/press-loading-plus/press-loading-plus';

export default {
  components: {
    PressLoadingPlus,
  }
}
```

## 代码演示

### 加载类型

```html
<press-loading-plus /> 

<press-loading-plus type="circular-tdesign" />

<press-loading-plus type="spinner" />
```

当类型为 `circular-tdesign` 时，`color` 默认值为 `#0052d9`，即 [TDesign](https://tdesign.tencent.com/design/color) 主题色。

### 自定义颜色

```html
<press-loading-plus color="#1989fa" /> 

<press-loading-plus type="spinner" color="#1989fa" />
```

### 自定义大小

```html
<press-loading-plus size="15" /> 

<press-loading-plus type="spinner" size="38" />
```

### 加载文案

```html
<press-loading-plus size="24px">加载中...</press-loading-plus>
```

### 垂直排列

```html
<press-loading-plus size="24px" vertical>加载中...</press-loading-plus>
```

## API

### Props

| 参数      | 说明                                         | 类型               | 默认值     |
| --------- | -------------------------------------------- | ------------------ | ---------- |
| color     | 颜色                                         | _string_           | `#c9c9c9`  |
| type      | 类型，可选值为 `spinner`, `circular-tdesign` | _string_           | `circular` |
| size      | 加载图标大小，默认单位为 `px`                | _string \| number_ | `30px`     |
| text-size | 文字大小，默认单位为为 `px`                  | _string \| number_ | `14px`     |
| vertical  | 是否垂直排列图标和文字内容                   | _boolean_          | `false`    |

### Slots

| 名称 | 说明     |
| ---- | -------- |
| -    | 加载文案 |

## 在线调试

<debug-online />

