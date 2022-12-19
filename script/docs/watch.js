const gulp = require('gulp');

function watchPackages(cb) {
  const watcher = gulp.watch('./src/packages/**/*');
  console.log('[GULP] 正在监听 packages 文件夹...');

  watcher.on('change', (path) => {
    console.log(`[GULP] File ${path} was changed`);
    cb();
  });

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

module.exports = {
  watchPackages,
};
