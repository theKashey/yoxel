import {SemanticTree} from "../types";

const getPrefix = (tree: SemanticTree): string => {
  const pad = (n: number) => `${'-'.repeat(n)} `;

  switch (tree.type) {
    case 'h1':
      return pad(0);
    case 'h2':
      return pad(1);
    case 'h3':
      return pad(2);
    case 'h4':
      return pad(3);
    case 'h5':
      return pad(4);
  }
  return '';
}

export const buildReport = (tree: SemanticTree): string => {

  const payload = getPrefix(tree) + (tree.payload || '');
  const open = `<div class="yoxel-type-${tree.category} yoxel-${tree.type}" data-type="${tree.type}">${payload}`
  const middle = tree.children.length ? `<ul>${tree.children.map(block => `<li>${buildReport(block)}</li>`).join('\n')}</ul>` : '';
  const close = `</div>`

  if (tree.type === 'root' && !(middle || tree.payload)) {
    return '';
  }
  return `\n${open}\n${middle}\n${close}\n`
}