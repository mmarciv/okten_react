import React from 'react';
import Car from "../Car/Car";

const Cars = ({cars, getCarId}) => {
    return (
        <div>
            {cars && cars.map((car) => {
                return <Car key={car.id} car={car} getCarId={getCarId}/>
            })}
        </div>
    );
};

export default Cars;