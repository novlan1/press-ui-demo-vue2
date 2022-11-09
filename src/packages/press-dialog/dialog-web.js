import Vue from 'vue';
import VueDialog from './press-dialog.vue';


let instance;

function isInDocument(element) {
  return document.body.contains(element);
}

function initInstance() {
  if (instance) {
    instance.$destroy();
  }

  const dialogId = 'tip-dialog-showCommTipsDialog';
  const oldDialog = document.getElementById(dialogId);
  if (oldDialog) {
    document.body.removeChild(oldDialog);
  }
  const dialogRootDiv = document.createElement('div');
  dialogRootDiv.id = dialogId;

  document.body.appendChild(dialogRootDiv);

  instance = new (Vue.extend(VueDialog))({
    el: dialogRootDiv,
  });
}

function Dialog(options) {
  if (!instance || !isInDocument(instance.$el)) {
    initInstance();
  }

  Object.assign(instance, Dialog.currentOptions, options);
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


Dialog.install = () => {
  Vue.use(VueDialog);
};

Dialog.Component = VueDialog;

export default Dialog;
