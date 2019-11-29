import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Grid from "./Components/Grid";
import SortingAlgos from "./Components/SortingAlgos";

const PathFinder = () => (
    <div>
        <p>Pathfinder :)</p>
        <Grid algo="test"></Grid>
    </div>
);

const SortingAlgorithms = () => (
    <div>
        <p>SortingAlgorithms :)</p>
        <SortingAlgos />
    </div>
);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <div>
                        <nav style={{ position: "fixed", top: 10, left: 100 }}>
                            <ul>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/Pathfinding-Visualizer/">Path Finder</Link>
                                </li>
                                <li style={{ listStyle: "none" }}>
                                    <Link to="/Sorting">Sorting Algorithms</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/Sorting">
                                <SortingAlgorithms />
                            </Route>
                            <Route path="/">
                                <PathFinder />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
