//importing components 
import React, {useState, useEffect} from 'react';
import PhotoContainer from './components/PhotoContainer';
import {Route, Routes, Outlet} from "react-router-dom";
import apiKey from './config';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import QuickLinks from './components/QuickLinks';


function App() {  
  let activeFetch = true;
  let [photos, setPhotos] = useState([]);
  let [dogs, setDogs] = useState([]);
  let [cats, setCats] = useState([]);
  let [computers, setComputers] = useState([]);
  let [query, setQuery] = useState();

  //fetch data for search bar
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

  let handleQueryChange = searchText => {
    setQuery(searchText);
  }

    //pull data for cats
    useEffect(() => {
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      // handle success
      setCats(response.data.photos.photo)
    })
    .catch(error => {
      // handle error
      console.log("Error fetching and parsing data", error);
    });
// eslint-disable-next-line
    return () => {activeFetch = false}
    }, []);


  //fetch data for dogs serach
  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    // handle success
    setDogs(response.data.photos.photo)
  })
  .catch(error => {
    // handle error
    console.log("Error fetching and parsing data", error);
  });
// eslint-disable-next-line
  return () => {activeFetch = false}
  }, []);



  //fetch data for computers search
  useEffect(() => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
  .then(response => {
    // handle success
    setComputers(response.data.photos.photo)
  })
  .catch(error => {
    // handle error
    console.log("Error fetching and parsing data", error);
  });
// eslint-disable-next-line
  return () => {activeFetch = false}
  }, []);
  
  return (
    <div>
      <SearchBar changeQuery={handleQueryChange}/>

      <QuickLinks />

      <Routes>
        <Route path="/" element={<PhotoContainer photos={photos} query={query}/>} />
        <Route path="/cats" element={<PhotoContainer photos={cats} query="cats"/>} />
        <Route path="/dogs" element={<PhotoContainer photos={dogs} query="dogs"/>} />
        <Route path="/computers" element={<PhotoContainer photos={computers} query="computers"/>} />
      </Routes>

      <Outlet />

    </div>
  );
}

export default App;
