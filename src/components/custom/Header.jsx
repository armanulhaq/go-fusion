const Header = () => {
    return (
        <div className="p-2 md:p-3 shadow-sm flex justify-between items-center px-6 md:px-5 lg:px-14 absolute top-0 left-0 w-full z-50">
            <div className="flex items-center gap-2 md:gap-3">
                <img
                    className="w-8 h-8  lg:h-10 lg:w-10"
                    src="/logo.png"
                    alt="GoFusion Logo"
                />
                <div className="text-md lg:text-lg md:text-base font-bold text-orange-500">
                    GoFusion
                </div>
            </div>
        </div>
    );
};

export default Header;
