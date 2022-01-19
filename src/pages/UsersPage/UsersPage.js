import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from "../UsersPage/UsersPage.module.css";
import {userService} from "../../services/user.service";
import UserListItem from "../../components/User/UserListItem";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <div className={css.users_wrapper}>
                <div>
                    <h2>All Users</h2>
                    {users && users.map((value) => <UserListItem key={value.id} user={value}/>)}
                </div>
                <div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;