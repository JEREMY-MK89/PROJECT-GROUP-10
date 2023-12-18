import React, { useState } from "react";

const DetailsComponent = () => {

    // State to manage the visibility of details
    const [showDetails, setShowDetails] = useState(false);

    // State to store the image URL
    const [imageURL, setImageURL] = useState('');

    // Function to handle the "More Details" button click
    const handleMoreDetails = async () => {
        try {
            const response = await
                fetch('https://my-json-server.typicode.com/JEREMY-MK89/Airbnb-Backend-Set-up-two/details');
            const data = await response.json();

            // Extracting the image URL using the key "interior"
            const interiorImageURL = data.interior;

            // Update state to display details and set the image URL
            setShowDetails(true);
            setImageURL(interiorImageURL);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            {/* Button to trigger fetching and displaying details */}
            <button onClick={handleMoreDetails}>More Details</button>

            {/* Display details and image if showDetails is true */}
            {showDetails && (
                <div>
                    <h2>Interior Details</h2>
                    {/* Display the image */}
                    <img src={imageURL} alt="Interior" style={{ maxWidth: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default DetailsComponent;