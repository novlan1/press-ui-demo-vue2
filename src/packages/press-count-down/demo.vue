<template>
  <div class="demo-wrap">
    <demo-block
      title="基础用法"
      :section-style="sectionStyle"
    >
      <press-count-down :time="time" />
    </demo-block>

    <demo-block
      title="自定义格式"
      :section-style="sectionStyle"
    >
      <press-count-down
        :time="time"
        format="DD 天 HH 时 mm 分 ss 秒"
      />
    </demo-block>

    <demo-block
      title="毫秒级渲染"
      :section-style="sectionStyle"
    >
      <press-count-down
        :time="time"
        millisecond
        format="HH:mm:ss:SSS"
      />
    </demo-block>

    <demo-block
      title="自定义样式"
      :section-style="sectionStyle"
    >
      <press-count-down
        use-slot
        :time="time"
        @change="onChange"
      >
        <span class="item">
          {{ timeData.hours }}
        </span>
        <span class="item">
          {{ timeData.minutes }}
        </span>
        <span class="item">
          {{ timeData.seconds }}
        </span>
      </press-count-down>
    </demo-block>

    <demo-block
      title="手动控制"
      :section-style="sectionStyle"
    >
      <press-count-down
        id="controlCountDown"
        millisecond
        :time="3000"
        :auto-start="false"
        format="ss:SSS"
        @finish="finished"
      />
    </demo-block>

    <press-grid
      clickable
      :column-num="3"
    >
      <press-grid-item
        text="开始"
        icon="play-circle-o"
        @click="start"
      />
      <press-grid-item
        text="暂停"
        icon="pause-circle-o"
        @click="pause"
      />
      <press-grid-item
        text="重置"
        icon="replay"
        @click="reset"
      />
    </press-grid>
  </div>
</template>
<script>
import PressCountDown from 'src/packages/press-count-down/press-count-down.vue';
import PressGrid from 'src/packages/press-grid/press-grid.vue';
import PressGridItem from 'src/packages/press-grid-item/press-grid-item.vue';

export default {
  components: {
    PressCountDown,
    PressGrid,
    PressGridItem,
  },
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      timeData: {},
      sectionStyle: 'margin: 0 12px 20px;',
    };
  },
  methods: {
    onChange(val) {
      this.timeData = val;
    },
    start() {
      const countDown = this.selectComponent('#controlCountDown');
      // #ifdef H5
      countDown.start();
      // #endif
      // #ifndef H5
      countDown.$vm.start();
      // #endif
    },

    pause() {
      const countDown = this.selectComponent('#controlCountDown');
      // #ifdef H5
      countDown.pause();
      // #endif
      // #ifndef H5
      countDown.$vm.pause();
      // #endif
    },

    reset() {
      const countDown = this.selectComponent('#controlCountDown');
      // #ifdef H5
      countDown.reset();
      // #endif
      // #ifndef H5
      countDown.$vm.reset();
      // #endif
    },
    finished() {

    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
  border-radius: 2px;
}
</style>
