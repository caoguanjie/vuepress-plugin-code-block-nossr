"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileSource = exports.parseImports = exports.readSource = void 0;
const utils_1 = require("@vuepress/utils");
const utils_2 = require("../utils");
const readSource = (filePath, scanImport, noLineNumbers) => {
    const sources = [];
    const source = (0, exports.readFileSource)(filePath, noLineNumbers);
    sources.push(source);
    if (scanImport) {
        (0, exports.parseImports)(source.rawCode, utils_1.path.dirname(filePath), sources, noLineNumbers);
    }
    return sources;
};
exports.readSource = readSource;
const parseImports = (rawCode, dirPath, sources, noLineNumbers) => {
    const imports = (0, utils_2.scanImports)(rawCode);
    for (const mod of imports) {
        if (mod.startsWith('.')) {
            const filePath = (0, utils_2.resolve)(dirPath, mod);
            if (filePath) {
                sources.push((0, exports.readFileSource)(filePath, noLineNumbers));
            }
        }
    }
};
exports.parseImports = parseImports;
const readFileSource = (filePath, noLineNumbers) => {
    let code = '';
    const name = utils_1.path.basename(filePath);
    if (utils_1.fs.existsSync(filePath)) {
        code = utils_1.fs.readFileSync(filePath, 'utf-8');
    }
    else {
        (0, utils_1.warn)('not exists path:' + utils_1.path);
    }
    return {
        name,
        rawCode: code,
        highlightCode: (0, utils_2.highlight)(code, utils_1.path.extname(name).slice(1), noLineNumbers),
    };
};
exports.readFileSource = readFileSource;
