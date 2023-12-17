import React from "react";

function SortIcons({ sortByIcon }) {

    function handleSortIcon(event) {
        sortByIcon(event.target.alt)

    }

    return (
        <div className="flex items-center border border-black p-1">
            <img src="/new-house-svgrepo-com.svg" onClick={handleSortIcon} alt='sort' className="h-10 w-10 mr-4" />
            <img src="/fire-svgrepo-com.svg" onClick={handleSortIcon} alt='sort' className="h-10 w-10 mr-4" />
            <img src="/beach-area-svgrepo-com.svg" onClick={handleSortIcon} alt='sort' className="h-10 w-10 mr-4" />
            <img src="/camp-svgrepo-com.svg" onClick={handleSortIcon} alt='sort' className="h-10 w-10 mr-4" />
        </div>
    )
}
export default SortIcons;