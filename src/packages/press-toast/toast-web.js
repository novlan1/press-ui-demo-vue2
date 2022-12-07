import Vue from 'vue';
import VueToast from './press-toast';
import { DEFAULT_OPTIONS, DEFAULT_KEY } from './default-options';
import { getH5ComponentHandler, parseOptions } from '../common/component-handler/component-handler';


const Toast = getH5ComponentHandler({
  defaultOptions: DEFAULT_OPTIONS,
  component: VueToast,
});

const createMethod = type => options => Toast({
  type,
  ...parseOptions(options, DEFAULT_KEY),
});

['loading', 'success', 'fail'].forEach((method) => {
  Toast[method] = createMethod(method);
});

Vue.prototype.$toast = Toast;

export default Toast;
