export default function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            components: './src/components',
            hooks: './src/hooks',
            icons: './src/icons',
            shared: './src/shared',
          },
        },
      ],
    ],
  }
}
