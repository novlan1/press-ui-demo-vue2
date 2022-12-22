import { getRect, requestAnimationFrame } from '../common/utils';


function getAnimation({ height, duration }) {
  return [
    `height: ${height};`,
    `transition: height ${duration}ms ease-in-out 0ms, top ${duration}ms ease-in-out 0ms, -webkit-transform ${duration}ms ease-in-out 0ms, transform ${duration}ms ease-in-out 0ms;`,
    'transform-origin: 50% 50% 0px;',
  ].join('');
}

function useAnimation(context, expanded, mounted, height) {
  const animation = uni.createAnimation({
    duration: 0,
    timingFunction: 'ease-in-out',
  });
  if (expanded) {
    if (height === 0) {
      const duration = 0;
      context.animationStyle = getAnimation({ height: 'auto', duration });
      // animation.height('auto').top(1)
      //   .step();
    } else {
      // animation
      //   .height(height)
      //   .top(1)
      //   .step({
      //     duration: mounted ? 300 : 1,
      //   })
      //   .height('auto')
      //   .step();
      const duration = mounted ? 300 : 1;
      context.animationStyle = getAnimation({ height: `${height}px`, duration });

      setTimeout(() => {
        context.animationStyle = getAnimation({ height: 'auto', duration: 0 });
      }, duration);
    }

    // context.animation = animation.export();
    return;
  }

  const duration = 1;
  context.animationStyle = getAnimation({ height: `${height}px`, duration  });

  requestAnimationFrame(() => {
    context.animationStyle = getAnimation({ height: 0, duration: 300 });
  });

  // animation.height(height).top(0)
  //   .step({ duration: 1 })
  //   .height(0)
  //   .step({
  //     duration: 300,
  //   });
  console.log('animation', animation);
  // context.animation = animation.export();
}
export function setContentAnimate(context, expanded, mounted) {
  getRect(context, '.van-collapse-item__content')
    .then(rect => rect.height)
    .then((height) => {
      console.log('setContentAnimate', expanded, mounted, height);
      useAnimation(context, expanded, mounted, height);
    });
}
