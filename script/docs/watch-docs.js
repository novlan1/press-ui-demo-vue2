const { watchPackages } = require('./watch');
const { moveDocs  } = require('./md');
require('../utils/local-env')();

function main() {
  moveDocs();

  watchPackages(() => {
    moveDocs();
  });
}

main();
