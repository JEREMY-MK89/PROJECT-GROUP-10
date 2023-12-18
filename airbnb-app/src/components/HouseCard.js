import React from "react";

function HouseCard({ house, imageClass }) {
    return (
        <div className="flex-column mr-2 mt-2 border-black border-4 p-2 max-w-10 rounded-md">
            <div className="container w-150 h-50">
                <img src={house.image_url} alt="house" className={imageClass} />
            </div>
            <h2>{house.Location}</h2>
            <p>{house.date_uploaded}</p>
            <p>{house.price}</p>
        </div>
    );
}

export default HouseCard;
