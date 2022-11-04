"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNodeAttrs = void 0;
const parseNodeAttrs = (config, attrs) => {
    Object.keys(config).forEach((key) => {
        if (typeof config[key] === 'string') {
            attrs[key] = config[key];
        }
        else {
            attrs[key] = JSON.stringify(config[key]);
        }
    });
    Object.keys(attrs).forEach((key) => {
        if (attrs[key] === 'true') {
            attrs[key] = '';
        }
        if (attrs[key] === 'false') {
            delete attrs[key];
        }
    });
    return attrs;
};
exports.parseNodeAttrs = parseNodeAttrs;
