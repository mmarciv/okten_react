const User = ({user, getUserPosts}) => {
    return (
        <div key={user.id}>
            <div>{user.id} -- {user.name} -- {user.email}</div>
            <button onClick={() => {
                getUserPosts(user.id)
            }}>show posts
            </button>
        </div>
    );
}

export default User;
