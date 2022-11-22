import { COMP_TYPE_MAP } from './comp-type.config';

export function parseCompList(compList) {
  const res = Object.keys(COMP_TYPE_MAP)
    .map((type) => {
      const { title, list } = COMP_TYPE_MAP[type];
      return {
        list: findTwoListIntersection(list, compList),
        title,
      };
    })
    .filter(item => !!item.list.length);
  return res;
}

export function findTwoListIntersection(listA, listB) {
  return listB.filter(item => listA.indexOf(item.name) > -1).sort((a, b) => {
    if (a.name > b.name) return 1;
    if (b.name > a.name) return -1;
    return 0;
  });
}


