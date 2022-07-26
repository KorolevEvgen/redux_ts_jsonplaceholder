import React, {FC, useEffect} from 'react';
import {Outlet} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllComments} from "../../store";
import Comment from "../../components/Comment/Comment";
import './CommentsPage.css'


const CommentsPage: FC = () => {
    const {comments} = useAppSelector(state => state.comment)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div className={'commentsPage'}>
            <div>
                <h1>Comments</h1>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default CommentsPage;
