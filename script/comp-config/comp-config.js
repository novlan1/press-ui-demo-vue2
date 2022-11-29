const COMP_TITLE_MAP = {
  Button: {
    title: '按钮',
  },
  Icon: {
    title: '图标',
  },
  Popup: {
    title: '弹出层',
  },
  Toast: {
    title: '轻提示',
  },
  Transition: {
    title: '动画',
  },
  Checkbox: {
    title: '复选框',
  },
  DatetimePicker: {
    title: '时间选择',
  },
  Picker: {
    title: '选择器',
  },
  PickerPlus: {
    title: '选择器',
  },
  Switch: {
    title: '切换',
  },
  Dialog: {
    title: '弹出框',
  },
  Loading: {
    title: '加载中',
  },
  LoadingPlus: {
    title: '加载中',
  },
  Overlay: {
    title: '遮罩层',
  },
  SwipeCell: {
    title: '滑动单元格',
  },
  Sticky: {
    title: '粘性布局',
  },
  Tab: {
    title: '标签页',
  },
};

const COMP_TYPE_MAP = {
  base: {
    title: '基础组件',
    list: [
      'Button',
      // 'Cell',
      'Icon',
      // 'Image',
      'Popup',
      'Toast',
      'Transition',
    ],
  },
  form: {
    title: '表单组件',
    list: [
      'Checkbox',
      'DatetimePicker',
      'Picker',
      'PickerPlus',
      'Switch',
    ],
  },
  feedback: {
    title: '反馈组件',
    list: [
      'Dialog',
      'Loading',
      'LoadingPlus',
      'Overlay',
      'SwipeCell',
    ],
  },
  show: {
    title: '展示组件',
    list: [
      'Sticky',
    ],
  },
  nav: {
    title: '导航组件',
    list: [
      'Tab',
    ],
  },
  work: {
    title: '业务组件',
    list: [
    ],
  },
};


module.exports = {
  COMP_TYPE_MAP,
  COMP_TITLE_MAP,
};
