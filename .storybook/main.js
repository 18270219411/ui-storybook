// 这是storybook的配置文件，loader、entry file等都会在此进行配置
const path = require("path");

module.exports = {
  // storybook文档的目标文件
  stories: [
    "../packages/**/*.stories.*"
    // {
    //   // 👇 The directory field sets the directory your stories
    //   directory: "../packages",
    //   // 👇 The titlePrefix field will generate automatic titles for your stories
    //   titlePrefix: "index",
    //   // 👇 Storybook will load all files that contain the stories extension
    //   files: "*.stories.*"
    // }
  ],
  // 插件依赖
  addons: ["@storybook/addon-knobs", "@storybook/addon-docs"],
  framework: "@storybook/react",
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
  feature: {}
};
