import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center h-full w-full px-4 sm:px-8 md:px-56 gap-9">
            {/* Background Section (below header) */}
            <div
                className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(/trip${
                        Math.floor(Math.random() * 4) + 1
                    }.jpg)`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            </div>

            {/* Content Section (your text and button) */}
            <div className="relative z-10 mt-32 sm:mt-40 md:mt-56 text-center text-white">
                <h1 className="font-extrabold text-[32px] sm:text-[40px] md:text-[60px] text-center">
                    <span className="text-[#fb8500]">
                        Discover Your Next Adventure with AI:
                    </span>{" "}
                    Personalised Itineraries at Your Fingertips
                </h1>
                <p className="text-[16px] sm:text-[20px] md:text-[30px] text-gray-300">
                    Your personal trip planner and travel curator, creating
                    custom itineraries tailored to your interests and budget.
                </p>
                <Link to={"create-trip"}>
                    <Button className="text-md mt-20 md:text-xl lg:text-lg py-4 px-2  lg:p-4  bg-orange-500 text-white rounded-lg shadow-lg hover:bg-orange-600">
                        Get Started, it&apos;s Free
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
