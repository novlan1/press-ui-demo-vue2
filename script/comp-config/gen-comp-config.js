const fs = require('fs');
const { COMP_TYPE_MAP, COMP_TITLE_MAP } = require('./comp-config');
const DOC_SIDE_BAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';
const DEMO_PAGES_CONFIG_PATH = 'src/pages/index/page-config.json';

// function parseCompList(compList) {
//   const res = Object.keys(COMP_TYPE_MAP)
//     .map((type) => {
//       const { title, list } = COMP_TYPE_MAP[type];
//       return {
//         list: findTwoListIntersection(list, compList),
//         title,
//       };
//     })
//     .filter(item => !!item.list.length);
//   return res;
// }

// function findTwoListIntersection(listA, listB) {
//   return listB.filter(item => listA.indexOf(item.name) > -1).sort((a, b) => {
//     if (a.name > b.name) return 1;
//     if (b.name > a.name) return -1;
//     return 0;
//   });
// }

function getCompUrl(name) {
  const newName = hyphenate(name);
  return `/press/${newName}/${newName}`;
}

function hyphenate(str) {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

function getCompDemoPages() {
  const list = Object.keys(COMP_TYPE_MAP)
    .map((key) => {
      const value = COMP_TYPE_MAP[key];
      const { title, list } = value;
      const newList = list.map(item => ({
        name: `${item} ${COMP_TITLE_MAP[item] && COMP_TITLE_MAP[item].title}`,
        url: getCompUrl(item),
      }));

      return {
        title,
        list: newList,
      };
    })
    .filter(item => item.list.length);


  return { pages: list };
}


function getSidebarConfig() {
  const list = Object.keys(COMP_TYPE_MAP)
    .map((key) => {
      const value = COMP_TYPE_MAP[key];
      const { title, list } = value;
      const newList = list.map(item => ({
        title: COMP_TITLE_MAP[item] && COMP_TITLE_MAP[item].title,
        subTitle: item,
        path: `/components/press/press-${hyphenate(item)}.md`,
      }));

      return {
        title,
        collapsable: false,
        children: newList,
      };
    })
    .filter(item => item.children.length);

  return { sidebar: list };
}

function writeDemoPages() {
  const pages = getCompDemoPages();
  fs.writeFileSync(DEMO_PAGES_CONFIG_PATH, JSON.stringify(pages, null, 2), {
    encoding: 'utf-8',
  });
}

function writeDocSidebar() {
  const sidebarConfig = getSidebarConfig();
  fs.writeFileSync(DOC_SIDE_BAR_CONFIG_PATH, JSON.stringify(sidebarConfig, null, 2), {
    encoding: 'utf-8',
  });
}


function main() {
  writeDemoPages();
  writeDocSidebar();
}

main();
