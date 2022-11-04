"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInline = void 0;
const parseInline = (node, dep) => {
    if (typeof node !== 'object') {
        return node;
    }
    node.tag = dep.compName;
    node.attrs = {};
    return node;
};
exports.parseInline = parseInline;
