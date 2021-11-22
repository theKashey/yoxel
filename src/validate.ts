import {SemanticTree} from "./types";

type LeafValidation = (parents: SemanticTree[], children: SemanticTree) => string | undefined;

/**
 * @deprecated not implemented
 * @param tree
 * @param _rule
 */
export const validate = (tree: SemanticTree, _rule: LeafValidation): SemanticTree => {
  return tree;
}

