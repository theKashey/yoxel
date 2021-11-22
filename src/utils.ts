import {SemanticTree} from "./types";

/**
 * returns parent tree branch for a given node
 * @internal
 * @param tree
 * @param target
 */
export const findPlacement = (tree: SemanticTree, target: HTMLElement): SemanticTree => {
  for (const branch of tree.children) {
    if (branch.node.contains(target)) {
      return findPlacement(branch, target)
    }
  }
  return tree;
}