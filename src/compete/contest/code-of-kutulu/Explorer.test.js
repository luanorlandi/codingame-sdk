import Position from './../../../../my-modules/Position';
import Explorer from './Explorer';

test('explorer move away position in (3, 5) from (2, 2)', () => {
  const explorer = new Explorer(0, 3, 5);
  const position = new Position(2, 2);
  const moveAway = explorer.moveAwayPosition(position);
  expect(moveAway.x).toBe(4);
  expect(moveAway.y).toBe(8);
});

test('explorer move away position in (4, 5) from (5, 5)', () => {
  const explorer = new Explorer(0, 4, 5);
  const position = new Position(5, 5);
  const moveAway = explorer.moveAwayPosition(position);
  expect(moveAway.x).toBe(3);
  expect(moveAway.y).toBe(5);
});
