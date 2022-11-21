const fs = require('fs');
const path = require('path');
const gulp = require('gulp');

const COMPONENT_DIR = './src/packages';
const LOCAL_DOC_NAME = 'README.md';
const LOCAL_DEMO_NAME = 'demo.vue';
const DOC_PATH = './docs/components/press';
const DOC_PREFIX = '/components/press/';
const SIDEBAR_CONFIG_PATH = './docs/.vuepress/plugins/config/sidebar.json';
const DEMO_PATH = './src/pages/press';

function getPureCompName(name) {
  return name.replace(/^press-/, '');
}

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
function getLocalDocOrDemo(comps, postfix) {
  const docs = comps
    .filter((comp) => {
      const { path: dir } = comp;
      const readmePath = path.resolve(dir, postfix);
      return fs.existsSync(readmePath);
    })
    .map((comp) => {
      const { path: dir } = comp;
      return {
        ...comp,
        path: path.resolve(dir, postfix),
      };
    });
  return docs;
}

/**
 * 移动文档
 */
function mvDocs() {
  const comps = getComps();
  const docs = getLocalDocOrDemo(comps, LOCAL_DOC_NAME);
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
 * 将demo写入pages目录
 */
function writeCompDemo(data, name) {
  const pureName = getPureCompName(name);
  console.log('pureName', pureName);
  const dir = path.resolve(DEMO_PATH, pureName);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.resolve(dir, `${pureName}.vue`), data, {
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

// function getLocalDemo(comps) {

// }

function moveDemo() {
  const comps = getComps();
  const demos = getLocalDocOrDemo(comps, LOCAL_DEMO_NAME);
  // const demoConfig = [];
  for (const doc of demos) {
    const { path: dir, name } = doc;
    const data = fs.readFileSync(dir, {
      encoding: 'utf-8',
    });

    // const config = getDocConfig(data, name);
    // console.log('config', config);
    // if (!config) {
    //   continue;
    // }

    // demoConfig.push(config);
    writeCompDemo(data, name);
  }
}


function watchMd() {
  const watcher = gulp.watch('./src/packages/**/*');
  watcher.on('change', (path) => {
    console.log(`[GULP] File ${path} was changed`);
    moveDemo();
    mvDocs();
  });
  console.log('[GULP] 正在监听 packages 文件夹...');

  watcher.on('add', (path) => {
    console.log(`[GULP] File ${path} was added`);
    mvDocs();
    moveDemo();
  });

  watcher.on('unlink', (path) => {
    console.log(`[GULP] File ${path} was removed`);
    moveDemo();
    mvDocs();
  });
  // watcher.close();
}


mvDocs();
moveDemo();
watchMd();

