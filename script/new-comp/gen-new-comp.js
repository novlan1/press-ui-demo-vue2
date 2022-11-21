const fs = require('fs');
const path = require('path');
const { copyDir } = require('t-comm');
const { getFullCompName, getPureCompName } = require('./utils');

const TEMPLATE_PATH = './script/new-comp/template';
const COMP_TARGET_PATH = './src/packages';
const DEFAULT_COMP_NAME = 'press.vue';
const PAGES_JSON_PATH = './src/pages.json';


function genNewComp() {
  const compName = process.argv[2];
  if (!compName) {
    throw new Error('请输入组件名称');
  }
  console.log(`[NEW] 正在创建 ${compName} 组件...`);

  const fullName = getFullCompName(compName);
  const pureName = getPureCompName(compName);
  const targetDir = path.resolve(COMP_TARGET_PATH, fullName);


  if (fs.existsSync(targetDir)) {
    throw new Error(`${compName} 已经存在，请移除后重试`);
  }
  copyDir(TEMPLATE_PATH, targetDir, () => {
    console.log(`[NEW] ${fullName} 拷贝成功`);
  });

  const compVue = path.resolve(COMP_TARGET_PATH, fullName, DEFAULT_COMP_NAME);
  const newCompName = path.resolve(COMP_TARGET_PATH, fullName, `${fullName}.vue`);

  fs.renameSync(compVue, newCompName);
  console.log(`[NEW] ${fullName}.vue 重命名成功`);

  changePagesJSON(pureName);
  changeReadme(fullName, pureName);
}

function changePagesJSON(compName) {
  const pages = JSON.parse(fs.readFileSync(PAGES_JSON_PATH, {
    encoding: 'utf-8',
  }));
  const root = `pages/press/${compName}`;
  const found = pages.subPackages.find(item => item.root === root);

  if (found) {
    console.log(`[NEW] ${root} 已存在pages.json中`);
    return;
  }

  pages.subPackages.push({
    root: `pages/press/${compName}`,
    pages: [
      {
        path: compName,
        style: {},
      },
    ],
  });
  fs.writeFileSync(PAGES_JSON_PATH, JSON.stringify(pages, null, 2));
  console.log('[NEW] 修改pages.json成功');
}

function changeReadme(fullName, pureName) {
  const docPath = path.resolve(COMP_TARGET_PATH, fullName, 'README.md');
  const data = fs.readFileSync(docPath, {
    encoding: 'utf-8',
  });

  const newData = data.replace(/{{COMP}}/g, pureName);
  fs.writeFileSync(docPath, newData, {
    encoding: 'utf-8',
  });
  console.log(`[NEW] ${fullName} 文档变量替换成功`);
}


genNewComp();
