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
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-200 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="M4.93 4.93l1.41 1.41" />
                                <path d="M17.66 17.66l1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="M6.34 17.66l-1.41 1.41" />
                                <path d="M19.07 4.93l-1.41 1.41" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 ml-4">
                            Best time to visit:
                        </h3>
                    </div>
                    <p className="lg:ml-14 text-orange-500 text-lg">
                        {trip?.bestTimeToVisit}
                    </p>
                </div>
                <div className="rounded-xl p-6  bg-blue-100 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-center ">
                        <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-secondary"
                            >
                                <path d="M8 2h8" />
                                <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
                                <path d="M7 15h10" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 ml-4">
                            General Weather:
                        </h3>
                    </div>
                    <p className="lg:ml-14 text-blue-500 text-lg">
                        {trip?.weatherNote}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
