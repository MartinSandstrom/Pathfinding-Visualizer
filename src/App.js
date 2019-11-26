import React from "react";
import "./App.css";
import Grid from "./Components/Grid";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Pathfinder :)</p>
                <Grid algo="test"></Grid>
            </header>
        </div>
    );
}

export default App;
