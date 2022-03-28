module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [
         
      ],
    },
  },
  plugins: [ 
    [ 
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'], 
      },
    ],
    'react-native-reanimated/plugin'
  ]
};