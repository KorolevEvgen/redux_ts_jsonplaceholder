import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services";
import {IComment} from "../../interfaces";
import './CommentDetails.css'


const CommentDetails: FC = () => {
    const [comment, setComment] = useState<IComment>();

    let {id} = useParams<string>();

    useEffect(() => {
        if (id != null) {
            commentService.getById(id).then(value => setComment(value.data))
        }

    }, [comment])

    return (
        <div className={'commentDetails'}>
            {comment && (
                <div>
                    <div>PostId: {comment.postId}</div>
                    <div>Id: {comment.id}</div>
                    <div>Name: {comment.name}</div>
                    <div>Email: {comment.email}</div>
                    <div>Body: {comment.body}</div>
                </div>
            )}
        </div>
    );
};

export default CommentDetails;
