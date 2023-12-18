import React, { useState, useEffect } from "react";
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header";
import Listings from './components/Listings';
import SortIcons from './components/SortIcons';
import Footer from './components/Footer';

function App() {

  const [allHouses, setAllHouses] = useState([]);
  const [setFIlteredHouses, setFIlteredHouses] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
      .then(response => response.json())
      .then(data => setAllHouses(data));
  }, []);

  // Function for handling sort by icon
  function handleSortByIcon(altText) {
    if (altText !== 'clear') {
      const filterByIcon = allHouses.filter((house) => house.category.toLowerCase() === altText.toLowerCase())
      setAllHouses(filterByIcon)
    } else {
      fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
        .then(response => response.json())
        .then(data => setAllHouses(data))
    }
  }


  return (
    <div className="App ml-2 my-1">
      <Header />
      <SortIcons sortByIcon={handleSortByIcon} />
      <Listings houses={allHouses} />
      <Footer />
    </div>
  );
}

export default App;
