"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveHtmlBlock = void 0;
const parse_1 = require("../parse");
const resolveHtmlBlock = (md, app, store, options) => {
    const rawRule = md.renderer.rules.html_block;
    md.renderer.rules.html_block = function (tokens, idx, opts, env, self) {
        const content = tokens[idx].content;
        if (content.startsWith(`<${options.name}`)) {
            tokens[idx].content = (0, parse_1.parseCodeBlock)(app, store, options, content, env.filePath);
        }
        return rawRule(tokens, idx, opts, env, self);
    };
};
exports.resolveHtmlBlock = resolveHtmlBlock;
