const gulp = require('gulp');
const { moveDemo, moveDocs } = require('./md');

function cb() {
  moveDemo();
  console.log();
  moveDocs();
}

function watchPackages() {
  const watcher = gulp.watch('./src/packages/**/*');
  watcher.on('change', (path) => {
    console.log(`[GULP] File ${path} was changed`);
    cb();
  });
  console.log('[GULP] 正在监听 packages 文件夹...');

  watcher.on('add', (path) => {
    console.log(`[GULP] File ${path} was added`);
    cb();
  });

  watcher.on('unlink', (path) => {
    console.log(`[GULP] File ${path} was removed`);
    cb();
  });
  // watcher.close();
}

cb();
watchPackages();

