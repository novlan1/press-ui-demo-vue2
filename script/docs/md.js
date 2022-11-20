const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

const COMPONENT_DIR = './src/packages';
const LOCAL_DOC_NAME = 'README.md';
const DOC_PATH = './docs/components/press';
const DOC_PREFIX = '/components/press/';
const SIDEBAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';

/**
 * 获取组件文件夹
 */
function getComps() {
  const dirs = fs.readdirSync(COMPONENT_DIR);
  // console.log('dirs', dirs);

  const comps = dirs
    .filter((dir) => {
      const vuePath = path.resolve(COMPONENT_DIR, dir, `${dir}.vue`);
      // console.log('vuePath', vuePath);
      return fs.existsSync(vuePath);
    })
    .map(dir => ({
      path: path.resolve(COMPONENT_DIR, dir),
      name: dir,
    }));
  // console.log('comps', comps);
  return comps;
}

/**
 * 解析文档配置
 */
function getDocConfig(md = '', name) {
  const reg = /^\s*---([\s\S]+?)---/m;
  const match = md.match(reg);
  // console.log('match', match[1]);

  if (match && match[1]) {
    const props = match[1]
      .split('\n')
      .filter(item => item)
      .reduce((acc, item) => {
        const list = item.split(':');
        const key = list[0].trim();
        const value = list[1].trim();
        acc[key] = value;
        return acc;
      }, {});

    if (!props.title || !props.subTitle) {
      return;
    }

    return {
      title: props.title,
      subTitle: props.subTitle,
      path: `${DOC_PREFIX}${name}.md`,
    };
  }
}

/**
 * 获取组件附近的文档列表
 */
function getLocalDocs(comps) {
  const docs = comps
    .filter((comp) => {
      const { path: dir } = comp;
      const readmePath = path.resolve(dir, LOCAL_DOC_NAME);
      return fs.existsSync(readmePath);
    })
    .map((comp) => {
      const { path: dir } = comp;
      return {
        ...comp,
        path: path.resolve(dir, LOCAL_DOC_NAME),
      };
    });
  return docs;
}

/**
 * 移动文档
 */
function mvDocs() {
  const comps = getComps();
  const docs = getLocalDocs(comps);
  const docConfig = [];
  // console.log('docs', docs);

  for (const doc of docs) {
    const { path: dir, name } = doc;
    const data = fs.readFileSync(dir, {
      encoding: 'utf-8',
    });

    const config = getDocConfig(data, name);
    // console.log('config', config);
    if (!config) {
      continue;
    }

    docConfig.push(config);
    writeCompDoc(data, name);
  }

  // console.log('docConfig', docConfig);
  writeSidebarConfig(docConfig);
}

/**
 * 监听单个文件变化
 */
// function watchChange(dir) {
//   const prefixDir = path.resolve(COMPONENT_DIR);
//   const compDir = path.resolve(dir);
//   const compName = compDir
//     .replace(prefixDir, '')
//     .replace(/^\/|\/$/, '')
//     .split('/')[0];
//   const data = fs.readFileSync(dir, {
//     encoding: 'utf-8',
//   });

//   writeCompDoc(data, compName);
// }

/**
 * 将文档写入docs目录
 */
function writeCompDoc(data, name) {
  fs.writeFileSync(path.resolve(DOC_PATH, `${name}.md`), data, {
    encoding: 'utf-8',
  });
}

/**
 * 写入sidebar配置
 */
function writeSidebarConfig(config) {
  const data = {
    sidebar: [
      {
        title: '基础组件',
        collapsable: false,
        children: config,
      },
    ],
  };
  fs.writeFileSync(SIDEBAR_CONFIG_PATH, JSON.stringify(data, null, 2));
}

function watchMd() {
  const watcher = gulp.watch('./src/packages/**/*.md');
  watcher.on('change', (path) => {
    console.log(`[GULP] File ${path} was changed`);
    mvDocs();
  });
  console.log('[GULP] 正在监听 markdown 文件...');

  watcher.on('add', (path) => {
    console.log(`[GULP] File ${path} was added`);
    mvDocs();
  });

  watcher.on('unlink', (path) => {
    console.log(`[GULP] File ${path} was removed`);
    mvDocs();
  });
  // watcher.close();
}


mvDocs();
watchMd();
