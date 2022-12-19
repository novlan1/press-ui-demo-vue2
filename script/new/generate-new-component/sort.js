function sortComponent(config) {
  return Object.keys(config).reduce((acc, key) => {
    const value = config[key];
    console.log('value', value);

    value.list.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (b.name > a.name) return -1;
      return 0;
    });
    acc = {
      ...acc,
      [key]: {
        ...value,
      },
    };
    return acc;
  }, {});
}

module.exports = sortComponent;

const path = require('path');
const fs = require('fs');
const COMPONENT_CONFIG_PATH = path.resolve(process.cwd(), './script/component-config/component-config.json');
const json = sortComponent(require(COMPONENT_CONFIG_PATH));
fs.writeFileSync(COMPONENT_CONFIG_PATH, JSON.stringify(json, null, 2));
