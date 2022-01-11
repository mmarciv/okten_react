const User = ({item: {id, email, name, phone, username, website}}) => {
    return (
        <div>
            <div><strong>id</strong>: {id}</div>
            <div><strong>email</strong>: {email}</div>
            <div><strong>name</strong>: {name}</div>
            <div><strong>phone</strong>: {phone}</div>
            <div><strong>username</strong>: {username}</div>
            <div><strong>website</strong>: {website}</div>
        </div>
    );
}

export default User;