const { genVersionTip, batchSendWxRobotMarkdown, readEnvVariable } = require('t-comm');
const pkg = require('../package.json');

function main() {
  const webhookUrl = readEnvVariable('PRESS_UI_ROBOT_WEBHOOK_URL', './.env.local');
  console.log('webhookUrl: ', webhookUrl);

  const content = genVersionTip({
    appInfo: pkg,
    showNpmLink: false,
    readmeFilePath: './CHANGELOG.md',
  });

  console.log('content:\n', content);

  batchSendWxRobotMarkdown({
    content,
    chatId: 'ALL',
    webhookUrl,
  });
}

main();
