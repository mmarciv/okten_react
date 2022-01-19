import React, {useEffect, useState} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import PostDetails from "../../components/Post/PostDetails";
import {postService} from "../../services/post.service";


const PostDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    const getPostDetails = () => {
        if (state) {
            setPost(state);
            return;
        }
        if (id) {
            postService.getById(id).then(value => setPost(value));
        }
    }

    useEffect(() => {
        getPostDetails();
    }, [id])

    return (
        <div>
            <div>
                <h2>Post Details</h2>
                {post && <PostDetails key={post.id} post={post}/>}
                {post && <Link to={'comments'}>Show Comments</Link>}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default PostDetailsPage;