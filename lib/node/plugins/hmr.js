"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vitePageHMR = void 0;
const cli_1 = require("@vuepress/cli");
// https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate
const vitePageHMR = (app) => {
    return {
        name: '@bfehub/vuepress-plugin-code-block:hmr',
        enforce: 'post',
        async handleHotUpdate(ctx) {
            for (const module of ctx.modules) {
                for (const importer of module.importers) {
                    const tempPath = importer.file;
                    if (tempPath.endsWith('.html.vue')) {
                        await handlePageChange(app, tempPath);
                    }
                }
            }
        },
    };
};
exports.vitePageHMR = vitePageHMR;
async function handlePageChange(app, tempPath) {
    for (const page of app.pages) {
        if (page.componentFilePath === tempPath) {
            // _PageMapPluginOptions from plugin-page-map/src/node/utils/createPage.ts
            if (page._PageMapPluginOptions) {
                // await handlePageMapPageChange(
                //   app,
                //   (page as any)._PageMapPluginOptions,
                //   page.filePath
                // )
            }
            else {
                await (0, cli_1.handlePageChange)(app, page.filePath);
            }
        }
    }
}
