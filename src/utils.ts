import {SemanticTree} from "./types";

export const findPlacement = (tree: SemanticTree, target: HTMLElement): SemanticTree => {
  for (const branch of tree.children) {
    if (branch.node.contains(target)) {
      return findPlacement(branch, target)
    }
  }
  return tree;
}