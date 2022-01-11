import {useEffect, useState} from "react";
import Comment from "../Comment/Comment";

const Comments = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setItems(value))
    }, []);

    return (
        <div>
            <h1>Comments</h1>
            <div>{items.map(value => <Comment key={value.id} item={value}/>)}</div>
        </div>
    );
}

export default Comments;