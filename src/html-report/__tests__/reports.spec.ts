import { buildReport } from '../report';
import { buildTree } from '../../scanner';

describe('html-reports', () => {
  const genTree = (html: string) => {
    document.body.innerHTML = html;
    return buildTree(document.body);
  };

  it('handles empty html', () => {
    expect(buildReport(genTree(''))).toBe('');
  });

  it('handles empty html', () => {
    expect(
      buildReport(
        genTree(`
    <header><nav>test</nav></header>
    <main><h1>title</h1><section><h2>caption</h2></section></main>
    <footer></footer>
    `)
      )
    ).toMatchInlineSnapshot(`
      "
      <div class=\\"yoxel-type-area yoxel-root\\" data-type=\\"root\\">
      <ul><li>
      <div class=\\"yoxel-type-area yoxel-header\\" data-type=\\"header\\">
      <ul><li>
      <div class=\\"yoxel-type-area yoxel-nav\\" data-type=\\"nav\\">

      </div>
      </li></ul>
      </div>
      </li>
      <li>
      <div class=\\"yoxel-type-area yoxel-main\\" data-type=\\"main\\">
      <ul><li>
      <div class=\\"yoxel-type-node yoxel-h1\\" data-type=\\"h1\\">title

      </div>
      </li>
      <li>
      <div class=\\"yoxel-type-area yoxel-section\\" data-type=\\"section\\">
      <ul><li>
      <div class=\\"yoxel-type-node yoxel-h2\\" data-type=\\"h2\\">caption

      </div>
      </li></ul>
      </div>
      </li></ul>
      </div>
      </li>
      <li>
      <div class=\\"yoxel-type-area yoxel-footer\\" data-type=\\"footer\\">

      </div>
      </li></ul>
      </div>
      "
    `);
  });
});
