/* eslint-disable no-param-reassign */
const path = require("path");
const fs = require("fs");

const {override, addLessLoader, addWebpackAlias} = require("customize-cra");
// const { aliasDangerous, configPaths } = require('react-app-rewire-alias/lib/aliasDangerous');

// const processDefine = Object.entries(process.env).reduce(
//   (res, [key, value]) => ({
//     ...res,
//     [`process.env.${key}`]: JSON.stringify(value),
//   }),
//   {},
// );
console.log(process.env);
module.exports = {
  webpack: override(
    // removeModuleScopePlugin(), // 为了导入根目录的common，cra默认只能导入src下的文件
    addWebpackAlias({
      "@": path.resolve(__dirname, "./src"),
    }),
    addLessLoader({
      lessOptions: {
        javascriptEnabled: true,
        // Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.
        relativeUrls: false,
        //   modifyVars: { '@primary-color': '#A80000' },
        cssModules: {
          // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
          localIdentName: "[path][name]__[local]--[hash:base64:5]",
        },
      },
    }),
  ),
};
