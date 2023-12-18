function Listings({ houses }) {
    // Removed setAllHouses since it's not being used
    console.log(houses);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
            {houses ? (
                houses.map((house) => (
                    <HouseCard key={house.id} house={house} />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Listings;