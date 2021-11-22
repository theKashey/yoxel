import {SemanticTree} from "../types";

const pad = (n: number, char: string) => char.repeat(Math.max(0, n));

const getPrefix = (tree: SemanticTree): string => {
  switch (tree.type) {
    case 'h1':
      return pad(0, '_');
    case 'h2':
      return pad(1, '_');
    case 'h3':
      return pad(2, '_');
    case 'h4':
      return pad(3, '_');
    case 'h5':
      return pad(4, '_');
  }
  return '';
}

export const buildReport = (tree: SemanticTree | SemanticTree[], depth = 0): string => {
  if (!Array.isArray(tree) && tree.type === 'root') {
    return buildReport(tree.children, -1);
  }
  const childDepth = Array.isArray(tree) && depth===0 ? depth : depth + 1;
  const prefix = pad(depth, '  ');
  const child = pad(childDepth, '  ');
  const ch = Array.isArray(tree) ? tree : tree.children;
  const open = Array.isArray(tree) ? '' : `${prefix}- ${tree.category}/${tree.type} ${getPrefix(tree) + (tree.payload || '')}${ch.length ? ':' : ''}\n`
  const middle = ch.length ? ch.map(block => `${child}${buildReport(block, childDepth)}`).join('') : '';

  return `${open}${middle}`
}