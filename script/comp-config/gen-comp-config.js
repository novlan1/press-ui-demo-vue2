const fs = require('fs');
const path = require('path');
const { COMP_TYPE_MAP, COMP_TITLE_MAP } = require('./comp-config');
const DOC_SIDE_BAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';
const DEMO_INDEX_CONFIG_PATH = 'src/pages/index/page-config.json';
const DEMO_PAGES_JSON_PATH = './src/pages.json';

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

function getPagesJsonConfig() {
  const list = Object.keys(COMP_TYPE_MAP)
    .map((key) => {
      const value = COMP_TYPE_MAP[key];
      const { list } = value;
      const newList = list.map((item) => {
        const hyphenatedName = hyphenate(item);

        return {
          root: `pages/press/${hyphenatedName}`,
          pages: [
            {
              path: hyphenatedName,
              style: {
                navigationBarTitleText: `${item} ${COMP_TITLE_MAP[item].title}`,
              },
            },
          ],
        };
      });

      return newList;
    })
    .flat();

  return list;
}

function writeDemoIndexConfig() {
  const pages = getCompDemoPages();
  fs.writeFileSync(DEMO_INDEX_CONFIG_PATH, JSON.stringify(pages, null, 2), {
    encoding: 'utf-8',
  });
}

function writeDocSidebar() {
  const sidebarConfig = getSidebarConfig();
  fs.writeFileSync(DOC_SIDE_BAR_CONFIG_PATH, JSON.stringify(sidebarConfig, null, 2), {
    encoding: 'utf-8',
  });
}


function writeDemoPagesJson() {
  const pagesJsonConfig = getPagesJsonConfig();
  const configPath = path.resolve(process.cwd(), DEMO_PAGES_JSON_PATH);
  const json = require(configPath);
  json.subPackages = [
    json.subPackages[0],
    ...pagesJsonConfig,
  ];
  console.log('json', json);
  fs.writeFileSync(configPath, JSON.stringify(json, null, 2), {
    encoding: 'utf-8',
  });
}

function main() {
  writeDemoIndexConfig();
  writeDocSidebar();
  writeDemoPagesJson();
}

main();
