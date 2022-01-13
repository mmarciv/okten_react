import {useEffect, useState} from "react";

import {userService} from "../../services/user.service";

const Users = ({getUserById}) => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => {
            setUsers(value);
        });
    }, []);

    return (
        <div>
            {users.map(value => {
                return (
                    <div key={value.id}>
                        {value.id} -- {value.name} -- {value.email}
                        <button onClick={() => {
                            getUserById(value.id)
                        }}>show details
                        </button>
                    </div>
                )
            })}
        </div>
    );
}

export default Users;
