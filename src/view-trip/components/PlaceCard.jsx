import { Link } from "react-router-dom";

const PlaceCard = ({ place }) => {
    const placeName = place?.activity || "Unknown Activity";
    const placeDetails = place?.description || "No details available.";
    const placeLocation = place?.location || "No location available.";
    const timeTravel = place?.time || "Unknown time";
    const ticketPricing = place?.price || "Unknown pricing";
    const bookingRequired = place?.bookingRequired ? "🎫 Booking Required" : "";
    const difficultyLevel = place?.difficultyLevel || "";
    const duration = place?.recommendedDuration || "";
    const imageSrc = place?.image || "/places.jpg";

    return (
        <Link
            to={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(
                placeLocation
            )}`}
            target="_blank"
            className="block"
        >
            <div className="flex-col rounded-xl p-3 mt-3 flex gap-2 hover:scale-105 transition-all shadow-md cursor-pointer">
                <div className="flex gap-5 flex-col sm:flex-row">
                    <img
                        src={imageSrc}
                        alt={placeName}
                        className="w-100 h-[200px] sm:w-[200px] sm:h-[200px] rounded-xl object-cover"
                    />
                    <div className="flex flex-col justify-center flex-grow">
                        <div className="flex justify-between">
                            <div className="font-bold text-lg space-y-1">
                                <div className="text-lg break-words">
                                    {placeName}
                                </div>
                                <div className="text-sm text-gray-400 break-words">
                                    📍 {placeLocation}
                                </div>
                            </div>
                        </div>

                        <p className="text-sm mt-3 break-words">
                            {placeDetails}
                        </p>

                        {place.localTips && (
                            <p className="text-sm mt-2 text-orange-600">
                                💡 Tip: {place.localTips}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap text-sm gap-2 lg:gap-8">
                    <span className="text-orange-400">⏰ {timeTravel}</span>
                    <span className="text-green-500">🤑 {ticketPricing}</span>
                    {duration && (
                        <>
                            <span className="text-blue-500">⌛ {duration}</span>
                        </>
                    )}
                    {bookingRequired && (
                        <>
                            <span className="text-purple-500">
                                {bookingRequired}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PlaceCard;
