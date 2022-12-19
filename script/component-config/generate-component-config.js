const fs = require('fs');
const path = require('path');

const COMP_TYPE_MAP = require('./component-config.json');
const DOC_SIDE_BAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';
const DEMO_INDEX_CONFIG_PATH = 'src/pages/index/page-config.json';
const DEMO_PAGES_JSON_PATH = './src/pages.json';
const DEMO_PAGES_JSON_LAST_INDEX = 0;


function hyphenate(str) {
  const hyphenateRE = /\B([A-Z])/g;
  return str.replace(hyphenateRE, '-$1').toLowerCase();
}

function getCompUrl(name) {
  const newName = hyphenate(name);
  return `/press/${newName}/${newName}`;
}


function getCompDemoPages() {
  const list = Object.keys(COMP_TYPE_MAP)
    .map((key) => {
      const value = COMP_TYPE_MAP[key];
      const { title, list } = value;
      const newList = list.map(item => ({
        name: `${item.name} ${item.title}`,
        url: getCompUrl(item.name),
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
        title: item.title,
        subTitle: item.name,
        path: `/components/press/press-${hyphenate(item.name)}.md`,
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
        const hyphenatedName = hyphenate(item.name);

        return {
          root: `pages/press/${hyphenatedName}`,
          pages: [
            {
              path: hyphenatedName,
              style: {
                navigationBarTitleText: `${item.name} ${item.title}`,
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
    json.subPackages[DEMO_PAGES_JSON_LAST_INDEX],
    ...pagesJsonConfig,
  ];
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
