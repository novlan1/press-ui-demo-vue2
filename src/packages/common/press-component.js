export function PressComponent(options = {}) {
  return {
    ...options,
    options: {
      multipleSlots: true,
      addGlobalClass: true,
    },
    props: {
      ...(options.props),
      customClass: {
        type: String,
        default: '',
      },
    },
  };
}
