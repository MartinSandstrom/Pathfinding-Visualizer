export function astar(grid, startNode, finishNode) {
    const allNodes = getAllNodes(grid);
    return allNodes;
}

function getAllNodes(grid) {
    const nodes = [];
    for (const row of grid) {
        for (const node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}
