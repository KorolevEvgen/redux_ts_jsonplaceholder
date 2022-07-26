import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllPosts} from "../../store";
import Post from "../../components/Post/Post";
import './PostsPage.css'


const PostsPage: FC = () => {
    const {posts} = useAppSelector(state => state.post)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div className={'postsPage'}>
            <div>
                <h1>Posts</h1>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;
