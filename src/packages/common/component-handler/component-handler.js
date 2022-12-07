import { isObj } from '../validator';

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}


export function formatPropKey(key) {
  return key.replace(/^(\w)/, (a, b) => `data${b.toUpperCase()}`);
}

export function getPropsWatch(props) {
  const watchProps = Object.keys(props).reduce((acc, item) => {
    acc[item] = {
      handler(val) {
        this[formatPropKey(item)] = val;
      },
    };
    return acc;
  }, {});
  return watchProps;
}


export function getPropsData(context, props) {
  const propsData = Object.keys(props).reduce((acc, item) => {
    acc[formatPropKey(item)] = context[item];
    return acc;
  }, {});
  return propsData;
}


export function setPropsToData(data) {
  Object.keys(data).forEach((key) => {
    this[formatPropKey(key)] = data[key];
  });
}


export function parseOptions(message, defaultKey) {
  return isObj(message) ? message : { [defaultKey]: message };
}

export function getMPComponentHandler({
  defaultOptions,
  name = 'van-toast',
  defaultKey = 'message',
}) {
  let queue = [];
  let currentOptions = { ...defaultOptions };

  function CompHandler(toastOptions) {
    const options = {
      ...currentOptions,
      ...parseOptions(toastOptions, defaultKey),
    };

    const context = options.context || getContext();
    const dialog = context.selectComponent(options.selector);

    if (!dialog) {
      console.warn(`未找到 ${name} 节点，请确认 selector 及 context 是否正确`);
      return;
    }

    delete options.context;
    delete options.selector;

    // 设置clear
    dialog.clear = () => {
      dialog.$vm.setData({ show: false });
      if (options.onClose) {
        options.onClose();
      }
    };

    // 为了让h5和小程序的函数调用一样
    dialog.set = (...args) => {
      dialog.$vm.$set(dialog.$vm, ...args);
    };

    queue.push(dialog);
    // 开始展示
    dialog.$vm.setData(options);

    clearTimeout(dialog.timer);

    if (options.duration != null && options.duration > 0) {
      dialog.timer = setTimeout(() => {
        dialog.clear();
        queue = queue.filter(item => item !== dialog);
      }, options.duration);
    }
    return dialog;
  }


  CompHandler.clear = () => {
    queue.forEach((dialog) => {
      dialog.clear();
    });
    queue = [];
  };
  CompHandler.setDefaultOptions = (options) => {
    Object.assign(currentOptions, options);
  };
  CompHandler.resetDefaultOptions = () => {
    currentOptions = { ...defaultOptions };
  };

  return CompHandler;
}
