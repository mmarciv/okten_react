import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, [action.counter]: state[action.counter] + 1}
        case 'dec':
            return {...state, [action.counter]: state[action.counter] - 1}
        case 'reset':
            return {...state, [action.counter]: state[action.counter] = 0}
        default:
            throw new Error('something went wrong')
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, {counter1: 0, counter2: 0, counter3: 0,})
    return (
        <div className="App">

            <div>
                <h2>Counter 1</h2>
                <h3>{state.counter1}</h3>
                <button onClick={() => dispatch({type: 'inc', counter: 'counter1'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', counter: 'counter1'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', counter: 'counter1'})}>Reset</button>
            </div>

            <div>
                <h2>Counter 2</h2>
                <h3>{state.counter2}</h3>
                <button onClick={() => dispatch({type: 'inc', counter: 'counter2'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', counter: 'counter2'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', counter: 'counter2'})}>Reset</button>
            </div>

            <div>
                <h2>Counter 3</h2>
                <h3>{state.counter3}</h3>
                <button onClick={() => dispatch({type: 'inc', counter: 'counter3'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec', counter: 'counter3'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset', counter: 'counter3'})}>Reset</button>
            </div>

        </div>
    );
}

export default App;
