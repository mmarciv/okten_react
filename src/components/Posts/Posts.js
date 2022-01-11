import {useEffect, useState} from "react";
import Post from "../Post/Post";

const Posts = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setItems(value))
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <div>{items.map(value => <Post key={value.id} item={value}/>)}</div>
        </div>
    );
}

export default Posts;