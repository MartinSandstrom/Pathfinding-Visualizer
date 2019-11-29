import React from "react";

const GridNode = ({ isFinish, isStart, isWall, row, col, onMouseDown, onMouseEnter, onMouseUp }) => {
    const custom = isStart ? "start-node" : isFinish ? "end-node" : "";
    return (
        <div
            onMouseDown={() => onMouseDown({ row, col })}
            onMouseEnter={() => onMouseEnter({ row, col })}
            onMouseUp={() => onMouseUp({ row, col })}
            id={`node-${row}-${col}`}
            className={`node ${custom} ${isWall ? " node-wall" : ""}`}
        >
            {" "}
            {isStart ? "S" : isFinish ? "E" : ""}
        </div>
    );
};

export default GridNode;
