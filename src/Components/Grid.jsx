import React from "react";
import "./Grid.css";

import GridNode from "./GridNode";
import { dijkstra } from "../algoritms/dijkstra";
import { astar } from "../algoritms/astar";

import {
    getInitialGrid,
    START_NODE_ROW,
    START_NODE_COL,
    FINISH_NODE_ROW,
    FINISH_NODE_COL
} from "../helpers/helper";
import { animateHtml } from "../DOM/htmlAnimations";
import { getNodesInShortestPathOrder } from "../algoritms/algoHelpers";

const ALGOS = {
    dijkstra: dijkstra,
    astar: astar
};

export default class Grid extends React.Component {
    state = {
        grid: [],
        algo: "dijkstra",
        isAddingWalls: false
    };

    componentDidMount = () => {
        const grid = getInitialGrid();
        this.setState({ grid });
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

    markAsWall = ({ row, col }) => {
        const { grid } = this.state;
        grid[row][col].isWall = !grid[row][col].isWall;
        this.setState({ grid });
    };

    onMouseDown = ({ row, col }) => {
        const { grid } = this.state;
        grid[row][col].isWall = !grid[row][col].isWall;
        this.setState({ isAddingWalls: true, grid });
    };

    onMouseEnter = ({ row, col }) => {
        const { grid, isAddingWalls } = this.state;
        if (!isAddingWalls) {
            return;
        }
        grid[row][col].isWall = !grid[row][col].isWall;
        this.setState({ isAddingWalls: true, grid });
    };

    onMouseUp = () => {
        this.setState({ isAddingWalls: false });
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
                    <option value="astar">astar</option>
                </select>

                <div>
                    <button onClick={this.visualize}>Find shortest path</button>
                </div>
                <div style={{ width: 750 }}>
                    {grid.map((row, rowIdx) => {
                        return (
                            <div key={rowIdx}>
                                {row.map((node, nodeIdx) => {
                                    const {
                                        row,
                                        col,
                                        isFinish,
                                        isStart,
                                        isWall
                                    } = node;
                                    return (
                                        <GridNode
                                            onMouseDown={this.onMouseDown}
                                            onMouseEnter={this.onMouseEnter}
                                            onMouseUp={this.onMouseUp}
                                            isWall={isWall}
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
