//Taxicab Geometry

const blocksAway = function(directions) {

  let currentDirection = "east";
  let totalMoves = 0;
  let currentPosition = [0, 0];
  let finalDestination = {};

  //Count the total number of moves of the taxi
  for (let i = 1; i < directions.length; i += 2) {
    totalMoves = totalMoves + directions[i];
  }

  for (let i = 0; i < directions.length; i += 2) {
    if (currentDirection === "east" && currentPosition[1] === 0) {
      if (directions[i] === "right") {
        currentPosition[0] = currentPosition[0] + directions[i + 1];
      } else if (directions[i] === "left") {
        currentPosition[1] = currentPosition[1] + directions[i + 1];
        currentDirection = "north";
      }
    } else if (currentDirection === "east" && currentPosition[1] != 0) {
      if (directions[i] === "right") {
        currentPosition[1] = currentPosition[1] - directions[i + 1];
        currentDirection = "south";
      } else if (directions[i] === "left") {
        currentPosition[1] = currentPosition[1] + directions[i + 1];
        currentDirection = "north";
      }
    } else if (currentDirection === "north") {
      if (directions[i] === "right") {
        currentPosition[0] = currentPosition[0] + directions[i + 1];
        currentDirection = "east";
      } else if (directions[i] === "left") {
        currentPosition[0] = currentPosition[0] - directions[i + 1];
        currentDirection = "west";
      }
    } else if (currentDirection === "west") {
      if (directions[i] === "right") {
        currentPosition[1] = currentPosition[1] + directions[i + 1];
        currentDirection = "north";
      } else if (directions[i] === "left") {
        currentPosition[1] = currentPosition[1] - directions[i + 1];
        currentDirection = "south";
      }
    } else if (currentDirection === "south") {
      if (directions[i] === "right") {
        currentPosition[0] = currentPosition[0] - directions[i + 1];
        currentDirection = "west";
      } else if (directions[i] === "left") {
        currentPosition[0] = currentPosition[0] + directions[i + 1];
        currentDirection = "east";
      }
    }
  }
  finalDestination.east = currentPosition[0];
  finalDestination.north = currentPosition[1];
  return finalDestination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));

// Exepected Outputs
// {east: 1, north: 3}
// {east: 3, north: 3}
// {east: 0, north: 0}

// The taxi driver will always start at the same position,
// in the most south west position on the grid.
// This means that the output will only need to specify an east and north position,
// since the taxi driver can only end up in these East and North of the starting point.
