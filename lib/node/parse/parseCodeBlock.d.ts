import type { App } from '@vuepress/core';
import type { CodeBlockPluginOptions } from '..';
import type { PageCodeDepsHelper } from '../utils';
export declare const parseCodeBlock: (app: App, store: PageCodeDepsHelper, options: CodeBlockPluginOptions, content: string, pagePath: string) => string;
