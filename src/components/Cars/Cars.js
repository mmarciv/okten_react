import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Car from "../Car/Car";
import {getAllCars} from "../../store";


const Cars = () => {

    const {cars, status, error} = useSelector(state => {
        return state['carReducer'];
    });

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars());
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading ...</h1>}
            {error && <h1>{error}</h1>}
            {cars && cars.map((car) => {
                return <Car key={car.id} car={car}/>
            })}
        </div>
    );
};

export default Cars;
