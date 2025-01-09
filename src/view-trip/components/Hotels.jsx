import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

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
                        <div className="rounded-xl shadow-md hover:scale-105 transition-all ">
                            <img
                                className="rounded-tl-xl rounded-tr-xl lg:h-[250px]"
                                src={`/hotel${index + 1}.webp`}
                            />
                            <div className="p-5 my-2 flex flex-col">
                                <h2>
                                    <div className="text-lg font-bold">
                                        {hotel.name}
                                    </div>
                                </h2>
                                <h2 className="text-xs flex gap-1 mt-1 text-gray-400 truncate">
                                    <div className="flex items-center justify-center">
                                        <MapPin
                                            className="text-red-500"
                                            size={16}
                                        />
                                    </div>{" "}
                                    <div className="underline cursor-pointer hover:text-orange-500">
                                        {hotel.address}
                                    </div>
                                </h2>
                                <h2 className="text-xs  wrap my-2 truncate">
                                    {hotel.description}
                                </h2>
                                <div className="flex justify-between mt-2">
                                    <h2 className="text-xl text-green-500 font-bold">
                                        {hotel?.pricePerNight}{" "}
                                        <span className="text-xs font-medium">
                                            per night
                                        </span>
                                    </h2>
                                    <h2 className="text-md flex items-center gap-1 px-2rounded-xl">
                                        <img
                                            className="h-3 w-3 flex items-center"
                                            src="/star.png"
                                            alt=""
                                        />
                                        <div className="flex items-end">
                                            {hotel?.rating}
                                        </div>
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
