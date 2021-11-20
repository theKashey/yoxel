import {SemanticNode, SemanticTree} from "./types";
import {headers, locations} from "./known-nodes";
import {findPlacement} from "./utils";

export const buildTree = (root: HTMLElement) => {
  const semanticBlocks = root.querySelectorAll<HTMLElement>(`${headers.join(',')}, ${locations.join(',')}`);

  const tree: SemanticTree = {
    category: 'area',
    type: 'root',
    payload: undefined,
    node: root,
    children: [],
  }

  console.log(Array.from(semanticBlocks).map(x => x.tagName));

  semanticBlocks.forEach((block) => {
    const isHeader = headers.includes(block.tagName.toLowerCase() as any);
    const parent = findPlacement(tree, block);
    const element: SemanticTree = {
      category: isHeader ? 'node' : 'area',
      type: block.tagName.toLowerCase() as SemanticNode,
      payload: isHeader ? block.textContent : undefined,
      node: block,
      children: [],
    }

    parent.children.push(element);
  })
  return tree;
}