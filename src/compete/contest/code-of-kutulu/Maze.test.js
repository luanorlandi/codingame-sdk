import Maze from './Maze';

test('map spawners [(2, 2), (17, 2), (2, 13), (17, 13)]', () => {
  const map = [
    '####################',
    '##................##',
    '#.w###.######.###w.#',
    '#.#....#....#....#.#',
    '#.#.##.#.##.#.##.#.#',
    '#...##...##...##...#',
    '#.#....#....#....#.#',
    '#.###.##.##.##.###.#',
    '#.###.##.##.##.###.#',
    '#.#....#....#....#.#',
    '#...##...##...##...#',
    '#.#.##.#.##.#.##.#.#',
    '#.#....#....#....#.#',
    '#.w###.######.###w.#',
    '##................##',
    '####################',
  ];

  const maze = new Maze(3, 1, 3, 40, map);

  const positions = maze.spawners.map((spawner) => {
    const { position } = spawner;
    return {
      x: position.x,
      y: position.y,
    };
  });

  expect(positions).toHaveLength(4);
  expect(positions).toContainEqual({ x: 2, y: 2 });
  expect(positions).toContainEqual({ x: 17, y: 2 });
  expect(positions).toContainEqual({ x: 2, y: 13 });
  expect(positions).toContainEqual({ x: 17, y: 13 });
});
