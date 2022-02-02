import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCar, deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <div>
                <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
            </div>
        </div>
    );
};

export default Car;
