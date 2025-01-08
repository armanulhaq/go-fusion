const Header = () => {
    return (
        <div className="p-2 md:p-3 shadow-sm flex justify-between items-center px-3 md:px-5 fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className="flex items-center gap-2 md:gap-3">
                <img
                    className="w-6 h-6 md:w-8 md:h-8"
                    src="/logo.png"
                    alt="GoFusion Logo"
                />
                <div className="text-sm md:text-base font-bold text-white">
                    GoFusion
                </div>
            </div>
        </div>
    );
};

export default Header;
