import type { CodeNodeConfig } from '../../shared';
export interface PageCodeDep {
    /**
     * 组件所在页面路径
     */
    pagePath: string;
    /**
     * 组件绝对路径
     */
    compPath: string;
    /**
     * 组件 hash 名称
     */
    compHash: string;
    /**
     * 组件名称
     */
    compName: string;
    /**
     * 组件属性
     */
    compAttrs: CodeNodeConfig;
    /**
     * 是否生成 iframe 模式
     */
    isGenerateIframe?: boolean;
}
/**
 * Page deps helper
 */
export interface PageCodeDepsHelper {
    /**
     * Get all code's that depend on the `pagePath`
     */
    get: (path: string) => PageCodeDep[];
    /**
     * Handle deps when adding a code
     */
    add: (code: PageCodeDep) => void;
    /**
     * Handle deps when removing a code
     */
    remove: (code: PageCodeDep) => void;
}
/**
 * Create page deps helper
 */
export declare const createPageCodeDepsHelper: () => PageCodeDepsHelper;
