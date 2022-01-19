import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <div>id: {comment.id}</div>
            <div>email: {comment.email}</div>
            <div>name: {comment.name}</div>
            <div>body: {comment.body}</div>
        </div>
    );
};

export default Comment;