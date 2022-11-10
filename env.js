// const dotenv = require('dotenv');
// const dotenvExpand = require('dotenv-expand');
const { spawnSync } = require('child_process');
const os = require('os');
const platform = os.platform();
// 加载.env
// const myEnv = dotenv.config({ path: '.env.local' });
// 扩展.env.local
// dotenvExpand.expand(myEnv);

// 执行真实的命令
const realArgv = process.argv.slice(2);
let command = 'npm';
if (platform === 'win32') {
  command = 'npm.cmd';
}
spawnSync(command, ['run', ...realArgv], { stdio: 'inherit' });
