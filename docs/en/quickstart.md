# Quick Start

1. Install the npm package


```bash
npm i @tencent/press-ui
```


2. Introduce and use normally in the page

For example the `message-detail` component:

```js
<template>
   <PressMessageDetail />
</template>
import PressMessageDetail from '@tencent/press-ui/press-message-detail/press-message-detail.vue'

export default {
   components: {
     PressMessageDetail,
   }
}
```

3. Configure `vue.config.js`

Note that you need to configure `transpileDependencies` in `vue.config.js`:

```js
module.exports = {
   transpileDependencies: ['@tencent/press-ui'],
}
```