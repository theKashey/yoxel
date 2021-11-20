import {SemanticTree} from "../types";

export const buildReport = (tree: SemanticTree): string => {
  const open = `<div class="yoxel-type-${tree.category} yoxel-${tree.type}" data-type="${tree.type}">${tree.payload || ''}`
  const middle = tree.children.length ? `<ul>${tree.children.map(block => `<li>${buildReport(block)}</li>`).join('\n')}</ul>` : '';
  const close = `</div>`

  if (tree.type === 'root' && !(middle || tree.payload)) {
    return '';
  }
  return `\n${open}\n${middle}\n${close}\n`
}