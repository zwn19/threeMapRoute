const path = require('path');

const resolve = url => path.resolve(__dirname, url);

module.exports = {
  theme: {},
  resolve,
  port: 9000,
  host: '10.29.254.109',
  distPath: resolve('../dist'),
  srcPath: resolve('../src'),
  version: '1.0.0'
};
