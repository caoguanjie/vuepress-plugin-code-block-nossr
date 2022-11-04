import type { Plugin } from '@vuepress/core';
import type { CodeUserConfig, CodeLocaleConfig } from '../shared';
/**
 * Options of @bfehub/vuepress-plugin-code-block
 */
export interface CodeBlockPluginOptions {
    name: string;
    headers: boolean;
    config: CodeUserConfig;
    locales: CodeLocaleConfig;
}
export declare const codeBlockPlugin: (config?: Partial<CodeBlockPluginOptions>) => Plugin;
