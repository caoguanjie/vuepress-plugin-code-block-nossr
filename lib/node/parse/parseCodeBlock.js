"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCodeBlock = void 0;
const utils_1 = require("@vuepress/utils");
const posthtml_parser_1 = require("posthtml-parser");
const posthtml_render_1 = require("posthtml-render");
const parseNodeAttrs_1 = require("./parseNodeAttrs");
const parseVue_1 = require("./parseVue");
const parseInline_1 = require("./parseInline");
const parseRaw_1 = require("./parseRaw");
const parseCodeBlock = (app, store, options, content, pagePath) => {
    const html = (0, posthtml_parser_1.parser)(content);
    let i = -1;
    for (const node of html) {
        i++;
        if (typeof node !== 'object') {
            continue;
        }
        if (node.tag !== options.name) {
            continue;
        }
        if (typeof node.attrs?.src !== 'string') {
            continue;
        }
        const props = (node.attrs = (0, parseNodeAttrs_1.parseNodeAttrs)(options.config, node.attrs));
        const isRaw = Reflect.has(props, 'raw');
        const isInline = Reflect.has(props, 'inline');
        const isDebug = Reflect.has(props, 'debug');
        const isBuild = app.env.isBuild;
        const isVueCode = /^\.(vue|jsx|tsx)$/.test(utils_1.path.extname(props.src));
        const dep = {};
        const dirName = utils_1.path.dirname(pagePath);
        dep.pagePath = pagePath;
        dep.compPath = utils_1.path.resolve(dirName, props.src);
        dep.compHash = (0, utils_1.hash)(dep.compPath);
        dep.compName = `VmiV${dep.compHash}`;
        dep.compAttrs = props;
        props.id = dep.compHash;
        props.src = dep.compPath;
        if (isDebug && isBuild) {
            html[i] = '';
            continue;
        }
        if (isInline && isVueCode) {
            html[i] = (0, parseInline_1.parseInline)(node, dep);
            store.add(dep);
            continue;
        }
        if (!isRaw && isVueCode) {
            html[i] = (0, parseVue_1.parseVue)(app, node, dep);
            dep.isGenerateIframe = true;
            store.add(dep);
            continue;
        }
        html[i] = (0, parseRaw_1.parseRaw)(node, dep);
    }
    return (0, posthtml_render_1.render)(html);
};
exports.parseCodeBlock = parseCodeBlock;
