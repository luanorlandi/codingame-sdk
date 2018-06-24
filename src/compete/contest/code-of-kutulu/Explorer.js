import Unit from './../../../../my-modules/Unit';
import Position from './../../../../my-modules/Position';
import heuristics from './heuristics.json';

const { MIN_SANITY_TO_PLAN } = heuristics;
export default class Explorer extends Unit {
  constructor(id, x, y, sanity, planUses, lightUses) {
    super(id, x, y);

    this.sanity = sanity;
    this.planUses = planUses;
    this.lightUses = lightUses;
  }

  moveAwayPosition = (position) => {
    const x = this.position.x - position.x;
    const y = this.position.y - position.y;
    return new Position(this.position.x + x, this.position.y + y);
  }

  shouldPlan = () => this.sanity <= MIN_SANITY_TO_PLAN;
}
