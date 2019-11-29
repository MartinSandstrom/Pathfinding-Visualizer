import React from "react";
import { bubbleSort } from "../algoritms/sorting/bubble";
import { quickSort } from "../algoritms/sorting/quicksort";
import { mergeSort } from "../algoritms/sorting/merge";
import { selectionSort } from "../algoritms/sorting/selection";
import { insertionSort } from "../algoritms/sorting/insertion";

const ALGOS = {
    bubble: bubbleSort,
    quick: quickSort,
    merge: mergeSort,
    selection: selectionSort,
    insertion: insertionSort
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

const ANIMATION_STEP_TIME = 300;

export default class SortingAlgos extends React.Component {
    state = {
        list: [],
        algo: "insertion",
        sorting: false
    };

    componentDidMount = () => this.randomNumbers();

    randomNumbers = () => {
        const list = [];
        for (let i = 0; i < 10; i++) {
            const number = getRandomInt(0, 99);
            list.push(number);
        }
        this.setState({ list, done: false });
    };

    sort = () => {
        const { algo, list } = this.state;
        const algorithm = ALGOS[algo];
        this.setState({ sorting: true });
        if (algo === "bubble" || algo === "selection" || algo === "insertion") {
            this.sortWithOneList(algorithm, list);
        } else if (algo === "quick" || algo === "merge") {
            this.sortWithPivot(algorithm, list);
        }
    };

    sortWithPivot = (algorithm, list) => {
        const allSorts = algorithm(list);
        this.animateSort(allSorts.allParts);
    };

    sortWithOneList = (algorithm, list) => {
        const allSorts = algorithm(list);
        this.animateSort(allSorts);
    };

    animateSort = list => {
        list.forEach((sort, index) => {
            setTimeout(() => {
                this.setState({ list: sort });
            }, ANIMATION_STEP_TIME * index);
        });
        this.stopSorting(list.length);
    };

    stopSorting = length => {
        setTimeout(() => {
            this.setState({ sorting: false, done: true });
        }, length * ANIMATION_STEP_TIME);
    };

    render() {
        const { list, sorting, done } = this.state;
        return (
            <div>
                <select value={this.state.algo} onChange={e => this.setState({ algo: e.target.value })}>
                    <option value="insertion">insertion</option>
                    <option value="bubble">bubble</option>
                    <option value="quick">quick</option>
                    <option value="merge">merge</option>
                    <option value="selection">selection</option>
                </select>
                <button onClick={this.sort}>Sort</button>
                <button onClick={this.randomNumbers}>Scramble</button>
                <div>
                    <h4
                        style={{
                            color: `${done ? "green" : sorting ? "yellow" : ""}`
                        }}
                    >
                        {list.join(", ")}
                    </h4>
                </div>
            </div>
        );
    }
}
