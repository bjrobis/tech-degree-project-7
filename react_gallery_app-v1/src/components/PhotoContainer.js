import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

const PhotoContainer = (props) => {
    //pulls in results json data
    const results = props.photos;
    let photos;
    let query = props.query;

    //turns the json data into images passing it into the Photo component
    if (results.length > 0) {
        photos = results.map(photo => <Photo url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`} key={photo.id} />);
      } else if (props.query === undefined) {
        photos = '';
        query = 'Search Will Be Displayed After Submitting a Query';
      } else {
        photos = <NoPhotos />
      }


    return(
        <div>
            <div className="photo-container">
                <h2>Images Of {query}</h2>
                <ul>
                    {photos}
                </ul>
            </div>
        </div>

    );
}

export default PhotoContainer;