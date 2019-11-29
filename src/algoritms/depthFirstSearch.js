export function depthFirst(grid, currentNode, finishNode) {
    const { allVisited } = depthFirstReq(grid, currentNode, finishNode);
    return allVisited;
}

const depthFirstReq = (grid, currentNode, finishNode, allVisited = []) => {
    allVisited.push(currentNode);
    currentNode.isVisited = true;
    if (currentNode === finishNode) {
        return { allVisited, found: true };
    }
    const neighbors = getUnvisitedNonWallNeighbors(currentNode, grid);
    for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];
        neighbor.previousNode = currentNode;
        neighbor.isVisited = true;
        const { found } = depthFirstReq(grid, neighbor, finishNode, allVisited);
        if (found) {
            return { allVisited, found: true };
        }
    }
    return { allVisited, found: false };
};

function getUnvisitedNonWallNeighbors(node, grid) {
    const neighbors = [];
    const { col, row } = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(n => !n.isVisited && !n.isWall);
}
