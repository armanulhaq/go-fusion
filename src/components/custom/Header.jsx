import { Button } from "../ui/button";

const Header = () => {
    return (
        <div className="p-2 md:p-3 shadow-sm flex justify-between items-center px-3 md:px-5">
            <div className="flex items-center gap-2 md:gap-3">
                <img className="w-6 h-6 md:w-8 md:h-8" src="/logo.png" alt="" />
                <div className="text-sm md:text-base font-bold">GoFusion</div>
            </div>
            <div>
                <Button className="text-sm md:text-base py-1 px-3 md:py-2 md:px-4 bg-black text-white">
                    Sign In
                </Button>
            </div>
        </div>
    );
};

export default Header;
