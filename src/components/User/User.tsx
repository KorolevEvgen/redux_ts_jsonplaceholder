import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IUser} from "../../interfaces";


const User: FC<{ user: IUser }> = ({user}) => {

    const {id, name} = user;

    return (
        <div className={'user'}>
            <Link to={id.toString()} state={user}>{id}) {name}</Link>
        </div>
    );
};

export default User;
