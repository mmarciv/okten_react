import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Comment from "../../components/Comment/Comment";

const PostCommentsPage = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        if (id) {
            postService.getAllComments(id).then(value => setComments(value));
        }
    }, [id]);

    return (
        <div>
            <h2>Post Comments</h2>
            {comments && comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
};

export default PostCommentsPage;