const fs = require('fs');
const path = require('path');
const { getPureCompName } = require('../new-comp/utils');

const LOCAL_DOC_NAME = 'README.md';
const LOCAL_DEMO_NAME = 'demo.vue';

const COMPONENT_DIR = './src/packages';

const DOC_PATH = './docs/components/press';
const DEMO_PATH = './src/pages/press';

/**
 * 获取组件文件夹
 */
function getComps() {
  const dirs = fs.readdirSync(COMPONENT_DIR);

  const comps = dirs
    .filter((dir) => {
      const vuePath = path.resolve(COMPONENT_DIR, dir, `${dir}.vue`);
      return fs.existsSync(vuePath);
    })
    .map(dir => ({
      path: path.resolve(COMPONENT_DIR, dir),
      name: dir,
    }));
  return comps;
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
function moveDocs() {
  const comps = getComps();
  const docs = getLocalDocOrDemo(comps, LOCAL_DOC_NAME);
  console.log(`[AUTO] 共有${docs.length}个组件文档\n`);

  for (const doc of docs) {
    const { path: dir, name } = doc;
    const data = fs.readFileSync(dir, {
      encoding: 'utf-8',
    });

    writeCompDoc(data, name);
  }
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
  console.log(`[AUTO] 正在写入 ${name} 文档...`);
  if (!fs.existsSync(DOC_PATH)) {
    fs.mkdirSync(DOC_PATH);
  }
  fs.writeFileSync(path.resolve(DOC_PATH, `${name}.md`), data, {
    encoding: 'utf-8',
  });
}


/**
 * 将demo写入pages目录
 */
function writeCompDemo(data, name) {
  const pureName = getPureCompName(name);
  console.log(`[AUTO] 正在写入 ${pureName} demo...`);
  if (!fs.existsSync(DEMO_PATH)) {
    fs.mkdirSync(DEMO_PATH);
  }
  const dir = path.resolve(DEMO_PATH, pureName);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(path.resolve(dir, `${pureName}.vue`), data, {
    encoding: 'utf-8',
  });
}


function moveDemo() {
  const comps = getComps();
  const demos = getLocalDocOrDemo(comps, LOCAL_DEMO_NAME);
  console.log(`[AUTO] 共有${demos.length}个组件demo\n`);

  for (const doc of demos) {
    const { path: dir, name } = doc;
    const data = fs.readFileSync(dir, {
      encoding: 'utf-8',
    });

    writeCompDemo(data, name);
  }
}


module.exports = {
  moveDocs,
  moveDemo,
};


