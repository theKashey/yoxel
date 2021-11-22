import {SemanticTree} from "./types";

const isHeader = (test: SemanticTree): boolean => test.category === 'header';

/**
 * lists headings in the given document
 * @param tree
 * @returns list of headers on the given page
 */
export const listHeadings = (tree: SemanticTree): SemanticTree[] => {
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

/**
 * finds heading in the current branch
 * @param branches
 */
export const findNearestHeading = (branches: SemanticTree[]): SemanticTree | undefined => {
  for (const test of branches) {
    if (isHeader(test)) {
      return test;
    }
  }
  return undefined;
}