import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import PostDetails from "../../components/Post/PostDetails";

const UserPostsPage = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (id) {
            postService.getAllComments(id).then(value => setComments(value));
        }
    }, [id]);

    return (
        <div>
            <h2>User's Posts</h2>
            {comments && comments.map(value => <PostDetails key={value.id} post={value}/>)}
        </div>
    );
};

export default UserPostsPage;