import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Listings from './components/Listings';
import SortIcons from './components/SortIcons';
import Footer from "./Footer";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
      .then(response => response.json())
      .then(data => {
        setAllHouses(data);
        setFilteredData(data);
      });
  }, []);

  // Function for handling search change
  function onSearchChange(search) {
    setSearchTerm(search);
    filterData(search, allHouses);
  }

  // Function for handling sort by Icon 
  function handleIconClick(altText) {
    if (altText !== 'clear') {
      const filterByIcon = allHouses.filter((house) => house.category.toLowerCase() === altText.toLowerCase())
      setFilteredData(filterByIcon)
    } else {
      fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
        .then(response => response.json())
        .then(data => setFilteredData(data))
    }
  }



  // Function to filter data based on search term and icon click
  function filterData(search, data) {
    if (search !== '') {
      const searchResult = data.filter((house) => house.Location.toLowerCase().startsWith(search.toLowerCase()));
      setFilteredData(searchResult);
    } else {
      setFilteredData(data);
    }
  }

  return (
    <div className="App ml-2 my-1">
      <Header onSearch={onSearchChange} />
      <SortIcons onIconClick={handleIconClick} />
      <Listings houses={filteredData.length > 0 ? filteredData : allHouses} />
      <Footer />
    </div>
  );
}

export default App;
