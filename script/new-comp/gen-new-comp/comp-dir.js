const fs = require('fs');
const path = require('path');
const { copyDir } = require('t-comm');
const { getFullCompName, getPureCompName } = require('../../utils/utils');

const TEMPLATE_PATH = './script/new-comp/template';
const COMP_TARGET_PATH = './src/packages';
const DEFAULT_COMP_NAME = 'press.vue';

function copyComponentDir(config) {
  const { name  } = config;
  if (!name) {
    throw new Error('请输入组件名称');
  }
  console.log(`[NEW] 正在创建 ${name} 组件...`);

  const fullName = getFullCompName(name);
  const pureName = getPureCompName(name);
  const targetDir = path.resolve(COMP_TARGET_PATH, fullName);


  if (fs.existsSync(targetDir)) {
    throw new Error(`${name} 已经存在，请移除后重试`);
  }
  copyDir(TEMPLATE_PATH, targetDir, () => {
    console.log(`[NEW] ${fullName} 拷贝成功`);
  });

  const compVue = path.resolve(COMP_TARGET_PATH, fullName, DEFAULT_COMP_NAME);
  const newCompName = path.resolve(COMP_TARGET_PATH, fullName, `${fullName}.vue`);

  fs.renameSync(compVue, newCompName);
  console.log(`[NEW] ${fullName}.vue 重命名成功`);

  changeReadme(fullName, pureName);
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


module.exports = {
  copyComponentDir,
};
