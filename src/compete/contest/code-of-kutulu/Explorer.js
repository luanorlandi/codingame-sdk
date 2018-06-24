import Unit from './../../../../my-modules/Unit';
import Position from './../../../../my-modules/Position';

export default class Explorer extends Unit {
  moveAwayPosition = (position) => {
    const x = this.position.x - position.x;
    const y = this.position.y - position.y;
    return new Position(this.position.x + x, this.position.y + y);
  }
}
