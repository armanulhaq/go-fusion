# Go Fusion
This is a React-based travel planner application that helps users generate customized trip itineraries based on their preferences. Utilizing the Google Places API and Anthropic's AI capabilities, the app allows users to input their travel details, such as destination, budget and number of travelers. The application generates a detailed travel plan, which includes hotel recommendations and a structured itinerary for each day.

## Features
- User-Friendly Interface: Simple input for travel preferences.
- Google Places Integration: Select destinations using autocomplete.
- AI-Powered Trip Generation: Generates detailed trip plans.
- Dynamic Itinerary: Includes hotel recommendations and daily activities.

## Technologies Used
- React
- Google Places API
- Anthropic AI SDK
- Tailwind CSS
- React Router
- ShadCN

## Getting Started

### Pre-requisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/armanulhaq/go-fusion.git
   cd go-fusion
   ```
2. Install the dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   Create a .env file in the root directory and add your API keys:
     ```
     VITE_GOOGLE_PLACES_API_KEY=your_google_places_api_key
     VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
     ```
4. Start the development server:
    ```
    npm run dev
    ```
5. Open your browser and go to http://localhost:5173.

## Usage
- Enter your travel preferences including destination, budget, number of travelers, and duration.
- Click on "Generate Trip" to receive your customized itinerary.
- Review your trip plan which includes hotel recommendations and daily activities.
