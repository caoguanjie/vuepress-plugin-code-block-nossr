"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownText = exports.highlight = void 0;
const markdown_1 = require("@vuepress/markdown");
const plugin_prismjs_1 = require("@vuepress/plugin-prismjs");
const highlight = (code, lang = 'text', noLineNumbers = true) => {
    return (0, markdown_1.createMarkdown)({
        highlight: (0, plugin_prismjs_1.resolveHighlighter)(lang),
    }).render('```' +
        lang +
        (noLineNumbers ? ':no-line-numbers' : '') +
        '\n' +
        code +
        '```');
};
exports.highlight = highlight;
const markdownText = (text) => {
    return (0, markdown_1.createMarkdown)().render(text);
};
exports.markdownText = markdownText;
