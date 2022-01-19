import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from "../../components/Album/AlbumPhotoDetails.module.css"
import {userService} from "../../services/user.service";
import AlbumPhotoDetails from "../../components/Album/AlbumPhotoDetails";

const AlbumPhotosPage = () => {

    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        if (albumId) {
            userService.getAlbumsPhotos(albumId).then(value => setPhotos(value));
        }
    }, [albumId]);

    return (
        <div>
            <h2>Album's Photos</h2>
            <div className={css.photos}>
                {photos && photos.map(value => <AlbumPhotoDetails key={value.id} photo={value}/>)}
            </div>
        </div>
    );
};

export default AlbumPhotosPage;