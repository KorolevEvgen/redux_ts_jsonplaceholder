import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {IUser} from "../../interfaces";
import './UserDetails.css'


const UserDetails: FC = () => {

    const [user, setUser] = useState<IUser>();
    const data = useLocation().state as IUser;

    useEffect(() => {
        if (data) {
            setUser(data)
            return
        }
    }, [user])


    return (
        <div className={'userDetails'}>
            {user && (
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>UserName: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>
            )}
        </div>
    );
};

export default UserDetails;
