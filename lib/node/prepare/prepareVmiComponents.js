"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepareVmiComponents = void 0;
/**
 * Generate component path to components map temp file
 */
const prepareVmiComponents = async (app, store) => {
    const map = new Map();
    for (const page of app.pages) {
        for (const comp of store.get(page.filePath)) {
            comp.isGenerateIframe && map.set(comp.compPath, comp);
        }
    }
    const content = `\
import { defineAsyncComponent } from 'vue'

export const components = {\
${[...map.values()]
        .map(({ compHash, compPath }) => `
  // path: ${compPath}
  ${JSON.stringify(compHash)}: defineAsyncComponent(() => import(${compHash ? `/* webpackChunkName: "${compHash}" */` : ''}${JSON.stringify(compPath)})),`)
        .join('')}
}
`;
    await app.writeTemp('internal/pagesVmiComponents.js', content);
};
exports.prepareVmiComponents = prepareVmiComponents;
