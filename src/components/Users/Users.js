import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setItems(value))
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div>{items.map(value => <User key={value.id} item={value}/>)}</div>
        </div>
    );
}

export default Users;