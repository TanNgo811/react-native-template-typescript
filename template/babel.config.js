const path = require('path');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['macros'],
    ['inline-dotenv'],
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', 'jsx', '.json'],
        alias: {
          'app.json': path.join(__dirname, 'app.json'),
          'package.json': path.join(__dirname, 'package.json'),
          assets: path.resolve(__dirname, 'assets'),
          src: path.resolve(__dirname, 'src'),
        },
      },
    ],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
  ],
};
