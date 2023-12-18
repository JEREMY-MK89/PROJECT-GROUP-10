React, { useEffect, useState } from "react";

function Header({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  // function for handling the search input
  function handleSearch(event) {
    const newValue = event.target.value;
    setSearchText(newValue);
  }

  // UseEffect for handling when the searchText changes
  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]); 

  return (
    <div className="flex justify-between mb-1">
      <h1 className="flex text-3xl content-center text-center justify-center">
        <img className="h-10 w-10" src="home.gif" alt="logo" />
        Airbnb
      </h1>
      <input
        type="text"
        placeholder="Search By Location..."
        onChange={handleSearch}
        value={searchText}
        className="bg-black font-white text-center p-2 rounded-3xl w-39 text-white"
      />
      <div className="flex text-3xl content-center text-center justify-center">
        <img src="social-media.gif" alt="profile" className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Header;

