import type { CodeSource } from '../../shared';
export declare const readSource: (filePath: string, scanImport?: boolean, noLineNumbers?: boolean) => CodeSource[];
export declare const parseImports: (rawCode: string, dirPath: string, sources: CodeSource[], noLineNumbers: boolean) => void;
export declare const readFileSource: (filePath: string, noLineNumbers: boolean) => CodeSource;
