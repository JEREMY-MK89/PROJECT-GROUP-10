import React from "react";

function SortIcons({ onIconClick }) {

    function handleSortIcon(event) {
        const altText = event.target.alt;
        onIconClick(altText)

    }

    return (
        <div className="flex items-center border border-black p-1">
            <img src="/new-house-svgrepo-com.svg" onClick={handleSortIcon} alt='new' className="h-10 w-10 mr-4 cursor-pointer" />
            {/* <img src="/fire-svgrepo-com.svg" onClick={handleSortIcon} alt='trending' className="h-10 w-10 mr-4 cursor-pointer" /> */}
            <img src="/beach-area-svgrepo-com.svg" onClick={handleSortIcon} alt='beach' className="h-10 w-10 mr-4 cursor-pointer" />
            <img src="/camp-svgrepo-com.svg" onClick={handleSortIcon} alt='cottage' className="h-10 w-10 mr-4 cursor-pointer" />
            <img src="house-house-with-attic-photoshopsupply-svgrepo-com.svg" onClick={handleSortIcon} alt="urban" className="h-10 w-10 mr-4 cursor-pointer" />
            <img src="filter-xmark-svgrepo-com.svg" onClick={handleSortIcon} alt="clear" className="h-10 w-10 mr-4 cursor-pointer" />
        </div>
    )
}
export default SortIcons;