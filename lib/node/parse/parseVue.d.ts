import type { App } from '@vuepress/core';
import type { Node } from 'posthtml-parser';
import type { PageCodeDep } from '../utils';
export declare const parseVue: (app: App, node: Node, dep: PageCodeDep) => Node;
