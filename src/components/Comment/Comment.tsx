import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IComment} from "../../interfaces";
import './Comment.css'


const Comment: FC<{ comment: IComment }> = ({comment}) => {

    const {postId, id, name} = comment;

    return (
        <div className={'comment'}>
            <Link to={id.toString()} state={comment}>
                <p>PostId: {postId}</p>
                <p>Id: {id} </p>
                <p>Name: {name}</p>
            </Link>
        </div>
    );
};

export default Comment;
