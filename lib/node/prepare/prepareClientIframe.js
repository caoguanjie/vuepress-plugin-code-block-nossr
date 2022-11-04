"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareClientIframe = void 0;
const utils_1 = require("@vuepress/utils");
/**
 * Generate iframe client temp file
 */
const prepareClientIframe = async (app) => {
    const cwd = process.cwd();
    const source = app.dir.source();
    const clientPath = [
        utils_1.path.resolve(cwd, 'vuepress.client-iframe.ts'),
        utils_1.path.resolve(cwd, 'vuepress.client-iframe.js'),
        utils_1.path.resolve(cwd, 'vuepress.client-iframe.mjs'),
        utils_1.path.resolve(source, '.vuepress/client-iframe.ts'),
        utils_1.path.resolve(source, '.vuepress/client-iframe.js'),
        utils_1.path.resolve(source, '.vuepress/client-iframe.mjs'),
    ].find((item) => utils_1.fs.pathExistsSync(item));
    let content = '';
    if (clientPath) {
        content = `\
import clientConfig0 from '${clientPath}'

export const clientIframeConfigs = [
  clientConfig0,
]
`;
    }
    else {
        content = `\
export const clientIframeConfigs = []
`;
    }
    await app.writeTemp('internal/clientIframeConfigs.js', content);
};
exports.prepareClientIframe = prepareClientIframe;
