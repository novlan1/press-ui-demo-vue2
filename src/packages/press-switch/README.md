---
url : pages/press/switch/switch
title: 切换
subTitle: Switch
---

## Switch 切换选择器


切换选择器

### 基本用法

**示例**


```html
<press-switch
  :open="isOpen"
  @onSwitchChange="onSwitchChange"
/>
```

```js
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    onSwitchChange() {
      this.isOpen = !this.isOpen;
    },
  }
},
```


## API

### Props

|属性名				|类型		|默认值	|说明																																														|
|:-:					|:-:		|:-:		|:-:																																														|
|open					|String	|false			|是否开启			|





### Events

|    事件称名    |   说明   | 返回值 |
| :------------: | :------: | :----: |
| onSwitchChange | 切换选中 |   -    |


