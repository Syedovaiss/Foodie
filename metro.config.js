const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
    watchFolders:[],
    maxWorkers: 2
};

module.exports = (async () => {
  config.resolver.assetExts = [...config.resolver.assetExts, 'png', 'jpg'];
  return config;
})();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
