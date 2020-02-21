import React from "react";
import List from "./List";
import Form from "./Form";
import Board from "./Board";

const App = () => (
    <>
        <div>
            <h2>Add project</h2>
            <Form />
        </div>
        <Board />
    </>
);

export default App;