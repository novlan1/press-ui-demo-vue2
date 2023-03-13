const fs = require('fs');
const { execSync } = require('child_process');
require('../utils/local-env')();

const PROJECT_DIR = `./packages/${process.env.VUE_APP_PROJECT}/packages`;
const PACKAGE_JSON_PATH = `${PROJECT_DIR}/package.json`;
const ROOT_PACKAGE_JSON_PATH = './package.json';


function getNewVersion() {
  const pkg = JSON.parse(fs.readFileSync(ROOT_PACKAGE_JSON_PATH, {
    encoding: 'utf-8',
  }));
  return pkg.version;
}

function changeVersion() {
  const pkg = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, {
    encoding: 'utf-8',
  }));

  const newVersion = getNewVersion();

  // console.log(`[VERSION] The new version is ${newVersion}`);

  pkg.version = newVersion;

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2), {
    encoding: 'utf-8',
  });
}

function main() {
  changeVersion();

  execSync('git add .', {
    stdio: 'inherit',
  });

  release();
}

function release() {
  execSync(`cd ${PROJECT_DIR} && npm publish`, {
    stdio: 'inherit',
  });
}

main();
