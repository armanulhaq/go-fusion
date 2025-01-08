const InfoSection = ({ trip }) => {
    return (
        <div>
            <img
                className="h-[240px] lg:h-[340px]  w-full object-cover object-center  rounded-xl"
                src={"/infosection.jpg"}
                alt=""
            />

            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">{trip?.destination}</h2>
                    <div className="flex gap-5">
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            💲 {trip?.budget.split(" ")[0]}
                        </h2>
                        <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md">
                            🧍‍♂️{trip?.groupSize.split(" ")[0]} traveller(s).
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  gap-2 mb-5">
                <div className="font-bold text-md lg:text-xl ">
                    Best time to visit:{" "}
                </div>
                <div className=" text-orange-400 text-sm lg:text-lg ">
                    {trip?.bestTimeToVisit}
                </div>
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <div className="font-bold text-md lg:text-lg  ">
                    General Weather:{" "}
                </div>
                <div className="text-orange-400 text-sm lg:text-lg  ">
                    {trip?.weatherNote}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
