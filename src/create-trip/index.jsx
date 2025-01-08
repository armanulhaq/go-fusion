import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
import { SelectBudgetOptions, SelectTravelList } from "@/constants/options";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Anthropic from "@anthropic-ai/sdk";
const CreateTrip = () => {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const redirect = useNavigate();

    const handleInput = (name, value) => {
        if (name === "location" && value?.label) {
            setFormData((prev) => ({
                ...prev,
                location: {
                    label: value.label,
                    value: value.value,
                },
            }));
            return;
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const onGenerateTrip = async () => {
        if (!formData?.location || !formData?.traveller || !formData?.budget) {
            toast.error("Please fill all required fields.");
            return;
        }

        setLoading(true);

        const anthropic = new Anthropic({
            apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
            dangerouslyAllowBrowser: true,
        });

        const prompt = `You are a travel planning assistant. Generate a travel plan in valid JSON format.
        The response must be a single JSON object with no additional text or formatting.
        Create a plan with the following exact structure:
        {
            "destination": string,
            "duration": string,
            "groupSize": string,
            "budget": string,
            "hotels": [
                {
                    "name": string,
                    "address": string,
                    "pricePerNight": string,
                    "coordinates": {
                        "lat": number,
                        "lng": number
                    },
                    "rating": number,
                    "description": string
                }
            ],
            "itinerary": {
                "morning": [
                    {
                        "time": string,
                        "activity": string,
                        "location": string,
                        "price": string,
                        "description": string,
                        "recommendedDuration": string,
                        "bookingRequired": boolean,
                        "bestTimeToVisit": string,
                        "localTips": string,
                    }
                ],
                "afternoon": [
                    // Same structure as morning activities
                ],
                "evening": [
                    // Same structure as morning activities
                ]
            },
            "bestTimeToVisit": string,
            "weatherNote": string
        }

        Create a plan for:
        - Location: ${formData.location.label}
        - Number of days: ${formData.noOfDays}
        - Traveller(s): ${formData.traveller}
        - Budget: ${formData.budget}

        Requirements:
        1. Include exactly 5 hotels
        2. Each time period (morning, afternoon, evening) must have at least 2 activities
        3. All prices must include the local currency symbol
        4. Ratings must be between 0 and 5, with one decimal place
        5. Times must be in HH:MM-HH:MM format

        Important: Ensure the response is ONLY the JSON object with no additional text, markdown, or formatting.`;

        try {
            const msg = await anthropic.messages.create({
                model: "claude-3-5-sonnet-20241022",
                max_tokens: 4000,
                temperature: 0.7,
                system: "You are a JSON-only response generator. Always respond with valid, well-formatted JSON objects. Never include any additional text, markdown, or explanations outside the JSON structure.",
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            });

            const responseContent = msg.content[0].text;

            const parsedResponse = JSON.parse(responseContent);
            redirect("/view-trip", { state: { tripData: parsedResponse } }); //sends the data to view-trip
            //useNavigate stored in redirect allows us to Pass additional data (called state) to the target route when navigating.
        } catch (error) {
            console.error("API Error:", error);
            toast.error("Failed to generate the trip plan. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col gap-20">
            {loading && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        <AiOutlineLoading3Quarters className="h-16 w-16 text-white animate-spin" />
                        <span className="text-white text-xl mt-4">
                            Generating your trip plan...
                        </span>
                    </div>
                </div>
            )}
            <div className="sm:px-10 md:px-32 lg:px-56 xl:px-250 px-5 mt-24 relative">
                <h2 className="font-bold text-3xl">
                    Tell us your travel preferences 🏕️
                </h2>
                <p className="mt-3 text-gray-500 text-xl">
                    Just provide some basic information, and our trip planner
                    will generate a customized itinerary based on your
                    preferences.
                </p>
                <div className="mt-10 flex flex-col gap-10">
                    <div>
                        <h2 className="text-xl my-3 font-bold">
                            What is your destination of choice?
                        </h2>
                        <GooglePlacesAutocomplete
                            apiKey="AIzaSyAsiu-PZRr7Mi2Ec1GidLo9vMpGMKpZv5I"
                            selectProps={{
                                place,
                                onChange: (value) => {
                                    setPlace(value);
                                    handleInput("location", value);
                                },
                            }}
                        />
                    </div>
                </div>
                <div>
                    <h2 className="text-xl my-3 font-bold">
                        What is your Budget?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                        {SelectBudgetOptions.map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleInput("budget", item.title)
                                }
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                    formData?.budget == item.title &&
                                    "shadow-lg border-orange-500 bg-orange-50"
                                }`}
                            >
                                <h2 className="4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">
                                    {item.title}
                                </h2>
                                <h2 className="text-sm text-gray-500">
                                    {item.desc}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl my-3 font-bold">
                        Who do you plan on traveling with on your next
                        adventure?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-5">
                        {SelectTravelList.map((item, index) => (
                            <div
                                key={index}
                                onClick={() =>
                                    handleInput("traveller", item.people)
                                }
                                className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${
                                    formData?.traveller == item.people &&
                                    "shadow-lg border-orange-500 bg-orange-50"
                                }`}
                            >
                                <h2 className="4xl">{item.icon}</h2>
                                <h2 className="font-bold text-lg">
                                    {item.title}
                                </h2>
                                <h2 className="text-sm text-gray-500">
                                    {item.desc}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="my-10 justify-end flex">
                    <Button
                        className="bg-orange-500 text-white"
                        onClick={onGenerateTrip}
                        disable={loading}
                    >
                        {loading ? (
                            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
                        ) : (
                            "Generate Trip"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CreateTrip;
