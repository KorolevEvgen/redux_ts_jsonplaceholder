import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import './App.css'

import Header from "./components/Header/Header";
import UsersPage from "./pages/UsersPage/UsersPage";
import UserDetails from "./components/UserDetails/UserDetails";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetails from "./components/PostDetails/PostDetails";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import CommentDetails from "./components/CommentDetails/CommentDetails";

const App: FC = () => {
    return (
        <div>
            <Header/>


            <Routes>
                <Route path={''} element={<Navigate to={'users'}/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}/>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>

                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':id'} element={<CommentDetails/>}/>
                </Route>

            </Routes>
        </div>
    );
};

export default App;
