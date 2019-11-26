import React from "react";

const GridNode = ({ isFinish, isStart, isWall, row, col, markAsWall }) => {
    const custom = isStart ? "start-node" : isFinish ? "end-node" : "";
    return (
        <div
            id={`node-${row}-${col}`}
            className={`node ${custom} ${isWall ? " node-wall" : ""}`}
            onClick={() => markAsWall({ row, col })}
        >
            {" "}
            {isStart ? "S" : isFinish ? "E" : ""}
        </div>
    );
};

export default GridNode;
