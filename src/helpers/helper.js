export const START_NODE_ROW = 5;
export const START_NODE_COL = 22;
export const FINISH_NODE_ROW = 20;
export const FINISH_NODE_COL = 10;

export const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 25; row++) {
        const currentRow = [];
        for (let col = 0; col < 25; col++) {
            currentRow.push(createNode(col, row));
        }
        grid.push(currentRow);
    }
    return grid;
};
const createNode = (col, row) => {
    return {
        col,
        row,
        isStart: row === START_NODE_ROW && col === START_NODE_COL,
        isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
        distance: Infinity,
        isVisited: false,
        isWall: false,
        previousNode: null
    };
};
