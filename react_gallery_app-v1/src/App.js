import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import apiKey from './config';
import axios from 'axios';
import PhotoContainer from './components/PhotoContainer';
import QuickLinks from './components/QuickLinks';

function App() {
  let activeFetch = true;
  let [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    // handle success
    if (activeFetch) {
    setPhotos(response.data.photos.photo)
    }
  })
  .catch(error => {
    // handle error
    console.log("Error fetching and parsing data", error);
  });

  // eslint-disable-next-line
  return () => {activeFetch = false}
  }, [query]);

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  
  return (
    <div>
      <SearchBar changeQuery={handleQueryChange}/>

      <QuickLinks />

      <PhotoContainer query={query} photos={photos}/>

    </div>
  );
}

export default App;
