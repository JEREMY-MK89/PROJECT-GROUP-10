import React, { useState, useEffect } from "react";
import './App.css';
// import 'semantic-ui-css/semantic.min.css';
import Header from "./components/Header";
import Listings from './components/Listings';
import SortIcons from './components/SortIcons';

function App() {

  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details")
      .then(response => response.json())
      .then(data => setAllHouses(data));
  }, []);

  return (
    <div className="App ml-2 my-1">
      <Header />
      <SortIcons />
      <Listings houses={allHouses} />
    </div>
  );
}

export default App;
