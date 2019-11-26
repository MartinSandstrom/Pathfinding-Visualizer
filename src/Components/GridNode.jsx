import React from "react";

const GridNode = ({ isFinish, isStart, row, col }) => {
    const custom = isStart ? "start-node" : isFinish ? "end-node" : "";
    return (
        <div id={`node-${row}-${col}`} className={`node ${custom}`}>
            {" "}
            {isStart ? "S" : isFinish ? "E" : ""}
        </div>
    );
};

export default GridNode;
