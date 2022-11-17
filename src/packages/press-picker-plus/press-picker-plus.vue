<template>
  <uni-shadow-root class="vant-picker-index">
    <view class="van-picker custom-class">
      <ToolBar
        v-if="toolbarPosition === 'top'"
        :title="title"
        :show-toolbar="showToolbar"
        :cancel-button-text="cancelButtonText"
        :confirm-button-text="confirmButtonText"
        @emit="emit"
      />

      <view
        v-if="loading"
        class="van-picker__loading"
      >
        <loading color="#1989fa" />
      </view>

      <view
        class="van-picker__columns"
        :style="columnStyle"
        @touchmove.stop.prevent="noop"
      >
        <picker-column
          v-for="(item,index) in computedColumns"
          ref="pickerColumn"
          :key="index"
          class="van-picker__column"
          :data-index="index"
          custom-class="column-class"
          :value-key="valueKey"
          :initial-options="item.values"
          :default-index="item.defaultIndex || defaultIndex"
          :item-height="itemHeight"
          :visible-item-count="visibleItemCount"
          active-class="active-class"
          @change="onChange"
        />
        <view
          class="van-picker__mask"
          :style="maskStyle"
        />
        <view
          class="van-picker__frame van-hairline--top-bottom"
          :style="frameStyle"
        />
      </view>

      <ToolBar
        v-if="toolbarPosition === 'bottom'"
      />
    </view>
  </uni-shadow-root>
</template>
<script>
import PickerColumn from '../press-picker-column/press-picker-column.vue';
import Loading from '../press-loading-icon/press-loading-icon.vue';
import ToolBar from './toolbar.vue';

import computed from './index.js';
const PARENT = 'pressPicker';

export default {
  components: {
    PickerColumn,
    Loading,
    ToolBar,
  },
  provide() {
    return {
      [PARENT]: this,
    };
  },

  classes: ['active-class', 'toolbar-class', 'column-class'],
  props: {
    title: String,
    showToolbar: Boolean,
    cancelButtonText: {
      type: String,
      default: '取消',
    },
    confirmButtonText: {
      type: String,
      default: '确认',
    },
    valueKey: {
      type: String,
      default: 'text',
    },
    visibleItemCount: {
      type: Number,
      default: 6,
    },
    itemHeight: {
      type: Number,
      default: 44,
    },
    loading: Boolean,
    toolbarPosition: {
      type: String,
      default: 'top',
    },
    defaultIndex: {
      type: Number,
      default: 0,
    },
    columns: {
      type: Array,
      default: () => [],
      // observer(columns = []) {
      //   this.simple = columns.length && !columns[0].values;
      //   if (Array.isArray(this.children) && this.children.length) {
      //     this.setColumns().catch(() => { });
      //   }
      // },
    },
  },
  data() {
    return {
      simple: true,
    };
  },
  computed: {
    columnStyle() {
      const { itemHeight, visibleItemCount } = this;
      return computed.columnsStyle({ itemHeight, visibleItemCount });
    },
    maskStyle() {
      const { itemHeight, visibleItemCount } = this;
      return computed.maskStyle({ itemHeight, visibleItemCount });
    },
    frameStyle() {
      const { itemHeight } = this;
      return computed.frameStyle({ itemHeight });
    },
    computedColumns() {
      const { columns } = this;
      return computed.columns(columns);
    },
  },
  watch: {
    columns: {
      handler(columns = []) {
        console.log('watch.columns', columns);
        this.simple = columns.length && !columns[0].values;
        // console.log('children', this.children, this.$refs);
        if (Array.isArray(this.children) && this.children.length) {
          this.setColumns().catch(() => { });
        }
      },
      immediate: true,
    },
  },
  beforeCreate() {
    // Object.defineProperty(this, 'children', {
    //   // get: () => this.selectAllComponents('.van-picker__column') || [],
    //   get: () => this.$refs.pickerColumn,
    // });
  },
  created() {
    this.children = [];
  },
  mounted() {
    if (Array.isArray(this.children) && this.children.length) {
      this.setColumns().catch(() => { });
    }
  },
  methods: {
    noop() { },
    setColumns() {
      console.log('setColumns');
      const columns = this.simple ? [{ values: this.columns }] : this.columns;
      const stack = columns.map((column, index) => this.setColumnValues(index, column.values));
      return Promise.all(stack);
    },
    emit(event) {
      const { type } = event.currentTarget.dataset;
      if (this.simple) {
        this.$emit(type, {
          value: this.getColumnValue(0),
          index: this.getColumnIndex(0),
        });
      } else {
        this.$emit(type, {
          value: this.getValues(),
          index: this.getIndexes(),
        });
      }
    },
    onChange(event) {
      console.log('event', event);
      console.log(' this.getValues()',  this.getValues());
      if (this.simple) {
        this.$emit('change', {
          // picker: this,
          value: this.getColumnValue(0),
          index: this.getColumnIndex(0),
        });
      } else {
        this.$emit('change', {
          // picker: this,
          value: this.getValues(),
          index: event, // event.currentTarget.dataset.index,
        });
      }
    },
    // get column instance by index
    getColumn(index) {
      return this.children[index];
    },
    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index);
      return column && column.getValue();
    },
    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index);
      if (column == null) {
        return Promise.reject(new Error('setColumnValue: 对应列不存在'));
      }
      return column.setValue(value);
    },
    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex;
    },
    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex);
      if (column == null) {
        return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
      }
      return column.setIndex(optionIndex);
    },
    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options;
    },
    // set options of column by index
    setColumnValues(index, options, needReset = true) {
      const column = this.children[index];
      console.log('setColumnValues', index, options, column);
      if (column == null) {
        return Promise.reject(new Error('setColumnValues: 对应列不存在'));
      }
      const isSame = JSON.stringify(column.options) === JSON.stringify(options);
      if (isSame) {
        return Promise.resolve();
      }
      return column.set({ options }).then(() => {
        if (needReset) {
          column.setIndex(0);
        }
      });
    },
    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue());
    },
    // set values of all columns
    setValues(values) {
      const stack = values.map((value, index) => this.setColumnValue(index, value));
      return Promise.all(stack);
    },
    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex);
    },
    // set indexes of all columns
    setIndexes(indexes) {
      const stack = indexes.map((optionIndex, columnIndex) => this.setColumnIndex(columnIndex, optionIndex));
      return Promise.all(stack);
    },
  },
};
</script>
<style platform="mp-weixin" lang="scss">
@import "../common/index.scss";
.van-picker {
  -webkit-text-size-adjust: 100%;
  background-color: var(--picker-background-color, #fff);
  overflow: hidden;
  position: relative;
  -webkit-user-select: none;
  user-select: none;
}

.van-picker__columns {
  display: flex;
  position: relative;
}
.van-picker__column {
  flex: 1 1;
  width: 0;
}
.van-picker__loading {
  align-items: center;
  background-color: var(--picker-loading-mask-color, hsla(0, 0%, 100%, 0.9));
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 4;
}
.van-picker__mask {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-image: linear-gradient(
      180deg,
      hsla(0, 0%, 100%, 0.9),
      hsla(0, 0%, 100%, 0.4)
    ),
    linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4));
  background-position: top, bottom;
  background-repeat: no-repeat;
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
}
.van-picker__frame,
.van-picker__mask {
  pointer-events: none;
  position: absolute;
}
.van-picker__frame {
  left: 16px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  position: absolute !important; // TODO: to delete
}
</style>
