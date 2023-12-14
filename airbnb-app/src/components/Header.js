import React, { useEffect, useState } from "react"

function Header({ onSearch }) {

    const [searchText, setSearchText] = useState('')

    // function for handling the the search input
    function handleSearch(event) {
        const newValue = event.target.value
        setSearchText(newValue)
    }
    

    return (
        <div className="flex justify-between mb-1">
            <h1 className="flex text-3xl content-center text-center justify-center">
                <img className="h-10 w-10" src="/home-smile-angle-svgrepo-com.svg" alt="logo" />
                Airbnb
            </h1>
            <input type="text" placeholder="Search By Location..." onChange={handleSearch} value={searchText} className="bg-black font-white text-center p-2 rounded-3xl w-39 text-white" />
            <div className="flex">
                <button type="button" className="mx-2 border border-black w-20 rounded-md ">Login</button>
                {/* <div className="h-10 w-10 rounded-full object-cover border-4 border-black bg-yellow-600 mx-2"> */}
                <img src="profile-circle-svgrepo-com.svg" alt="profile" className="h-10 w-10" />
                {/* </div> */}
            </div>
        </div>
    )
}

export default Header;