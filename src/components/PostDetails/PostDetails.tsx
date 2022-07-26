import React, {FC, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {IPost} from "../../interfaces";
import './PostDetails.css'

const PostDetails: FC = () => {

    const [post, setPost] = useState<IPost>();
    const data = useLocation().state as IPost;

    useEffect(() => {
        if (data) {
            setPost(data)
            return
        }
    }, [post])

    return (
        <div className={'postDetails'}>
            {post && (
                <div>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default PostDetails;
