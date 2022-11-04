"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPageCodeDepsHelper = void 0;
/**
 * Create page deps helper
 */
const createPageCodeDepsHelper = () => {
    const store = new Map();
    return {
        get(path) {
            return [...(store.get(path)?.values() || [])];
        },
        add(code) {
            if (!store.has(code.pagePath)) {
                store.set(code.pagePath, new Map());
            }
            store.get(code.pagePath)?.set(code.compPath, code);
        },
        remove(code) {
            store.get(code.pagePath)?.delete(code.compPath);
        },
    };
};
exports.createPageCodeDepsHelper = createPageCodeDepsHelper;
