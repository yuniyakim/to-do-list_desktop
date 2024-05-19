const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        resolvePath(sourcePath) {
          console.log(sourcePath)
          if (sourcePath === '../implementations/ReactNativeRenderer-prod') {
            return path.resolve(
              __dirname,
              './node_modules/react-native/Libraries/Renderer/implementations/ReactNativeRenderer-profiling',
            );
          }
          return undefined;
        },
      },
    ],
  ],
};