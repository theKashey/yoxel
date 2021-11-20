import { buildTree } from '../src/index';

describe('Does nothing', () => {
  const genTree = (html: string) => {
    document.body.innerHTML = html;
    return buildTree(document.body);
  };

  it('works for empty', () => {
    expect(genTree('')).toMatchInlineSnapshot(`
      Object {
        "category": "area",
        "children": Array [],
        "node": <body />,
        "payload": undefined,
        "type": "root",
      }
    `);
  });

  it('works for valid', () => {
    expect(genTree('<main><h1>test</h1></main>')).toMatchInlineSnapshot(`
      Object {
        "category": "area",
        "children": Array [
          Object {
            "category": "area",
            "children": Array [
              Object {
                "category": "node",
                "children": Array [],
                "node": <h1>
                  test
                </h1>,
                "payload": "test",
                "type": "h1",
              },
            ],
            "node": <main>
              <h1>
                test
              </h1>
            </main>,
            "payload": undefined,
            "type": "main",
          },
        ],
        "node": <body>
          <main>
            <h1>
              test
            </h1>
          </main>
        </body>,
        "payload": undefined,
        "type": "root",
      }
    `);
  });

  it('works for invalid', () => {
    expect(genTree('<main><h1>test</h1><h3>test</h3></main>')).toMatchInlineSnapshot(`
      Object {
        "category": "area",
        "children": Array [
          Object {
            "category": "area",
            "children": Array [
              Object {
                "category": "node",
                "children": Array [],
                "node": <h1>
                  test
                </h1>,
                "payload": "test",
                "type": "h1",
              },
              Object {
                "category": "node",
                "children": Array [],
                "node": <h3>
                  test
                </h3>,
                "payload": "test",
                "type": "h3",
              },
            ],
            "node": <main>
              <h1>
                test
              </h1>
              <h3>
                test
              </h3>
            </main>,
            "payload": undefined,
            "type": "main",
          },
        ],
        "node": <body>
          <main>
            <h1>
              test
            </h1>
            <h3>
              test
            </h3>
          </main>
        </body>,
        "payload": undefined,
        "type": "root",
      }
    `);
  });
});
