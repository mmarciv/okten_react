import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </div>
            <div className={css.content}>
                <Outlet/>
            </div>
            <div className={css.footer}>
                footer
            </div>
        </div>
    );
};

export default Layout;