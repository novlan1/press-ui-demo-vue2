import Vue from 'vue';
import { t } from '../locale';
// #ifdef H5
import VueDialog from './press-dialog.vue';
// #endif

let queue = [];
const defaultOptions = {
  // show: false,
  title: t('dialog.title'),
  content: '',
  src: '',
  confirmText: t('confirm'),
  cancelText: t('cancel'),
  selector: '#tip-match-comm-tips-dialog',
};

let currentOptions = Object.assign({}, defaultOptions);
function getContext() {
  const pages = getCurrentPages();
  return pages[pages.length - 1];
}

function initInstance() {
  const dialogId = 'tip-dialog-showCommTipsDialog';
  const oldDialog = document.getElementById(dialogId);
  if (oldDialog) {
    oldDialog.parentNode.removeChild(oldDialog);
  }
  const dialogRootDiv = document.createElement('div');
  dialogRootDiv.id = dialogId;

  document.body.appendChild(dialogRootDiv);

  const instance = new (Vue.extend(VueDialog))({
    el: dialogRootDiv,
  });
  return instance;
}

const Dialog = (options) => {
  options = Object.assign(Object.assign({}, currentOptions), options);
  const context = options.context || getContext();
  let dialog = context.selectComponent(options.selector);
  delete options.context;
  delete options.selector;


  // #ifdef H5
  if (!dialog) {
    dialog = initInstance();
  }
  // #endif

  if (dialog) {
    // dialog.callback = (action, instance) => {
    //   action === 'confirm' ? resolve(instance) : reject(instance);
    // };
    const newOptions = {
      ...options,
    };

    console.log('dialog', dialog);

    // #ifdef H5
    dialog.setData(newOptions);
    // #endif
    // #ifndef H5
    dialog.$vm.setData(newOptions);
    // #endif
    // dialog.setData(newOptions);


    // Vue.nextTick(() => {
    //   // #ifdef H5
    //   dialog.setData({ dialogIsShow: true });
    //   // #endif
    //   // #ifndef H5
    //   dialog.$vm.setData({ dialogIsShow: true });
    //   // #endif
    //   // dialog.innerShow = true;
    //   // dialog.setData({ show: true });
    // });
    let promise;
    // #ifdef H5
    promise = dialog.showDialog(options);
    // #endif

    // #ifndef H5
    promise = dialog.$vm.showDialog(options);
    // #endif
    return promise.then(val =>
    // instance = null;
      Promise.resolve(val))
      .catch(err =>
      // instance = null;
        Promise.reject(err));

    // queue.push(dialog);
  }
  console.warn('The van-dialog node is not found, please confirm whether the selector and context are correct');
};
Dialog.alert = options => Dialog(options);
Dialog.show = options => Dialog(options);
Dialog.confirm = options => Dialog(Object.assign({ showCancelButton: true }, options));
Dialog.close = () => {
  queue.forEach((dialog) => {
    dialog.close();
  });
  queue = [];
};
Dialog.stopLoading = () => {
  queue.forEach((dialog) => {
    dialog.stopLoading();
  });
};
Dialog.currentOptions = currentOptions;
Dialog.defaultOptions = defaultOptions;
Dialog.setDefaultOptions = (options) => {
  currentOptions = Object.assign(Object.assign({}, currentOptions), options);
  Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions = () => {
  currentOptions = Object.assign({}, defaultOptions);
  Dialog.currentOptions = currentOptions;
};
Dialog.resetDefaultOptions();
export default Dialog;
