import {SemanticTree} from "./types";

type LeafValidation = (parent: SemanticTree, children: SemanticTree) => string | undefined;

export const validate = (tree: SemanticTree, _rule: LeafValidation): SemanticTree => {
  return tree;
}