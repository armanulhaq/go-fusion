import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";
import PlacesToVisit from "./components/PlacesToVisit";
import { useLocation, useNavigate } from "react-router-dom";

const ViewTrip = () => {
    const location = useLocation(); // gives access to the current route's location object. This object includes state information sent by useNavigation
    const tripData = location.state?.tripData;
    const navigate = useNavigate(); // Hook to navigate programmatically

    if (!tripData) {
        // Redirect to the home page if no trip data is found
        navigate("/", { replace: true });
        return null; // Return null to stop rendering the rest of the component
    }
    return (
        <div className="py-10  lg:p-10">
            <h1 className="text-xl lg:text-3xl px-10  md:px-20 font-bold">
                Your Trip Plan
            </h1>
            {/* <pre className="mt-5 bg-gray-100 p-5 rounded">
                {JSON.stringify(tripData, null, 2)}
            </pre> */}
            <div className="p-10 md:px-20 lg:pd-44 xl:pd-56">
                {/* Information Section */}
                <InfoSection trip={tripData} />
                <Hotels trip={tripData} />
                {/* Daily Plans */}
                <PlacesToVisit trip={tripData} />
            </div>
        </div>
    );
};

export default ViewTrip;
