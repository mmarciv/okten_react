const Post = ({item: {id, title, body}}) => {
    return (
        <div>
            <div><strong>id</strong>: {id}</div>
            <div><strong>title</strong>: {title}</div>
            <div><strong>body</strong>: {body}</div>
        </div>
    );
}

export default Post;