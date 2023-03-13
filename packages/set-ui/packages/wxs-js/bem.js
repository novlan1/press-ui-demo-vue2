const PREFIX = 'van-';
const PREFIX2 = 'press-';

function join(name, mods) {
  name = PREFIX + name;
  mods = mods.map(mod => `${name}--${mod}`);
  mods.unshift(name);
  return mods.join(' ');
}

function join2(name, mods) {
  name = PREFIX2 + name;
  mods = mods.map(mod => `${name}--${mod}`);
  mods.unshift(name);
  return mods.join(' ');
}


function traversing(mods, conf) {
  if (!conf) {
    return;
  }

  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf);
  } else if (Array.isArray(conf)) {
    conf.forEach((item) => {
      traversing(mods, item);
    });
  } else if (typeof conf === 'object') {
    Object.keys(conf).forEach((key) => {
      conf[key] && mods.push(key);
    });
  }
}

function bem(name, conf) {
  const mods = [];
  traversing(mods, conf);
  return join(name, mods);
}

function bem2(name, conf) {
  const mods = [];
  traversing(mods, conf);
  return join2(name, mods);
}


export default bem;
export { bem2 };
