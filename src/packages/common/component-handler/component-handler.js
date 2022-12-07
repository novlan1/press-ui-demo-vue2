import Vue from 'vue';
import { isObj } from '../validator';
import { isServer } from '../index';

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function isInDocument(element) {
  return document.body.contains(element);
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


export function parseOptions(message, defaultKey = 'message') {
  return isObj(message) ? message : { [defaultKey]: message };
}

export function getMPComponentHandler({
  defaultOptions,
  name = 'van-toast',
  defaultKey = 'message',
}) {
  let queue = [];
  let currentOptions = { ...defaultOptions };
  let defaultOptionsMap = {};

  function CompHandler(toastOptions) {
    let options = parseOptions(toastOptions, defaultKey);

    options = {
      ...currentOptions,
      ...defaultOptionsMap[options.type || currentOptions.type],
      ...options,
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
  CompHandler.setDefaultOptions = (type, options) => {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = options;
    } else {
      Object.assign(currentOptions, type);
    }
  };
  CompHandler.resetDefaultOptions = (type) => {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = null;
    } else {
      currentOptions = { ...defaultOptions };
      defaultOptionsMap = {};
    }
  };

  return CompHandler;
}


export function getH5ComponentHandler({
  defaultOptions,
  component,
}) {
  let defaultOptionsMap = {};

  let queue = [];
  let multiple = false;
  let currentOptions = {
    ...defaultOptions,
  };
  const dialogId = defaultOptions.selector?.slice(1) || 'component-default-id';

  function createInstance({
    multiple,
    component,
    dialogId,
  }) {
    if (isServer) {
      return {};
    }
    queue = queue.filter(item => !item.$el.parentNode || isInDocument(item.$el));

    if (!queue.length || multiple) {
      // const dialogId = 'van-toast';
      const oldDialog = document.getElementById(dialogId);
      if (oldDialog) {
        document.body.removeChild(oldDialog);
      }
      const dialogRootDiv = document.createElement('div');
      dialogRootDiv.id = dialogId;

      document.body.appendChild(dialogRootDiv);

      const dialog = new (Vue.extend(component))({
        el: dialogRootDiv,
      });

      dialog.$on('input', (value) => {
        dialog.value = value;
      });

      queue.push(dialog);
    }

    return queue[queue.length - 1];
  }

  function Dialog(options = {}) {
    const dialog = createInstance({
      multiple,
      component,
      dialogId,
    });

    options = parseOptions(options);
    options = {
      ...currentOptions,
      ...defaultOptionsMap[options.type || currentOptions.type],
      ...options,
    };

    dialog.clear = () => {
      dialog.setData({ show: false });
      if (options.onClose) {
        options.onClose();
      }
      queue = queue.filter(item => item !== dialog);

      setTimeout(() => {
        if (document.body.contains(dialog.$el)) {
          document.body.removeChild(dialog.$el);
        }
      }, options.animationDuration || 0);
    };

    dialog.set = (...args) => {
      dialog.$set(dialog, ...args);
    };

    Object.assign(dialog, options);
    clearTimeout(dialog.timer);
    dialog.setData({ show: true });

    if (options.duration > 0) {
      dialog.timer = setTimeout(() => {
        dialog.clear();
      }, options.duration);
    }

    return dialog;
  }

  Dialog.clear = (all) => {
    if (queue.length) {
      if (all) {
        queue.forEach((dialog) => {
          dialog.clear();
        });
        queue = [];
      } else if (!multiple) {
        queue[0].clear();
      } else {
        queue.shift().clear();
      }
    }
  };

  Dialog.setDefaultOptions = (type, options) => {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = options;
    } else {
      Object.assign(currentOptions, type);
    }
  };

  Dialog.resetDefaultOptions = (type) => {
    if (typeof type === 'string') {
      defaultOptionsMap[type] = null;
    } else {
      currentOptions = { ...defaultOptions };
      defaultOptionsMap = {};
    }
  };

  Dialog.allowMultiple = (value = true) => {
    multiple = value;
  };

  Dialog.install = () => {
    Vue.use(component);
  };

  return Dialog;
}
