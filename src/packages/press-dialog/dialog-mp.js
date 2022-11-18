let instance;

function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function Dialog() {
  instance = getContext().selectComponent('#tip-match-comm-tips-dialog');

  instance = instance.$vm;
}

Dialog.defaultOptions = {
  show: true,
  title: '温馨提示',
  content: '',
  src: '',
  confirmText: '确认',
  cancelText: '取消',
};

Dialog.setDefaultOptions = (options) => {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions };
};

Dialog.resetDefaultOptions();

Dialog.show = (options) => {
  Dialog({
    ...options,
  });
  return instance.showDialog(options).then((val) => {
    instance = null;
    return Promise.resolve(val);
  })
    .catch((err) => {
      instance = null;
      return Promise.reject(err);
    });
};

Dialog.remove = () => {
  instance.remove();
};

export default Dialog;
