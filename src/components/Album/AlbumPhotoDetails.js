import React from 'react';

const AlbumPhotoDetails = ({photo}) => {
    return (
        <div>
            <div>
                <div>
                    <img src={photo.thumbnailUrl} alt={photo.title} width={'100'} height={'100'}/>
                </div>
            </div>
        </div>
    );
};

export default AlbumPhotoDetails;