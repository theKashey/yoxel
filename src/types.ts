import {headers, locations} from "./known-nodes";

export type SemanticNode = (typeof locations)[number] | (typeof headers)[number]

export type LeafMessage = {
  type: 'error' | 'warning' | 'info';
  message: string;
}

export type SemanticTree = {
  category: 'area' | 'header',
  type: 'root' | SemanticNode,
  payload: string | undefined | null;
  node: HTMLElement;
  children: SemanticTree[];

  message?: LeafMessage;
}