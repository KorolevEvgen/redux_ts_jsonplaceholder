import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header: FC = () => {
    return (
        <div className={'header'}>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>
    );
};

export default Header
