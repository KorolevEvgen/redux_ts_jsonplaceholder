import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllUsers} from "../../store";
import User from "../../components/User/User";
import './UsersPage.css'


const UsersPage: FC = () => {
    const {users} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className={'usersPage'}>
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage
