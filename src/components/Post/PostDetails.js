import React from 'react';

const PostDetails = ({post}) => {
    return (
        <div>
            <div>
                <div>id: {post.id}</div>
                <div>title: {post.title}</div>
                <div>body: {post.body}</div>
                <div>userId: {post.userId}</div>
            </div>
        </div>
    );
};

export default PostDetails;