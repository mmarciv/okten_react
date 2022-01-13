import {useState} from "react";

import "./App.css"

import Users from "./components/Users/Users";
import User from "./components/User/User";
import Post from "./components/Post/Post";

import {userService} from "./services/user.service";


function App() {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserById = (id) => {
        userService.getById(id).then(value => {
            setUser(value);
            setPosts([]);
        });
    }

    const getUserPosts = (id) => {
        userService.getPosts(id).then(value => {
            setPosts(value);
        });
    }

    return (
        <div>
            <div className={'w-50'}>
                <h1>Users</h1>
                <Users getUserById={getUserById}/>
            </div>
            <div className={'w-50'}>
                <h1>User's Details</h1>
                {user && <User key={user.id} user={user} getUserPosts={getUserPosts}></User>}
            </div>
            <div>
                <h1>User's Posts</h1>
                {posts.map(value => <Post key={value.id} post={value}/>)}
            </div>
        </div>
    );
}

export default App;