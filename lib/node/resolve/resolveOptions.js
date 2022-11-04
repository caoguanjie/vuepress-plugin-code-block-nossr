"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveOptions = exports.DEFAULT_LOCALE_OPTIONS = void 0;
exports.DEFAULT_LOCALE_OPTIONS = {
    '/': {
        hideText: 'Hide',
        showText: 'Expand',
        copyText: 'Copy',
        copySuccessText: 'Copy Success',
    },
    '/zh/': {
        hideText: '隐藏',
        showText: '显示',
        copyText: '复制',
        copySuccessText: '复制成功',
    },
};
/**
 * Create options with default values
 */
const resolveOptions = ({ name = 'demo', headers = false, config = {}, locales = {}, }) => {
    if (!locales['/']) {
        locales['/'] = {};
    }
    if (!locales['/zh/']) {
        locales['/zh/'] = {};
    }
    Object.assign(locales['/'], {
        ...exports.DEFAULT_LOCALE_OPTIONS['/'],
        ...locales['/'],
    });
    Object.assign(locales['/zh/'], {
        ...exports.DEFAULT_LOCALE_OPTIONS['/zh/'],
        ...locales['/zh/'],
    });
    return {
        name,
        headers,
        config,
        locales,
    };
};
exports.resolveOptions = resolveOptions;
