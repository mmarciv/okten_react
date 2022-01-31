import './App.css';
import Form from "./components/Form/Form";
import {useState} from "react";
import Cars from "./components/Cars/Cars";

function App() {

    const [cars, serCars] = useState([]);

    const getFormData = (data) => {
        serCars([...cars, {id: new Date().getTime(), ...data}])
    }

    const getCarId = (id) => {
        serCars(cars.filter(value => {
            return value.id !== id;
        }))
    }

    return (
        <div className="App">
            <Form getFormData={getFormData}/>
            <Cars cars={cars} getCarId={getCarId}/>
        </div>
    );
}

export default App;
