import { MorsePwd } from './morse-password';

export const morsePwdMixin = (pwd, cb) => ({
  data() {
    return {
      morsePwd: null,
    };
  },
  mounted() {
    const envType = 'MP';

    this.morsePwd = MorsePwd.init({
      pwd,
      cb: () => {
        if (typeof cb === 'function') {
          cb();
        }
      },
      envType,
    });
  },
  beforeDestroy() {
    this.morsePwd.clear();
  },
  methods: {
    onMorsePwdLongPress() {
      this.morsePwd.longPress();
    },
    onMorsePwdClick() {
      this.morsePwd.click();
    },
  },
});
