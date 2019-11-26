import {
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL
} from "../helpers/helper";

const animateShortestPath = nodesInShortestPathOrder => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
        setTimeout(() => {
            const node = nodesInShortestPathOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className +=
                " node-shortest-path";
        }, 10 * i);
    }
};

export function resetAnimations(grid) {
    for (let row = 0; row < 25; row++) {
        const currentRow = [];
        for (let col = 0; col < 25; col++) {
            let className = "node";
            if (START_NODE_ROW === row && START_NODE_COL === col) {
                className += " start-node";
            } else if (FINISH_NODE_ROW === row && FINISH_NODE_COL === col) {
                className += " end-node";
            }
            document.getElementById(`node-${row}-${col}`).className = className;
        }
        grid.push(currentRow);
    }
}

export function animateHtml(visitedNodesInOrder, nodesInShortestPathOrder) {
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
            setTimeout(() => {
                animateShortestPath(nodesInShortestPathOrder);
            }, 50 * i);
            return;
        }
        setTimeout(() => {
            const node = visitedNodesInOrder[i];
            document.getElementById(`node-${node.row}-${node.col}`).className +=
                " node-visited";
        }, 50 * i);
    }
}
