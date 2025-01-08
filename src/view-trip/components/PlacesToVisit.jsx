import PlaceCard from "./PlaceCard";

const PlacesToVisit = ({ trip }) => {
    console.log(trip);

    // Make sure trip is loaded before rendering
    if (!trip) {
        return <p>Loading trip data...</p>;
    }

    // Destructure itinerary from the trip
    const { itinerary } = trip;

    // Combine morning, afternoon, and evening into a single array for rendering
    const combinedItinerary = [
        ...itinerary.morning,
        ...itinerary.afternoon,
        ...itinerary.evening,
    ];

    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Places to Visit</h2>
            <div>
                {combinedItinerary.length > 0 ? (
                    combinedItinerary.map((item, index) => (
                        <div key={index}>
                            <div className="grid lg:grid-cols-2">
                                {/* You can map through places if needed */}
                                <div>
                                    <PlaceCard place={item} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No itinerary available.</p>
                )}
            </div>
        </div>
    );
};

export default PlacesToVisit;
