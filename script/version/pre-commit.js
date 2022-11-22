const fs = require('fs');
const { execSync } = require('child_process');


const PACKAGE_JSON_PATH = './src/packages/package.json';
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

  console.log(`[VERSION] The new version is ${newVersion}`);

  pkg.version = newVersion;

  fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(pkg, null, 2), {
    encoding: 'utf-8',
  });
}

function main() {
  changeVersion();
  release();

  // process.exit(1);
}

function release() {
  execSync('npm publish', {
    stdio: 'inherit',
  });
}

main();
