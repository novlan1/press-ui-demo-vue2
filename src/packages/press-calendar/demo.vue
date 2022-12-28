<template>
  <div class="demo-wrap">
    <demo-block title="基础用法">
      <press-cell
        title="选择单个日期"
        is-link
        :value="singleValue"
        @click="onDisplay('single')"
      />
      <press-cell
        title="选择多个日期"
        is-link
        :value="multipleValue"
        @click="onDisplay('multiple')"
      />
      <press-cell
        title="选择日期区间"
        is-link
        :value="rangeValue"
        @click="onDisplay('range')"
      />
    </demo-block>

    <demo-block title="快捷选择">
      <press-cell
        title="选择单个日期"
        is-link
        :value="singleValue"
        @click="onDisplay('single', false)"
      />

      <press-cell
        title="选择日期区间"
        is-link
        :value="rangeValue"
        @click="onDisplay('range', false)"
      />
    </demo-block>

    <demo-block title="自定义日历">
      <press-cell
        title="自定义颜色"
        is-link
        :value="singleValue"
        @click="onDisplay('single', true, {
          color: '#07c160'
        })"
      />
      <press-cell
        title="自定义日期范围"
        is-link
        :value="singleValue"
        @click="onDisplay('single', true, {
          minDate: new Date(2010, 0, 1).getTime(),
          maxDate: new Date(2010, 0, 31).getTime(),
        })"
      />
      <press-cell
        title="自定义按钮文字"
        is-link
        :value="rangeValue"
        @click="onDisplay('range', true, {
          confirmText: '完成',
          confirmDisabledText: '请选择结束时间',
        })"
      />
      <press-cell
        title="自定义日期文案"
        is-link
        :value="rangeValue"
        @click="onDisplay('range', true, {
          formatter: 'tFormatter',
        })"
      />
      <press-cell
        title="自定义弹出位置"
        is-link
        :value="singleValue"
        @click="onDisplay('single', true, {
          position: 'right'
        })"
      />
      <press-cell
        title="日期区间最大范围"
        is-link
        :value="rangeValue"
        @click="onDisplay('range', true, {
          maxRange: 3
        })"
      />
      <press-cell
        title="自定义周起始日"
        is-link
        :value="singleValue"
        @click="onDisplay('single', true, {
          firstDayOfWeek: 1,
        })"
      />
    </demo-block>

    <press-calendar
      v-if="ifShow"
      :show="show"
      :type="type"
      :show-confirm="showConfirm"
      :color="color"
      :min-date="minDate"
      :max-date="maxDate"
      :confirm-text="confirmText"
      :confirm-disabled-text="confirmDisabledText"
      :formatter="useFormatter ? tFormatter : null"
      :position="position"
      :max-range="maxRange"
      :first-day-of-week="firstDayOfWeek"
      @close="onClose"
      @confirm="onConfirm"
    />

    <demo-block :title="t('TiledDisplay')">
      <press-calendar
        :poppable="false"
        :show-confirm="false"
        class="calendar"
      />
    </demo-block>
  </div>
</template>
<script>
import PressCalendar from 'src/packages/press-calendar/press-calendar.vue';
import PressCell from 'src/packages/press-cell/press-cell.vue';
import { initialMinDate, initialMaxDate } from 'src/packages/press-calendar/utils';
import { t } from 'src/packages/locale';

const DEFAULT_DATA = {
  color: '',
  minDate: initialMinDate,
  maxDate: initialMaxDate,
  confirmText: t('calendar.confirm'),
  confirmDisabledText: t('calendar.confirm'),
  useFormatter: false,
  position: 'bottom',
  maxRange: null,
  firstDayOfWeek: 0,
};

function tFormatter(day) {
  const month = day.date.getMonth() + 1;
  const date = day.date.getDate();

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节';
    } else if (date === 4) {
      day.topInfo = '五四青年节';
    } else if (date === 11) {
      day.text = '今天';
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  }

  return day;
}
export default {
  i18n: {
    'zh-CN': {
      TiledDisplay: '平铺展示',
    },
    'en-US': {
      TiledDisplay: 'Tiled display',
    },
  },
  components: {
    PressCalendar,
    PressCell,
  },
  data() {
    return {
      show: false,
      ifShow: false,
      type: 'single',
      singleValue: '',
      multipleValue: '',
      rangeValue: '',
      showConfirm: true,

      ...DEFAULT_DATA,
    };
  },
  methods: {
    onDisplay(type, showConfirm = true, options = {}) {
      this.type = type;
      this.showConfirm = showConfirm;

      Object.keys(DEFAULT_DATA).forEach((key) => {
        this[key] = options[key] || DEFAULT_DATA[key];
      });

      this.show = true;
      this.ifShow = true;
    },
    onClose() {
      this.show = false;
      setTimeout(() => {
        this.ifShow = false;
      }, 500);
    },
    tFormatter,
    formatDate(date) {
      date = new Date(date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(result) {
      console.log('onConfirm.result', result);
      this.onClose();

      if (this.type === 'range') {
        const [start, end] = result;
        this.rangeValue = `${this.formatDate(start)} - ${this.formatDate(end)}`;
      } else if (this.type === 'multiple') {
        this.multipleValue = `选择了 ${result.length} 个日期`;
      } else if (this.type === 'single') {
        this.singleValue = this.formatDate(result);
      }
    },
  },
};
</script>
<style scoped lang="scss">
.demo-wrap {
  padding-bottom: 20px;

  .calendar {
    --calendar-height: 500px;
  }
}
</style>
