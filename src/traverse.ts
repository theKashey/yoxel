import {SemanticTree} from "./types";

const isHeader = (test: SemanticTree): boolean => test.category === 'header';

export const listHeaders = (tree: SemanticTree): SemanticTree[] => {
  const headers: SemanticTree[] = [];
  const walk = (branches: SemanticTree[]) => {
    for (const test of branches) {
      if (isHeader(test)) {
        headers.push(test);
      }
      walk(test.children);
    }
  }
  walk(tree.children);
  return headers;
}

export const findNearestHeader = (branches: SemanticTree[]): SemanticTree | undefined => {
  for (const test of branches) {
    if (isHeader(test)) {
      return test;
    }
  }
  return undefined;
}