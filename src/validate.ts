import {SemanticTree} from "./types";

type LeafValidation = (parents: SemanticTree[], children: SemanticTree) => string | undefined;

export const validate = (tree: SemanticTree, _rule: LeafValidation): SemanticTree => {
  return tree;
}

