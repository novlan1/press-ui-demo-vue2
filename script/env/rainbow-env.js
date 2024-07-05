const path = require('path');
const { writeEnvFromRainbow } = require('t-comm');

const envPath = path.resolve(__dirname, '../../.env.local');

async function main() {
  await writeEnvFromRainbow({
    envPath,
    rainbowKey: 'press_ui_v3_env',
    envName: 'Default',
    groupName: 'devops',
  });
}

main();
