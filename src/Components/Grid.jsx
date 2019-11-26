import React from "react";
import "./Grid.css";

import GridNode from "./GridNode";
import { dijkstra, getNodesInShortestPathOrder } from "../algoritms/dijkstra";
import {
    getInitialGrid,
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL
} from "../helpers/helper";
import { animateHtml, resetAnimations } from "../DOM/htmlAnimations";

const ALGOS = {
    dijkstra: dijkstra
};

export default class Grid extends React.Component {
    state = {
        grid: [],
        algo: "dijkstra"
    };

    componentDidMount = () => {
        const grid = getInitialGrid();
        this.setState({ grid });
    };

    reset = () => {
        resetAnimations(this.state.grid);
    };

    visualize = () => {
        const { grid, algo } = this.state;
        const algorithm = ALGOS[algo];
        if (!algorithm) {
            alert(`${algorithm} not implemented yet`);
            return;
        }
        const startNode = grid[START_NODE_ROW][START_NODE_COL];
        const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL];
        const visitedNodesInOrder = algorithm(grid, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
            finishNode
        );
        animateHtml(visitedNodesInOrder, nodesInShortestPathOrder);
    };

    render() {
        const { grid } = this.state;
        return (
            <div>
                <select
                    value={this.state.algo}
                    onChange={e => this.setState({ algo: e.target.value })}
                >
                    <option value="dijkstra">Dijkstra</option>
                    <option value="test">test</option>
                </select>

                <div>
                    <button onClick={this.visualize}>Do the dance</button>
                </div>
                <button onClick={this.reset}>Reset</button>
                <div style={{ width: 750 }}>
                    {grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    const {
                                        row,
                                        col,
                                        isFinish,
                                        isStart
                                    } = node;
                                    return (
                                        <GridNode
                                            key={nodeIdx}
                                            col={col}
                                            isFinish={isFinish}
                                            isStart={isStart}
                                            row={row}
                                        ></GridNode>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
