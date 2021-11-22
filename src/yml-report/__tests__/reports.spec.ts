import { buildReport } from '../report';
import { buildTree } from '../../scanner';
import { listHeadings } from '../../traverse';

describe('yaml-reports', () => {
  const genTree = (html: string) => {
    document.body.innerHTML = html;
    return buildTree(document.body);
  };

  it('handles empty html', () => {
    expect(buildReport(genTree(''))).toBe('');
  });

  it('handles page html', () => {
    const report = genTree(`
    <header><nav>test</nav></header>
    <main><h1>title</h1><section><h2>caption</h2><h2>caption</h2><h3>caption</h3><h1>caption</h1></section></main>
    <footer></footer>
    `);
    expect(buildReport(report)).toMatchInlineSnapshot(`
      "- area/header :
          - area/nav 
      - area/main :
          - header/h1 title
          - area/section :
              - header/h2 _caption
              - header/h2 _caption
              - header/h3 __caption
              - header/h1 caption
      - area/footer 
      "
    `);
    expect(buildReport(listHeadings(report))).toMatchInlineSnapshot(`
      "- header/h1 title
      - header/h2 _caption
      - header/h2 _caption
      - header/h3 __caption
      - header/h1 caption
      "
    `);
  });
});
