import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import PostDetails from "../../components/Post/PostDetails";
import {userService} from "../../services/user.service";
import AlbumListItem from "../../components/Album/AlbumListItem";

const UserAlbumsPage = () => {

    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        if (id) {
            userService.getAllAlbums(id).then(value => setAlbums(value));
        }
    }, [id]);

    return (
        <div>
            <h2>User's Albums</h2>
            {albums && albums.map(value => <AlbumListItem key={value.id} album={value}/>)}
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserAlbumsPage;