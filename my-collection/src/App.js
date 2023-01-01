import './App.css';
import React from "react";
import Definitions from "./components/Definitions";

function App() {
    const definitions = [
        {dt: 'one', dd: 'two', id: 1},
        {dt: 'another term', dd: 'another description', id: 2},
        {dt: `Coffee`, dd: `Black hot drink`, id: 3},
        {dt: `Milk`, dd: `White cold drink`, id: 4},
    ];

    return (
        <React.Fragment>
            <Definitions data={definitions}/>
        </React.Fragment>
    );
}

export default App;
