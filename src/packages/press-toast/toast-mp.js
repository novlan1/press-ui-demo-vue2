import { DEFAULT_OPTIONS, DEFAULT_KEY } from './default-options';
import { getMPComponentHandler, parseOptions } from '../common/component-handler/component-handler';


const Toast = getMPComponentHandler({
  defaultOptions: DEFAULT_OPTIONS,
  name: 'van-toast',
});

const createMethod = type => options => Toast(Object.assign({ type }, parseOptions(options, DEFAULT_KEY)));
Toast.loading = createMethod('loading');
Toast.success = createMethod('success');
Toast.fail = createMethod('fail');

export default Toast;
