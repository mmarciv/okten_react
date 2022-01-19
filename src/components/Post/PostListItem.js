import React from 'react';
import {Link} from "react-router-dom";

const PostListItem = ({post}) => {
    return (
        <div>
            <div>
                <Link to={post.id.toString()} state={post}># {post.id}, {post.title}</Link>
            </div>
        </div>
    );
};

export default PostListItem;