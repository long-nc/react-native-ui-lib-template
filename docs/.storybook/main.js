// https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-implicit-postcss-loader
const postcss = {
	name: "@storybook/addon-postcss",
	options: {
		postcssLoaderOptions: {
			implementation: require("postcss"),
			postcssOptions: {
				plugins: [require("postcss-import"), require("autoprefixer")],
			},
		},
		cssLoaderOptions: { modules: { auto: true } },
	},
};

module.exports = {
  stories: ["../src/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-react-native-web",
    postcss,
  ],
  framework: "@storybook/react",
};
