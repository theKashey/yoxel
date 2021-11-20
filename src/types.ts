import {headers, locations} from "./known-nodes";

export type SemanticNode = (typeof locations)[number] | (typeof headers)[number]

export type SemanticTree = {
  category: 'area' | 'node',
  type: 'root' | SemanticNode,
  payload: string | undefined | null;
  node: HTMLElement;
  children: SemanticTree[];

  errorMessage?: string;

  control?(node: HTMLElement): string | undefined;
}