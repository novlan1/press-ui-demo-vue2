import { getCurrentPage } from '../common/utils';
import { isDef } from '../common/utils/validator';

function onPageScroll(event) {
  const { vanPageScroller = [] } = getCurrentPage();
  vanPageScroller.forEach((scroller) => {
    if (typeof scroller === 'function') {
      scroller(event);
    }
  });
}


export const pageScrollMixin = scroller => ({
  created() {
    const page = getCurrentPage();
    if (!isDef(page)) {
      return;
    }
    if (Array.isArray(page.vanPageScroller)) {
      page.vanPageScroller.push(scroller.bind(this));
    } else {
      page.vanPageScroller =  typeof page.onPageScroll === 'function'
        ? [page.onPageScroll.bind(page), scroller.bind(this)]
        : [scroller.bind(this)];
    }
    page.onPageScroll = onPageScroll;
  },
  destroy() {
    const page = getCurrentPage();
    if (isDef(page)) {
      page.vanPageScroller = page.vanPageScroller?.filter(item => item !== scroller) || [];
    }
  },
});
