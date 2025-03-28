---
url : pages/press/popover-plus/popover-plus
---

## PopoverPlus 弹出框

弹出式的气泡菜单。

## 引入

```ts
import PressPopoverPlus from 'press-ui/press-popover-plus/press-popover-plus';

export default {
  components: {
    PressPopoverPlus,
  }
}
```

H5 下需要安装 [@popperjs/core](https://www.npmjs.com/package/@popperjs/core)。

## 代码演示

### 基础用法

当 Popover 弹出时，会基于 `reference` 插槽的内容进行定位。

```html
<press-popover-plus
  v-model="showPopover"
  :actions="actions"
  @select="onSelect"
>
  <template #reference>
    <press-button 
      type="primary"
      @click.stop="showPopover = !showPopover"
    >
      浅色风格
    </press-button>
  </template>
</press-popover-plus>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    };
  },
  methods: {
    onSelect(action) {
      this.onGTip(action.text);
    },
  },
};
```

### 深色风格

Popover 支持浅色和深色两种风格，默认为浅色风格，将 `theme` 属性设置为 `dark` 可切换为深色风格。

```html
<press-popover-plus
  v-model="showPopover"
  theme="dark"
  :actions="actions"
>
  <template #reference>
    <press-button 
      type="primary"
      @click.stop="showPopover = !showPopover"
    >
      深色风格
    </press-button>
  </template>
</press-popover-plus>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    };
  },
};
```

### 弹出位置

通过 `placement` 属性来控制气泡的弹出位置。

```html
<press-popover-plus placement="top" />
```

`placement` 支持以下值：

```bash
top           # 顶部中间位置
top-start     # 顶部左侧位置
top-end       # 顶部右侧位置
left          # 左侧中间位置
left-start    # 左侧上方位置
left-end      # 左侧下方位置
right         # 右侧中间位置
right-start   # 右侧上方位置
right-end     # 右侧下方位置
bottom        # 底部中间位置
bottom-start  # 底部左侧位置
bottom-end    # 底部右侧位置
```

### 展示图标

在 `actions` 数组中，可以通过 `icon` 字段来定义选项的图标，支持传入[图标名称](./press-icon-plus)或图片链接。

```html
<press-popover-plus v-model="showPopover" :actions="actions">
  <template #reference>
    <press-button 
      type="primary"
      @click.stop="showPopover = !showPopover"
    >
      展示图标
    </press-button>
  </template>
</press-popover-plus>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: '选项一', icon: 'add-o' },
        { text: '选项二', icon: 'music-o' },
        { text: '选项三', icon: 'more-o' },
      ],
    };
  },
};
```

### 禁用选项

在 `actions` 数组中，可以通过 `disabled` 字段来禁用某个选项。

```html
<press-popover-plus v-model="showPopover" :actions="actions">
  <template #reference>
    <press-button 
      type="primary"
      @click.stop="showPopover = !showPopover"
    >
      禁用选项
    </press-button>
  </template>
</press-popover-plus>
```

```js
export default {
  data() {
    return {
      showPopover: false,
      actions: [
        { text: '选项一', disabled: true },
        { text: '选项二', disabled: true },
        { text: '选项三' },
      ],
    };
  },
};
```

### 自定义内容

通过默认插槽，可以在 Popover 内部放置任意内容。

```html
<press-popover-plus v-model="showPopover" trigger="click">
  <press-grid
    :column-num="3"
    custom-style="width: 240px;"
  >
    <press-grid-item
      v-for="(item,index) of 6"
      :key="index"
      icon="photo-o"
      :text="t('option')"
    />
  </press-grid>
  <template #reference>
    <press-button 
      type="primary"
      @click.stop="showPopover = !showPopover"
    >
      自定义内容
    </press-button>
  </template>
</press-popover-plus>
```

```js
export default {
  data() {
    return {
      showPopover: false,
    };
  },
};
```

## API

### Props


| 参数                   | 说明                           | 类型                 | 默认值   |
| ---------------------- | ------------------------------ | -------------------- | -------- |
| v-model                | 是否展示气泡弹出层             | _boolean_            | `false`  |
| actions                | 选项列表                       | _Action[]_           | `[]`     |
| placement              | 弹出位置                       | _string_             | `bottom` |
| theme                  | 主题风格，可选值为 `dark`      | _string_             | `light`  |
| offset                 | 出现位置的偏移量               | _[number, number]_   | `[0, 8]` |
| overlay                | 是否显示遮罩层                 | _boolean_            | `false`  |
| close-on-click-action  | 是否在点击选项后关闭           | _boolean_            | `true`   |
| close-on-click-outside | 是否在点击外部元素后关闭菜单   | _boolean_            | `true`   |
| get-container          | 指定挂载的节点，仅 `H5` 下生效 | _string \| function_ | -        |

### Action 数据结构

`actions` 属性是一个由对象构成的数组，数组中的每个对象配置一列，对象可以包含以下值：

| 键名      | 说明                                                            | 类型      |
| --------- | --------------------------------------------------------------- | --------- |
| text      | 选项文字                                                        | _string_  |
| icon      | 文字左侧的图标，支持传入[图标名称](./press-icon-plus)或图片链接 | _string_  |
| disabled  | 是否为禁用状态                                                  | _boolean_ |
| className | 为对应选项添加额外的类名                                        | _any_     |

### Events

| 事件名 | 说明                     | 回调参数                        |
| ------ | ------------------------ | ------------------------------- |
| select | 点击选项时触发           | _action: Action, index: number_ |
| open   | 打开菜单时触发           | -                               |
| close  | 关闭菜单时触发           | -                               |
| opened | 打开菜单且动画结束后触发 | -                               |
| closed | 关闭菜单且动画结束后触发 | -                               |

### Slots

| 名称      | 说明                        |
| --------- | --------------------------- |
| default   | 自定义菜单内容              |
| reference | 触发 Popover 显示的元素内容 |

### 样式变量

组件提供了下列 Less 变量，可用于自定义样式。

| 名称                                      | 默认值              | 描述 |
| ----------------------------------------- | ------------------- | ---- |
| $popover-arrow-size                       | `6px`               | -    |
| $popover-border-radius                    | `$border-radius-lg` | -    |
| $popover-action-width                     | `128px`             | -    |
| $popover-action-height                    | `44px`              | -    |
| $popover-action-font-size                 | `$font-size-md`     | -    |
| $popover-action-line-height               | `$line-height-md`   | -    |
| $popover-action-icon-size                 | `20px`              | -    |
| $popover-light-text-color                 | `$text-color`       | -    |
| $popover-light-background-color           | `$white`            | -    |
| $popover-light-action-disabled-text-color | `$gray-5`           | -    |
| $popover-dark-text-color                  | `$white`            | -    |
| $popover-dark-background-color            | `#4a4a4a`           | -    |
| $popover-dark-action-disabled-text-color  | `$gray-6`           | -    |

### Vue3 兼容

`value` 字段 在 Vue3 中使用的是 `model-value`，`input` 事件是 Vue3 中使用的是 `update:modelValue`，支持 `v-model`。

## 在线调试

<debug-online />

