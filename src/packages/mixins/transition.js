// @ts-nocheck
import { requestAnimationFrame } from '../common/utils';
import { isObj } from '../common/validator';
const getClassNames = name => ({
  enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
  leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
});
export function transition(showDefaultValue) {
  return {
    props: {
      customStyle: String,
      show: {
        type: Boolean,
        default: showDefaultValue,
        // observer: 'observeShow',
      },
      // @ts-ignore
      duration: {
        type: null,
        default: 300,
        // observer: 'observeDuration',
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
      };
    },
    watch: {
      show: {
        handler(...args) {
          this.observeShow(...args);
        },
      },
      duration: {
        handler(...args) {
          this.observeDuration(...args);
        },
      },
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
        const { duration, name } = this;
        const classNames = getClassNames(name);
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
        const { duration, name } = this;
        const classNames = getClassNames(name);
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