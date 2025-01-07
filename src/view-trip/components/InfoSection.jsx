import { useEffect, useState } from "react";

const InfoSection = ({ trip }) => {
    const [photoURL, setPhotoURL] = useState("");

    useEffect(() => {
        const fetchImage = async () => {
            const API_KEY =
                "rinOroAxkFsvc7nJ0idPzdTaLjSCZwnkOpTpobcY9eXTy4ytFolH3lhE";

            try {
                const response = await fetch(
                    `https://api.pexels.com/v1/search?query=vacation&per_page=5`, // Increase per_page to get more options
                    {
                        headers: {
                            Authorization: API_KEY,
                        },
                    }
                );

                const data = await response.json();

                // Filter only horizontal images
                const horizontalImages = data.photos.filter(
                    (photo) => photo.width > photo.height
                );

                if (horizontalImages.length > 0) {
                    // Set the photo URL to the first horizontal image
                    setPhotoURL(horizontalImages[0].src.original);
                } else {
                    console.error("No horizontal images found");
                    // You can fallback to a default or vertical image if needed
                }
            } catch (error) {
                console.error("Error fetching image from Pexels:", error);
            }
        };

        fetchImage();
    }, []);
    return (
        <div>
            <img
                className="h-[240px] lg:h-[340px]  w-full object-cover object-center  rounded-xl"
                src={photoURL || "/places.jpg"}
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
