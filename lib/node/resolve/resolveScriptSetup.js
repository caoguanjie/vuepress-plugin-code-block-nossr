"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineScriptSetup = exports.resolveScriptSetup = void 0;
const scriptRegExp = /<script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/script>/;
const resolveScriptSetup = (page, store) => {
    const deps = store.get(page.filePath);
    if (!deps.length)
        return;
    let i = 0;
    let original = '';
    for (const tag of page.sfcBlocks) {
        if (tag.trim().startsWith('<script')) {
            original = tag.match(scriptRegExp)?.[3] ?? '';
            break;
        }
        i++;
    }
    page.sfcBlocks[i] = (0, exports.combineScriptSetup)(deps, original);
};
exports.resolveScriptSetup = resolveScriptSetup;
const combineScriptSetup = (deps, original) => {
    return `\n
<script lang="ts" setup>
  ${deps
        .map(({ compName, compPath }) => `import ${compName} from '${compPath}'`)
        .join('\n')}

  ${original}\n
</script>\n`;
};
exports.combineScriptSetup = combineScriptSetup;
