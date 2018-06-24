import constants from './constants.json';
import Maze from './Maze';
import Explorer from './Explorer';
import Wanderer from './Wanderer';

const { MAX_TURN, ENTITY_EXPLORER, ENTITY_WANDERER } = constants;

parseInt(readline(), 10);
const height = parseInt(readline(), 10);
const rows = [];

for (let i = 0; i < height; i += 1) {
  const row = readline();
  rows.push(row);
}

const mazeInputs = readline().split(' ');
const sanityLossLonely = parseInt(mazeInputs[0], 10);
const sanityLossGroup = parseInt(mazeInputs[1], 10);
const wandererSpawnTime = parseInt(mazeInputs[2], 10);
const wandererLifeTime = parseInt(mazeInputs[3], 10);

const maze = new Maze(
  sanityLossLonely,
  sanityLossGroup,
  wandererSpawnTime,
  wandererLifeTime,
  rows,
);

let turn = 0;

while (turn < MAX_TURN) {
  const explorers = [];
  const wanderers = [];

  const entityCount = parseInt(readline(), 10);
  for (let i = 0; i < entityCount; i += 1) {
    const entityInputs = readline().split(' ');
    const entityType = entityInputs[0];
    const id = parseInt(entityInputs[1], 10);
    const x = parseInt(entityInputs[2], 10);
    const y = parseInt(entityInputs[3], 10);
    const param0 = parseInt(entityInputs[4], 10);
    const param1 = parseInt(entityInputs[5], 10);
    const param2 = parseInt(entityInputs[6], 10);

    switch (entityType) {
      case ENTITY_EXPLORER: {
        const explorer = new Explorer(id, x, y, param0, param1, param2);
        explorers.push(explorer);
        break;
      } case ENTITY_WANDERER: {
        const wanderer = new Wanderer(id, x, y, param0, param1, param2);
        wanderers.push(wanderer);
        break;
      } default: {
        printErr(`Unknown entity type ${entityType}`);
      }
    }
  }

  const myExplorer = explorers[0];
  const enemyExplorers = explorers.slice(1, explorers.length);
  const closestExplorer = myExplorer.closestUnit(enemyExplorers);
  const closestWanderer = myExplorer.closestUnit(wanderers);

  if (closestWanderer === null) {
    const { position } = closestExplorer;
    print(`MOVE ${position.x} ${position.y}`);
  } else if (closestExplorer === null) {
    print('WAIT');
  } else {
    const explorerDistance = myExplorer.position.distanceTo(closestExplorer.position);
    const wandererDistance = myExplorer.position.distanceTo(closestWanderer.position);

    if (explorerDistance + 1 < wandererDistance) {
      const { position } = closestExplorer;
      print(`MOVE ${position.x} ${position.y}`);
    } else {
      const position = myExplorer.moveAwayPosition(closestWanderer.position);
      print(`MOVE ${position.x} ${position.y}`);
    }
  }

  turn += 1;
}
