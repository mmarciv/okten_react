const Post = ({post}) => {
    return (
        <div key={post.id}>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
}

export default Post;
