import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IPost} from "../../interfaces";


const Post: FC<{ post: IPost }> = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <Link to={id.toString()} state={post}>{id}) {title}</Link>
        </div>
    );
};

export default Post;
