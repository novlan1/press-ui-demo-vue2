// @ts-nocheck
import { requestAnimationFrame } from '../common/utils';
import { isObj } from '../common/validator';
const getClassNames = (name, _this) => {
  const {
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
  } = _this;

  return {
    enter: `van-${name}-enter van-${name}-enter-active ${enterClass} ${enterActiveClass}`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active ${enterToClass} ${enterActiveClass}`,
    leave: `van-${name}-leave van-${name}-leave-active ${leaveClass} ${leaveActiveClass}`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active ${leaveToClass} ${leaveActiveClass}`,
  };
};
export function transition(showDefaultValue) {
  return {
    props: {
      customStyle: String,
      show: {
        type: Boolean,
        default: showDefaultValue,
      },
      duration: {
        type: [Number, Object, null],
        default: 300,
      },
      name: {
        type: String,
        default: 'fade',
      },
    },
    data() {
      return {
        type: '',
        inited: false,
        display: false,

        dataName: this.name,
      };
    },
    watch: {
      show: {
        handler(...args) {
          this.observeShow(...args);
        },
      },
      name: {
        handler(val) {
          this.dataName = val;
        },
      },
      // duration: {
      // handler(...args) {
      //   this.observeDuration(...args);
      // },
      // },
    },
    mounted() {
      if (this.show === true) {
        this.observeShow(true, false);
      }
    },
    methods: {
      observeShow(value, old) {
        if (value === old) {
          return;
        }
        value ? this.enter() : this.leave();
      },
      enter() {
        const { duration, dataName } = this;
        const classNames = getClassNames(dataName, this);
        const currentDuration = isObj(duration) ? duration.enter : duration;
        this.status = 'enter';
        this.$emit('before-enter');

        requestAnimationFrame(() => {
          if (this.status !== 'enter') {
            return;
          }
          this.$emit('enter');

          this.setData({
            inited: true,
            display: true,
            classes: classNames.enter,
            currentDuration,
          });

          requestAnimationFrame(() => {
            if (this.status !== 'enter') {
              return;
            }
            this.transitionEnded = false;
            this.setData({ classes: classNames['enter-to'] });
          });
        });
      },
      leave() {
        if (!this.display) {
          return;
        }
        const { duration, dataName } = this;
        const classNames = getClassNames(dataName, this);
        const currentDuration = isObj(duration) ? duration.leave : duration;
        this.status = 'leave';
        this.$emit('before-leave');

        requestAnimationFrame(() => {
          if (this.status !== 'leave') {
            return;
          }
          this.$emit('leave');
          this.setData({
            classes: classNames.leave,
            currentDuration,
          });
          requestAnimationFrame(() => {
            if (this.status !== 'leave') {
              return;
            }
            this.transitionEnded = false;
            setTimeout(() => this.onTransitionEnd(), currentDuration);
            this.setData({ classes: classNames['leave-to'] });
          });
        });
      },
      onTransitionEnd() {
        if (this.transitionEnded) {
          return;
        }
        this.transitionEnded = true;
        this.$emit(`after-${this.status}`);
        const { show, display } = this;
        if (!show && display) {
          this.setData({ display: false });
        }
      },
    },
  };
}
