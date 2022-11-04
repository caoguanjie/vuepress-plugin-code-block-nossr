import type { Page } from '@vuepress/core';
import type { PageCodeDep, PageCodeDepsHelper } from '../utils';
export declare const resolveScriptSetup: (page: Page, store: PageCodeDepsHelper) => void;
export declare const combineScriptSetup: (deps: PageCodeDep[], original: string) => string;
