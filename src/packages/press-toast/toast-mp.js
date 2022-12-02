import { isObj } from '../common/validator';
import { DEFAULT_OPTIONS } from './default-options';


let queue = [];
let currentOptions = Object.assign({}, DEFAULT_OPTIONS);
function parseOptions(message) {
  return isObj(message) ? message : { message };
}
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}
function Toast(toastOptions) {
  const options = Object.assign(Object.assign({}, currentOptions), parseOptions(toastOptions));
  const context = options.context || getContext();
  const toast = context.selectComponent(options.selector);
  if (!toast) {
    console.warn('未找到 van-toast 节点，请确认 selector 及 context 是否正确');
    return;
  }
  delete options.context;
  delete options.selector;
  toast.clear = () => {
    toast.$vm.setData({ show: false });
    if (options.onClose) {
      options.onClose();
    }
  };

  // 为了让h5和小程序的函数调用一样
  toast.set = (...args) => {
    toast.$vm.$set(toast.$vm, ...args);
  };

  queue.push(toast);
  toast.$vm.setData(options);

  // Object.assign(toast, options);
  clearTimeout(toast.timer);

  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
      queue = queue.filter(item => item !== toast);
    }, options.duration);
  }
  return toast;
}
const createMethod = type => options => Toast(Object.assign({ type }, parseOptions(options)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');
Toast.clear = () => {
  queue.forEach((toast) => {
    toast.clear();
  });
  queue = [];
};
Toast.setDefaultOptions = (options) => {
  Object.assign(currentOptions, options);
};
Toast.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, DEFAULT_OPTIONS);
};
export default Toast;
