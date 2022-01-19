import React from 'react';
import {Link} from "react-router-dom";

const AlbumListItem = ({album}) => {
    return (
        <div>
            <div>
                <Link to={album.id.toString() + '/photos'} state={album}># {album.id}, {album.title}</Link>
            </div>
        </div>
    );
};

export default AlbumListItem;