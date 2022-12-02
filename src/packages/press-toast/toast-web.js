import Vue from 'vue';
import VueToast from './press-toast';
import { isObject, isServer } from '../common';
// import { removeNode } from '../common/dom/node';
import { DEFAULT_OPTIONS } from './default-options';


// default options of specific type
let defaultOptionsMap = {};

let queue = [];
let multiple = false;
let currentOptions = {
  ...DEFAULT_OPTIONS,
};

function parseOptions(message) {
  if (isObject(message)) {
    return message;
  }

  return { message };
}

function isInDocument(element) {
  return document.body.contains(element);
}

function createInstance() {
  /* istanbul ignore if */
  if (isServer) {
    return {};
  }

  queue = queue.filter(item => !item.$el.parentNode || isInDocument(item.$el));

  if (!queue.length || multiple) {
    const dialogId = 'van-toast';
    const oldDialog = document.getElementById(dialogId);
    if (oldDialog) {
      document.body.removeChild(oldDialog);
    }
    const dialogRootDiv = document.createElement('div');
    dialogRootDiv.id = dialogId;

    document.body.appendChild(dialogRootDiv);


    const toast = new (Vue.extend(VueToast))({
      el: dialogRootDiv,
    });

    toast.$on('input', (value) => {
      toast.value = value;
    });

    queue.push(toast);
  }

  return queue[queue.length - 1];
}

// transform toast options to popup props
function transformOptions(options) {
  return {
    ...options,
    overlay: options.mask || options.overlay,
    mask: undefined,
    duration: undefined,
  };
}

function Toast(options = {}) {
  const toast = createInstance();

  if (toast.value) {
    toast.updateZIndex?.();
  }

  options = parseOptions(options);
  options = {
    ...currentOptions,
    ...defaultOptionsMap[options.type || currentOptions.type],
    ...options,
  };

  toast.clear = () => {
    toast.setData({ show: false });
    if (options.onClose) {
      options.onClose();
    }
    queue = queue.filter(item => item !== toast);
    if (document.body.contains(toast.$el)) {
      document.body.removeChild(toast.$el);
    }
  };

  toast.set = (...args) => {
    toast.$set(toast, ...args);
  };

  const transformedOptions = transformOptions(options);
  Object.assign(toast, transformedOptions);
  clearTimeout(toast.timer);
  toast.setData({ show: true });

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

const createMethod = type => options => Toast({
  type,
  ...parseOptions(options),
});

['loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Toast.clear = (all) => {
  if (queue.length) {
    if (all) {
      queue.forEach((toast) => {
        toast.clear();
      });
      queue = [];
    } else if (!multiple) {
      queue[0].clear();
    } else {
      queue.shift().clear();
    }
  }
};

Toast.setDefaultOptions = (type, options) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = options;
  } else {
    Object.assign(currentOptions, type);
  }
};

Toast.resetDefaultOptions = (type) => {
  if (typeof type === 'string') {
    defaultOptionsMap[type] = null;
  } else {
    currentOptions = { ...DEFAULT_OPTIONS };
    defaultOptionsMap = {};
  }
};

Toast.allowMultiple = (value = true) => {
  multiple = value;
};

Toast.install = () => {
  Vue.use(VueToast);
};

Vue.prototype.$toast = Toast;

export default Toast;
