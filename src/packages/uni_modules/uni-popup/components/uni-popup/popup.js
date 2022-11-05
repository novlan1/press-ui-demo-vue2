
export default {
  data() {
    return {

    };
  },
  created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
		 * 获取父元素实例
		 */
    getParent(name = 'UniPopup') {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        console.log('parent', parent, parentName);
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      console.log('res', parent);
      return parent;
    },
  },
};
