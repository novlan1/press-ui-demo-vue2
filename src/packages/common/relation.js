export function useParent(name, onEffect) {
  const path = `../${name}/index`;
  return {
    relations: {
      [path]: {
        type: 'ancestor',
        linked() {
          onEffect && onEffect.call(this);
        },
        linkChanged() {
          onEffect && onEffect.call(this);
        },
        unlinked() {
          onEffect && onEffect.call(this);
        },
      },
    },
    mixin: {
      created() {
        // Object.defineProperty(this, 'parent', {
        //   get: () => this.getRelationNodes(path)[0],
        // });
        // Object.defineProperty(this, 'index', {
        //   get: () => this.parent?.children?.indexOf(this),
        // });
      },
    },
  };
}
export function useChildren(name, onEffect) {
  const path = `../${name}/index`;
  return {
    relations: {
      [path]: {
        type: 'descendant',
        linked(target) {
          onEffect && onEffect.call(this, target);
        },
        linkChanged(target) {
          onEffect && onEffect.call(this, target);
        },
        unlinked(target) {
          onEffect && onEffect.call(this, target);
        },
      },
    },
    mixin: {
      created() {
        // Object.defineProperty(this, 'children', {
        //   get: () => this.getRelationNodes(path) || [],
        // });
      },
    },
  };
}
