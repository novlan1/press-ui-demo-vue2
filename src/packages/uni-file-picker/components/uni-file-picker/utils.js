/**
 * 获取文件名和后缀
 * @param {String} name
 */
export const getFileExt = (name) => {
  const lastLen = name.lastIndexOf('.');
  const len = name.length;
  return {
    name: name.substring(0, lastLen),
    ext: name.substring(lastLen + 1, len),
  };
};

/**
 * 获取扩展名
 * @param {Array} fileExtname
 */
export const getExtName = (fileExtname) => {
  if (!Array.isArray(fileExtname)) {
    const extname = fileExtname.replace(/(\[|\])/g, '');
    return extname.split(',');
  }
  return fileExtname;
};

/**
 * 获取文件和检测是否可选
 */
export const getFilesAndIsMax = (res, _extname) => {
  const filePaths = [];
  const files = [];
  if (!_extname || _extname.length === 0) {
    return {
      filePaths,
      files,
    };
  }
  res.tempFiles.forEach((v) => {
    const fileFullName = getFileExt(v.name);
    const extname = fileFullName.ext.toLowerCase();
    if (_extname.indexOf(extname) !== -1) {
      files.push(v);
      filePaths.push(v.path);
    }
  });
  if (files.length !== res.tempFiles.length) {
    uni.showToast({
      title: `当前选择了${res.tempFiles.length}个文件 ，${res.tempFiles.length - files.length} 个文件格式不正确`,
      icon: 'none',
      duration: 5000,
    });
  }

  return {
    filePaths,
    files,
  };
};


/**
 * 获取图片信息
 * @param {Object} filepath
 */
export const getFileInfo = filepath => new Promise((resolve, reject) => {
  uni.getImageInfo({
    src: filepath,
    success(res) {
      resolve(res);
    },
    fail(err) {
      reject(err);
    },
  });
});
/**
 * 获取封装数据
 */
export const getFileData = async (files, type = 'image') => {
  // 最终需要上传数据库的数据
  const fileFullName = getFileExt(files.name);
  const extname = fileFullName.ext.toLowerCase();
  const filedata = {
    name: files.name,
    uuid: files.uuid,
    extname: extname || '',
    cloudPath: files.cloudPath,
    fileType: files.fileType,
    url: files.path || files.path,
    size: files.size, // 单位是字节
    image: {},
    path: files.path,
    video: {},
  };
  if (type === 'image') {
    const imageinfo = await getFileInfo(files.path);
    delete filedata.video;
    filedata.image.width = imageinfo.width;
    filedata.image.height = imageinfo.height;
    filedata.image.location = imageinfo.path;
  } else {
    delete filedata.image;
  }
  return filedata;
};
