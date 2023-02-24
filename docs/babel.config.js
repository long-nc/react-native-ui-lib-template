module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ignore warnings: https://github.com/storybookjs/storybook/issues/14805
      ["@babel/plugin-proposal-class-properties", { loose: false }],
      ["@babel/plugin-proposal-private-methods", { loose: false }],
      ["@babel/plugin-proposal-private-property-in-object", { loose: false }],
    ],
  };
};
