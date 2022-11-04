<template>
  <UniPopup
    ref="popup"
    :show="show"
    background-color="#fff"
    type="bottom"
  >
    <view class="u-picker">
      <Toolbar
        v-if="showToolbar"
        :cancel-color="cancelColor"
        :confirm-color="confirmColor"
        :cancel-text="cancelText"
        :confirm-text="confirmText"
        :title="title"
        @cancel="cancel"
        @confirm="confirm"
      />
      <picker-view
        class="u-picker__view"
        :indicator-style="`height: ${addUnit(itemHeight)}`"
        :value="innerIndex"
        :immediate-change="immediateChange"
        :style="{
          height: `${addUnit(visibleItemCount * itemHeight)}`
        }"
        @change="changeHandler"
      >
        <picker-view-column
          v-for="(item, index) in innerColumns"
          :key="index"
          class="u-picker__view__column"
        >
          <template v-if="Array.isArray(item)">
            <text
              v-for="(item1, index1) in item"

              :key="index1"
              class="u-picker__view__column__item u-line-1"
              :style="{
                height: addUnit(itemHeight),
                lineHeight: addUnit(itemHeight),
                fontWeight: index1 === innerIndex[index] ? 'bold' : 'normal'
              }"
            >
              {{ getItemText(item1) }}
            </text>
          </template>
        </picker-view-column>
      </picker-view>
    </view>
  </UniPopup>
</template>
<script>
import UniPopup from '../../../uni-popup/components/uni-popup/uni-popup.vue';
import Toolbar from '../match-toolbar/match-toolbar.vue';
import { deepClone, sleep, isObject, addUnit } from './util';

