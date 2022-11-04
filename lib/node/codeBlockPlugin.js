"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.codeBlockPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const utils_2 = require("./utils");
const prepare_1 = require("./prepare");
const plugins_1 = require("./plugins");
const resolve_1 = require("./resolve");
const codeBlockPlugin = (config = {}) => {
    const store = (0, utils_2.createPageCodeDepsHelper)();
    const options = (0, resolve_1.resolveOptions)(config);
    return {
        name: '@bfehub/vuepress-plugin-code-block',
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/clientConfig.js'),
        extendsMarkdown(md, app) {
            (0, resolve_1.resolveHtmlBlock)(md, app, store, options);
        },
        async extendsPage(page, app) {
            (0, resolve_1.resolveScriptSetup)(page, store);
            (0, resolve_1.resolvePageHeaders)(page, store, options.headers);
            app.pages && (await (0, prepare_1.prepareVmiComponents)(app, store));
        },
        async onInitialized(app) {
            await (0, prepare_1.prepareClientIframe)(app);
            await (0, prepare_1.prepareVmiComponents)(app, store);
        },
        extendsBundlerOptions(bundlerOptions, app) {
            var _a;
            if (app.options.bundler.name === '@vuepress/bundler-vite') {
                bundlerOptions.viteOptions ?? (bundlerOptions.viteOptions = {});
                (_a = bundlerOptions.viteOptions).plugins ?? (_a.plugins = []);
                bundlerOptions.viteOptions.plugins.push((0, plugins_1.vitePageHMR)(app), (0, plugins_1.vitePageProxy)(app), (0, plugins_1.vitePageIframe)(app));
            }
        },
    };
};
exports.codeBlockPlugin = codeBlockPlugin;
