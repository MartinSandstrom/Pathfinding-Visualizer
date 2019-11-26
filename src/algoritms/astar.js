export function astar(grid, startNode, finishNode) {
    const allNodes = getAllNodes(grid);
    const visited = [];
    for (let i = 1; i < allNodes.length; i++) {
        const node = allNodes[i];
        if (node === finishNode) {
            return visited;
        } else {
            visited.push(node);
        }
    }
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
