import './App.css';
import Form from "./components/Form/Form";
import {useState} from "react";
import Cars from "./components/Cars/Cars";

function App() {
    return (
        <div className="App">
            <Form/>
            <Cars/>
        </div>
    );
}

export default App;
