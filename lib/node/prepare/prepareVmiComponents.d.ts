import type { App } from '@vuepress/core';
import type { PageCodeDepsHelper } from '../utils';
/**
 * Generate component path to components map temp file
 */
export declare const prepareVmiComponents: (app: App, store: PageCodeDepsHelper) => Promise<void>;
