"use strict";
// Modify from https://www.npmjs.com/package/import-scan
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanImports = void 0;
const scanImports = (code) => {
    const imports = [];
    const lexer = /(\/\/.*$)|(\/\*)|(?:^[ \t]*import(?: [^\n]+? from)?[ ]+["'`]([^"'`]+)["'`])|(?:(?<=[^\w.$])(?:require|import)\(\s*["'`]([^"'`]+)["'`]\s*\))/gm;
    while (true) {
        const match = lexer.exec(code);
        if (!match)
            return imports;
        // Line comment
        if (match[1])
            continue;
        // Block comment
        if (match[2]) {
            let start = match.index + 2;
            while (true) {
                const end = code.indexOf('*/', start);
                if (end < 0)
                    return imports;
                if (isEscaped(code, end)) {
                    start = end + 1;
                    continue;
                }
                lexer.lastIndex = end + 2;
                break;
            }
        }
        // Imported path
        else {
            const path = match[3] || match[4];
            if (imports.indexOf(path) < 0)
                imports.push(path);
        }
    }
};
exports.scanImports = scanImports;
// Returns true when the given string ends with an unescaped escape.
function isEscaped(str, fromIndex) {
    const ESCAPE = '\\'.charCodeAt(0);
    let i = fromIndex;
    let n = 0;
    while (i && str.charCodeAt(--i) === ESCAPE)
        n++;
    return n % 2 === 1;
}
