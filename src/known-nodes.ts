export const headers: ReadonlyArray<`h${1 | 2 | 3 | 4 | 5 | 6}`> = new Array(5).fill(1).map((_, index) => `h${index + 1}` as `h${1 | 2 | 3 | 4 | 5}`);

/**
 * known tags which creates a context/region
 */
export const locations = [
  'header',
  'footer',
  'main',

  'aside',
  'nav',

  'article',
  'section',
] as const;