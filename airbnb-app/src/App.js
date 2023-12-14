import React, { useState, useEffect } from "react";
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header";
import Listings from './components/Listings';
import SortIcons from './components/SortIcons';
import Footer from './components/Footer';

function App() {

  const [allHouses, setAllHouses] = useState([]);


  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
      .then(response => response.json())
      .then(data => setAllHouses(data));
  }, []);

// Function for handling search change
  function onSearchChange(search) {
    if (search !== '') {
      const searchResult = allHouses.filter((house) => house.Location.toLowerCase().startsWith(search.toLowerCase()))
      setAllHouses(searchResult)
    } else {
      fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
        .then(response => response.json())
        .then(data => setAllHouses(data))
    }
  }
  return (
    <div className="App ml-2 my-1">
      <Header onSearch={onSearchChange} />
      <SortIcons />
      <Listings houses={allHouses} />
      <Footer />
    </div>
  );
}

export default App;