"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRaw = void 0;
const readSource_1 = require("./readSource");
const parseRaw = (node, dep) => {
    if (typeof node !== 'object') {
        return node;
    }
    const sources = (0, readSource_1.readSource)(dep.compPath, false, false);
    if (sources.length === 1) {
        return sources[0].highlightCode;
    }
    node.tag = 'CodeGroup';
    node.attrs = {};
    node.content = sources.map((source) => {
        return {
            tag: 'CodeGroupItem',
            attrs: {
                title: source.name,
            },
            content: source.highlightCode,
        };
    });
    return node;
};
exports.parseRaw = parseRaw;
