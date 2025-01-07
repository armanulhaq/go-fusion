import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        // padding of 4 is given by default (but taken by mobile devices as they don't have it by default), sm is for medium sized device like tablets and 8 padding is given and for md is for laptops and lg for desktop
        <div className="flex flex-col items-center w-full px-4 sm:px-8 md:px-56 gap-9 ">
            {/* text-size is 32 by default(mobile), and likewise... */}
            <h1 className="font-extrabold text-[32px] sm:text-[40px] md:text-[60px] text-center mt-16">
                <span className="text-[#fb8500]">
                    Discover Your Next Adventure with AI:
                </span>{" "}
                Personalised Itineraries at Your Fingertips{" "}
            </h1>
            <p className="text-[16px] sm:text-[20px] md:text-[30px] text-gray-500 text-center">
                Your personal trip planner and travel curator, creating custom
                itineraries tailored to your interests and budget.
            </p>
            <Link to={"create-trip"}>
                <Button className="text-sm md:text-base py-1 px-3 md:py-2 md:px-4 bg-black text-white">
                    Get Started, it&apos;s Free
                </Button>
            </Link>
        </div>
    );
};

export default Hero;
