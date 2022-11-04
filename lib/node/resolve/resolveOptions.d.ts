import type { CodeBlockPluginOptions } from '..';
import type { CodeLocaleConfig } from '../../shared';
export declare const DEFAULT_LOCALE_OPTIONS: CodeLocaleConfig;
/**
 * Create options with default values
 */
export declare const resolveOptions: ({ name, headers, config, locales, }: Partial<CodeBlockPluginOptions>) => CodeBlockPluginOptions;
