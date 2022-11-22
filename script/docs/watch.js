const gulp = require('gulp');
const { moveDemo, mvDocs } = require('./md');


function watchPackages() {
  const watcher = gulp.watch('./src/packages/**/*');
  watcher.on('change', (path) => {
    console.log(`[GULP] File ${path} was changed`);
    moveDemo();
    mvDocs();
  });
  console.log('[GULP] 正在监听 packages 文件夹...');

  watcher.on('add', (path) => {
    console.log(`[GULP] File ${path} was added`);
    mvDocs();
    moveDemo();
  });

  watcher.on('unlink', (path) => {
    console.log(`[GULP] File ${path} was removed`);
    moveDemo();
    mvDocs();
  });
  // watcher.close();
}


watchPackages();