export default {
  name: 'MatchPicker',
  components: {
    UniPopup,
    Toolbar,
  },
  props: {
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: false,
    },
    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: true,
    },
    // 顶部标题
    title: {
      type: String,
      default: '',
    },
    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: () => [],
    },
    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: false,
    },
    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: 44,
    },
    // 取消按钮的文字
    cancelText: {
      type: String,
      default: '取消',
    },
    // 确认按钮的文字
    confirmText: {
      type: String,
      default: '确定',
    },
    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: '#909193',
    },
    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: '#3c9cff',
    },
    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: 5,
    },
    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: 'text',
    },
    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: () => [],
    },
    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 上一次选择的列索引
      lastIndex: [],
      // 索引值 ，对应picker-view的value
      innerIndex: [],
      // 各列的值
      innerColumns: [],
      // 上一次的变化列索引
      columnIndex: 0,
    };
  },
  watch: {
    show: {
      // immediate: true,
      handler(val) {
        if (val) {
          this.$refs?.popup?.open('bottom');
        }
      },
    },
    // 监听默认索引的变化，重新设置对应的值
    defaultIndex: {
      immediate: true,
      handler(n) {
        this.setIndexes(n, true);
      },
    },
    // 监听columns参数的变化
    columns: {
      immediate: true,
      handler(n) {
        this.setColumns(n);
      },
    },
  },
  methods: {
    addUnit,
    // 获取item需要显示的文字，判别为对象还是文本
    getItemText(item) {
      if (isObject(item)) {
        return item[this.keyName];
      }
      return item;
    },
    // 关闭选择器
    closeHandler() {
      if (this.closeOnClickOverlay) {
        this.$emit('close');
      }
    },
    // 点击工具栏的取消按钮
    cancel() {
      this.$emit('cancel');
    },
    // 点击工具栏的确定按钮
    confirm() {
      this.$emit('confirm', {
        indexes: this.innerIndex,
        value: this.innerColumns.map((item, index) => item[this.innerIndex[index]]),
        values: this.innerColumns,
      });
    },
    // 选择器某一列的数据发生变化时触发
    changeHandler(e) {
      const {
        value,
      } = e.detail;
      let index = 0;
      let columnIndex = 0;
      // 通过对比前后两次的列索引，得出当前变化的是哪一列
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        if (item !== (this.lastIndex[i] || 0)) { // 把undefined转为合法假值0
          // 设置columnIndex为当前变化列的索引
          columnIndex = i;
          // index则为变化列中的变化项的索引
          index = item;
          break; // 终止循环，即使少一次循环，也是性能的提升
        }
      }
      this.columnIndex = columnIndex;
      const values = this.innerColumns;
      // 将当前的各项变化索引，设置为"上一次"的索引变化值
      this.setLastIndex(value);
      this.setIndexes(value);

      this.$emit('change', {
        // #ifndef MP-WEIXIN || MP-LARK
        // 微信小程序不能传递this，会因为循环引用而报错
        picker: this,
        // #endif
        value: this.innerColumns.map((item, index) => item[value[index]]),
        index,
        indexes: value,
        // values为当前变化列的数组内容
        values,
        columnIndex,
      });
    },
    // 设置index索引，此方法可被外部调用设置
    setIndexes(index, setLastIndex) {
      this.innerIndex = deepClone(index);
      if (setLastIndex) {
        this.setLastIndex(index);
      }
    },
    // 记录上一次的各列索引位置
    setLastIndex(index) {
      // 当能进入此方法，意味着当前设置的各列默认索引，即为“上一次”的选中值，需要记录，是因为changeHandler中
      // 需要拿前后的变化值进行对比，得出当前发生改变的是哪一列
      this.lastIndex = deepClone(index);
    },
    // 设置对应列选项的所有值
    setColumnValues(columnIndex, values) {
      // 替换innerColumns数组中columnIndex索引的值为values，使用的是数组的splice方法
      this.innerColumns.splice(columnIndex, 1, values);
      // 拷贝一份原有的innerIndex做临时变量，将大于当前变化列的所有的列的默认索引设置为0
      const tmpIndex = deepClone(this.innerIndex);
      for (let i = 0; i < this.innerColumns.length; i++) {
        if (i > this.columnIndex) {
          tmpIndex[i] = 0;
        }
      }
      // 一次性赋值，不能单个修改，否则无效
      this.setIndexes(tmpIndex);
    },
    // 获取对应列的所有选项
    getColumnValues(columnIndex) {
      // 进行同步阻塞，因为外部得到change事件之后，可能需要执行setColumnValues更新列的值
      // 索引如果在外部change的回调中调用getColumnValues的话，可能无法得到变更后的列值，这里进行一定延时，保证值的准确性
      (async () => {
        await sleep();
      })();
      return this.innerColumns[columnIndex];
    },
    // 设置整体各列的columns的值
    setColumns(columns) {
      this.innerColumns = deepClone(columns);
      // 如果在设置各列数据时，没有被设置默认的各列索引defaultIndex，那么用0去填充它，数组长度为列的数量
      if (this.innerIndex.length === 0) {
        this.innerIndex = new Array(columns.length).fill(0);
      }
    },
    // 获取各列选中值对应的索引
    getIndexs() {
      return this.innerIndex;
    },
    // 获取各列选中的值
    getValues() {
      // 进行同步阻塞，因为外部得到change事件之后，可能需要执行setColumnValues更新列的值
      // 索引如果在外部change的回调中调用getValues的话，可能无法得到变更后的列值，这里进行一定延时，保证值的准确性
      (async () => {
        await sleep();
      })();
      return this.innerColumns.map((item, index) => item[this.innerIndex[index]]);
    },
  },

};
</script>
<style lang="scss" scoped>
// @import "../../libs/css/components.scss";
// 通过scss的mixin功能，把原来需要写4行的css，变成一行
// 目的是保持代码干净整洁，不至于在nvue下，到处都要写display:flex的条件编译
@mixin flex($direction: row) {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: $direction;
}

/* #ifndef APP-NVUE */
// 由于uView是基于nvue环境进行开发的，此环境中普通元素默认为flex-direction: column;
// 所以在非nvue中，需要对元素进行重置为flex-direction: column; 否则可能会表现异常
view,
scroll-view,
swiper-item {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: auto;
  align-items: stretch;
  align-content: flex-start;
}
/* #endif */

.u-picker {
  position: relative;

  &__view {
    &__column {
      @include flex;
      flex: 1;
      justify-content: center;

      &__item {
        @include flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        text-align: center;
        /* #ifndef APP-NVUE */
        display: block;
        /* #endif */
        color: $uni-text-color;

        &--disabled {
          /* #ifndef APP-NVUE */
          cursor: not-allowed;
          /* #endif */
          opacity: 0.35;
        }
      }
    }
  }

  &--loading {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    @include flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.87);
    z-index: 1000;
  }
}
</style>
