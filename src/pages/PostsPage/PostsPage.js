import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import css from './PostsPage.module.css';
import {postService} from "../../services/post.service";
import PostListItem from "../../components/Post/PostListItem";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <div className={css.posts_wrapper}>
                <div>
                    <h2>All Posts</h2>
                    {posts && posts.map((value) => <PostListItem key={value.id} post={value}/>)}
                </div>
                <div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostsPage;