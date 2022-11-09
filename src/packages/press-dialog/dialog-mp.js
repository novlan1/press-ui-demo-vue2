let instance;

function getContext() {
  const pages = getCurrentPages();
  console.log('pages', pages);
  return pages[pages.length - 1];
}

function Dialog() {
  instance = getContext().selectComponent('#tip-match-comm-tips-dialog');
  // console.log('instance', instance, options);
  // instance.setData(options);
  // Object.keys(options).forEach((key) => {
  //   instance.$vm.$set(instance.$vm.$data, key, options[key]);
  // });
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
    // console.log('Dialog.show.resolve', val);
    instance = null;
    return Promise.resolve(val);
  })
    .catch((err) => {
      // console.log('Dialog.show.err', err);
      instance = null;
      return Promise.reject(err);
    });
};

Dialog.remove = () => {
  instance.remove();
};

export default Dialog;
