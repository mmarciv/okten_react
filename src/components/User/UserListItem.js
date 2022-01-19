import React from 'react';
import {Link} from "react-router-dom";

import css from "./UserListItem.module.css"

const UserListItem = ({user}) => {
    return (
        <div>
            <div className={css.list_item}>
                <Link to={user.id.toString()} state={user}># {user.id}, {user.name}</Link>
                <div className={css.list_item_btn}>
                    <Link to={user.id.toString() + '/albums'} state={user}>Albums</Link>
                </div>
            </div>
        </div>
    );
};

export default UserListItem;