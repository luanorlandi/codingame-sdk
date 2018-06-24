import CellMap from './../../../../my-modules/CellMap';
import Unit from './../../../../my-modules/Unit';
import constants from './constants.json';

const { WANDERER_SPAWNER } = constants.map;

export default class Maze extends CellMap {
  constructor(
    sanityLossLonely,
    sanityLossGroup,
    wandererSpawnTime,
    wandererLifeTime,
    rows,
  ) {
    super(rows);

    this.sanityLossLonely = sanityLossLonely;
    this.sanityLossGroup = sanityLossGroup;
    this.wandererSpawnTime = wandererSpawnTime;
    this.wandererLifeTime = wandererLifeTime;

    this.spawners = rows.reduce((spawners, cells, y) => {
      for (let i = 0; i < cells.length; i += 1) {
        if (cells[i] === WANDERER_SPAWNER) {
          const spawner = new Unit(0, i, y);
          spawners.push(spawner);
        }
      }

      return spawners;
    }, []);
  }
}
