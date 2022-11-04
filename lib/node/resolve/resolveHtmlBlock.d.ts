import type { App } from '@vuepress/core';
import type * as MarkdownIt from 'markdown-it';
import type { CodeBlockPluginOptions } from '..';
import type { PageCodeDepsHelper } from '../utils';
export declare const resolveHtmlBlock: (md: MarkdownIt, app: App, store: PageCodeDepsHelper, options: CodeBlockPluginOptions) => void;
