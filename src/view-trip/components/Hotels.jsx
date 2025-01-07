import { Link } from "react-router-dom";

const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mt-5 mb-5">
                Hotel Recommendations
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {trip?.hotels?.map((hotel, index) => (
                    <Link
                        key={index}
                        to={
                            "https://google.com/maps/search/?api=1&query=" +
                            hotel.name +
                            "," +
                            hotel.address
                        }
                        target="_blank"
                    >
                        <div className="rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer">
                            <img className="rounded-xl" src="/hotel.jpg" />
                            <div className="p-5 my-2 flex flex-col">
                                <h2 className="font-medium sm:text-sm">
                                    <div>{hotel.name}</div>
                                </h2>
                                <h2 className="text-xs text-gray-400 truncate">
                                    📍 {hotel.address}
                                </h2>
                                <h2 className="text-xs  wrap my-2">
                                    {hotel.description}
                                </h2>
                                <div className="flex justify-between mt-2">
                                    <h2 className="text-xl text-green-500 font-bold">
                                        {hotel?.pricePerNight}{" "}
                                        <span className="text-xs">
                                            per night
                                        </span>
                                    </h2>
                                    <h2 className="text-sm">
                                        ⭐️ {hotel?.rating}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Hotels;
