import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import {userService} from "../../services/user.service";
import UserDetails from "../../components/User/UserDetails";


const UserDetailsPage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    const getUserDetails = () => {
        if (state) {
            setUser(state);
            return;
        }
        if (id) {
            userService.getById(id).then(value => setUser(value));
        }
    }

    useEffect(() => {
        getUserDetails();
    }, [id])

    return (
        <div>
            <div>
                <h2>User Details</h2>
                {user && <UserDetails key={user.id} user={user}/>}
                {user && <Link to={'posts'}>Show Posts</Link>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetailsPage;