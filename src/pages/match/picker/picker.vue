<template>
  <view>
    <match-picker
      :show="show"
      :columns="columns"
    />
    <!-- <u-button @click="show = true">打开</u-button> -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      columns: [
        ['中国', '美国', '日本'],
      ],
    };
  },
};
</script>
