import Position from './../../../../my-modules/Position';
import Explorer from './Explorer';
import heuristics from './heuristics.json';

const { MIN_SANITY_TO_PLAN } = heuristics;

describe('test move away behaviour', () => {
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
});

describe('test explorer effects', () => {
  describe('plan', () => {
    test('when in low sanity', () => {
      const explorer = new Explorer(0, 0, 0, MIN_SANITY_TO_PLAN);
      const isPlan = explorer.shouldPlan();
      expect(isPlan).toBeTruthy();
    });

    test('when not in low sanity', () => {
      const explorer = new Explorer(0, 0, 0, MIN_SANITY_TO_PLAN + 1);
      const isPlan = explorer.shouldPlan();
      expect(isPlan).toBeFalsy();
    });
  });

/*   describe('test light', () => {
    test('light when surrounded', () => {

    });

    test('not surrounded', () => {

    });

    test('surrounded but no more lights left', () => {

    });
  }); */
});
