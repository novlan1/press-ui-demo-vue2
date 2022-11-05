/**
 * 是否对象
 */
export function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * @description 深度克隆
 * @param {object} obj 需要深度克隆的对象
 * @returns {*} 克隆后的对象或者原值（不是对象）
 */
export function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  const o = Array.isArray(obj) ? [] : {};
  for (const i in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}


/**
 * @description 进行延时，以达到可以简写代码的目的 比如: await sleep(20)将会阻塞20ms
 * @param {number} value 堵塞时间 单位ms 毫秒
 * @returns {Promise} 返回promise
 */
export  function sleep(value = 30) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, value);
  });
}

/**
 * 验证十进制数字
 */
export function isNumber(value) {
  return /^[+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}


/**
 * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
 * @param {string|number} value 需要添加单位的值
 * @param {string} unit 添加的单位名 比如px
 */
export function addUnit(value = 'auto', unit = uni?.$u?.config?.unit ?? 'px') {
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return isNumber(value) ? `${value}${unit}` : value;
}
