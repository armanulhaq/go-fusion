import { Link } from "react-router-dom";
import React from "react";
import { MapPin, Clock, Timer } from "lucide-react";
import { cn } from "@/lib/utils";

const PlaceCard = ({ place }) => {
    const placeName = place?.activity || "Unknown Activity";
    const placeDetails = place?.description || "No details available.";
    const placeLocation = place?.location || "No location available.";
    const timeTravel = place?.time || "Unknown time";
    const ticketPricing = place?.price || "Unknown pricing";
    const bookingRequired = place?.bookingRequired ? "🎫 Booking Required" : "";
    const duration = place?.recommendedDuration || "";

    return (
        <Link
            to={`https://google.com/maps/search/?api=1&query=${placeLocation}`}
            target="_blank"
            className="block"
        >
            <div className="group flex-col rounded-2xl p-4 mt-3 flex gap-3 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm cursor-pointer border border-gray-100">
                <div className="flex gap-5 flex-col sm:flex-row">
                    <img
                        src={`/vacation${
                            Math.floor(Math.random() * 9) + 1
                        }.jpg`}
                        alt={placeName}
                        className="w-full h-[220px] sm:w-[220px] sm:h-[220px] rounded-xl object-cover group-hover:shadow-md transition-all duration-300"
                    />
                    <div className="flex flex-col justify-center flex-grow">
                        <div className="flex justify-between">
                            <div className="space-y-2 w-full">
                                <div className="flex justify-between items-start">
                                    <div className="text-xl font-semibold text-orange-500 break-words">
                                        {placeName}
                                    </div>
                                    <div className="rounded-xl p-2 bg-green-50 text-green-600 text-sm">
                                        🤑 : {ticketPricing}
                                    </div>
                                </div>

                                <div className="text-sm flex gap-2 text-gray-500 break-words items-center">
                                    <MapPin
                                        className="text-tour-orange"
                                        size={16}
                                    />
                                    <div>{placeLocation}</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm mt-4 break-words text-black leading-relaxed">
                            {placeDetails}
                        </p>

                        {place.localTips && (
                            <p className="text-sm mt-3 rounded-xl px-3 py-2 bg-orange-50 text-orange-500 font-medium">
                                💡 Tip: {place.localTips}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap text-sm gap-3 lg:gap-8 pt-2 border-t border-gray-100">
                    <span className="text-tour-orange">
                        <div className="flex gap-2 items-center">
                            <Clock size={16} />
                            <div>{timeTravel}</div>
                        </div>
                    </span>

                    {duration && (
                        <div className="flex gap-2 items-center text-gray-600">
                            <Timer size={16} />
                            <div>{duration}</div>
                        </div>
                    )}

                    {bookingRequired && (
                        <span
                            className={cn(
                                "text-tour-pink font-medium",
                                "flex items-center"
                            )}
                        >
                            {bookingRequired}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default PlaceCard;
