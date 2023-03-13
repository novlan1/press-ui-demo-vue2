function main() {
  const ENV_FILE = '.env.local';
  require('dotenv').config({ path: ENV_FILE });
}


module.exports = main;
