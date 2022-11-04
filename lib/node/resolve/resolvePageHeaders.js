"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePageHeaders = void 0;
const shared_1 = require("@mdit-vue/shared");
const resolvePageHeaders = (page, store, titleToHeader) => {
    if (titleToHeader) {
        if (page.frontmatter.headers === false) {
            return false;
        }
    }
    else {
        if (page.frontmatter.headers !== true) {
            return false;
        }
    }
    const deps = store.get(page.filePath);
    const headers = [];
    for (const dep of deps) {
        if (dep.compAttrs.title) {
            headers.push({
                level: 2,
                title: dep.compAttrs.title,
                slug: (0, shared_1.slugify)(dep.compAttrs.title),
                children: [],
            });
        }
    }
    page.data.headers = headers;
};
exports.resolvePageHeaders = resolvePageHeaders;
