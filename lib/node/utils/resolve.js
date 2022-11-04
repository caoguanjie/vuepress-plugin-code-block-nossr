"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
const utils_1 = require("@vuepress/utils");
const extensions = ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue'];
const resolve = (...paths) => {
    const filepath = utils_1.path.resolve(...paths);
    if (tryResolveFile(filepath)) {
        return filepath;
    }
    if (tryResolveDirectory(filepath)) {
        for (const ext of extensions) {
            const findpath = filepath + '/index' + ext;
            if (tryResolveFile(findpath)) {
                return findpath;
            }
        }
    }
    else {
        for (const ext of extensions) {
            const findpath = filepath + ext;
            if (tryResolveFile(findpath)) {
                return findpath;
            }
        }
    }
    return null;
};
exports.resolve = resolve;
function tryResolveFile(file) {
    try {
        const res = utils_1.fs.statSync(file);
        return res.isFile();
    }
    catch (error) {
        return false;
    }
}
function tryResolveDirectory(file) {
    try {
        const res = utils_1.fs.statSync(file);
        return res.isDirectory();
    }
    catch (error) {
        return false;
    }
}
