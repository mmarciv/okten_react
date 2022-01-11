const Comment = ({item: {id, email, body, name}}) => {
    return (
        <div>
            <div><strong>id</strong>: {id}</div>
            <div><strong>name</strong>: {name}</div>
            <div><strong>email</strong>: {email}</div>
            <div><strong>body</strong>: {body}</div>
        </div>
    );
}

export default Comment;