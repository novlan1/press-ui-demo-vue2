const path = require('path');
const os = require('os');
const { spawnSync } = require('child_process');
const dotenv = require('dotenv');


function main() {
  const configPath = path.resolve(__dirname, '.env.local');
  dotenv.config({ path: configPath });

  const CUR_PROJECT = process.env.VUE_APP_PROJECT;
  process.env.UNI_INPUT_DIR = path.resolve(`packages/${CUR_PROJECT}`);

  // // 执行真实的命令
  const realArgv = process.argv.slice(2);
  let command = 'npm';
  const platform = os.platform();
  if (platform === 'win32') {
    command = 'npm.cmd';
  }

  spawnSync(command, ['run', ...realArgv], { stdio: 'inherit' });
}

main();
