---
url : pages/press/switch/switch
---

## Switch 切换选择器
::: tip 组件名：press-switch
代码块： `press-switch`
:::

切换选择器

### 基本用法

**示例**


```vue
<template>
  <press-switch
    :open="isOpen"
    @onSwitchChange="onSwitchChange"
  />
</template>

<script>
import PressSwitch from 'src/packages/press-switch/press-switch';

export default {
  component: {
    PressSwitch
  },
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
</script>
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


