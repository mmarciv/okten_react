import React from 'react';
import {useSelector} from "react-redux";

import Car from "../Car/Car";


const Cars = () => {
    const {cars} = useSelector(state => {
        return state['carReducer'];
    });
    return (
        <div>
            {cars && cars.map((car) => {
                return <Car key={car.id} car={car}/>
            })}
        </div>
    );
};

export default Cars;