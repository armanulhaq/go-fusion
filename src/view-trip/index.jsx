import { useLocation } from "react-router-dom";
import InfoSection from "./components/InfoSection";
import Hotels from "./components/Hotels";
import PlacesToVisit from "./components/PlacesToVisit";
import Footer from "./components/Footer";

const ViewTrip = () => {
    const location = useLocation(); // gives access to the current route's location object. This object includes state information sent by useNavigation
    const tripData = location.state?.tripData;

    if (!tripData) {
        return (
            <div className="p-10">
                <h1 className="text-2xl font-bold">No Trip Data Found</h1>
                <p>Please go back and create a trip plan.</p>
            </div>
        );
    }

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold">Your Trip Plan</h1>
            <pre className="mt-5 bg-gray-100 p-5 rounded">
                {JSON.stringify(tripData, null, 2)}
            </pre>
            <div className="p-10 md:px-20 lg:pd-44 xl:pd-56">
                {/* Information Section */}
                <InfoSection tripData={tripData} />
                <Hotels tripData={tripData} />
                {/* Daily Plans */}
                {/* <Itinerary trip={trip} />  */}
                <PlacesToVisit tripData={tripData} />
                {/* Footer */}
                <Footer tripData={tripData} />
            </div>
        </div>
    );
};

export default ViewTrip;
