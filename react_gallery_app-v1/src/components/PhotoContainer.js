import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoContainer = (props) => {
    const results = props.photos;
    let photos;
    let query = props.query;

    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} />);
      } else {
        photos = <NoPhotos />
      }


    return(
        <div className="photo-container">
            <h2>Results For {query}</h2>
            <ul>
                {photos}
            </ul>   
        </div>
    );
}

export default PhotoContainer;