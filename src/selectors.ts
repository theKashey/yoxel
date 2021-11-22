import {findNearestHeading} from "./traverse";
import {SemanticTree} from "./types";

type AttachedHeading =
  null | {
  heading: HTMLElement,
  payload: string;
  type: 'labelledby' | 'contain';
} | {
  payload: string;
  type: 'labeled';
} | {
  payload: string;
  type: 'error' | 'warning';
}

export const findHeadingForNode = (node: HTMLElement): AttachedHeading => {
  const labeledBy = node.getAttribute('aria-labelledby');
  const label = node.getAttribute('aria-label');
  if (labeledBy) {
    const target = node.ownerDocument.getElementById(labeledBy);
    if (!target) {
      return {
        type: 'error',
        payload: `missing label target ${labeledBy}`,
      }
    }
    return {
      type: 'labelledby',
      payload: target.innerText,
      heading: target
    }
  }
  if (label) {
    return {
      type: 'labeled',
      payload: label
    }
  }
  return null;
}

/**
 * returns a label for a given tree node
 * @param branch
 */
export const getCorrespondingHeading = (branch: SemanticTree): AttachedHeading => {
  const nodeStatus = findHeadingForNode(branch.node);
  if (nodeStatus) {
    return nodeStatus;
  }
  const header = findNearestHeading(branch.children);
  if (header) {
    return {
      type: 'contain',
      payload: header.payload!,
      heading: header.node,
    }
  }
  return null;
}