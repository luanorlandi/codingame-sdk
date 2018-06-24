import Unit from './Unit';

test('closest from (0, 0) to [(0, 6), (3, 4), (5, 2)]', () => {
  const unit = new Unit(0, 0, 0);
  const units = [
    new Unit(1, 0, 6),
    new Unit(2, 3, 4),
    new Unit(3, 5, 2),
  ];

  const closest = unit.closestUnit(units);
  expect(closest.id).toBe(2);
});

test('closest from (1, 2) to []', () => {
  const unit = new Unit(0, 1, 2);
  const units = [];

  const closest = unit.closestUnit(units);
  expect(closest).toBeNull();
});
