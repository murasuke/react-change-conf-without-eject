const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

config.devtool = 'inline-source-map';

// https://github.com/facebook/create-react-app/blob/main/packages/react-scripts/config/webpack.config.js
// 下記でreturnするオブジェクトがconfig
// return {
//   target: ['browserslist'],
//   mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
//   // Stop compilation early in production
//   bail: isEnvProduction,
//   devtool: isEnvProduction
//     ? shouldUseSourceMap
//       ? 'source-map'
//       : false
//     : isEnvDevelopment && 'cheap-module-source-map',
