import PlaceCard from "./PlaceCard";

const PlacesToVisit = ({ trip }) => {
    console.log(trip);

    if (!trip) {
        return <p>Loading trip data...</p>;
    }

    const { itinerary } = trip;

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
                    <div className="grid lg:grid-cols-2 gap-8">
                        {combinedItinerary.map((item, index) => (
                            <div key={index} className="col-span-1">
                                <PlaceCard place={item} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No itinerary available.</p>
                )}
            </div>
        </div>
    );
};

export default PlacesToVisit;
