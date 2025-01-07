import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import CreateTrip from "./create-trip/index.jsx";
import Header from "./components/custom/Header.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/create-trip",
        element: <CreateTrip />,
    },
    {
        path: "/view-trip/:tripID",
        //element: <ViewTrip />,
    },
]);

createRoot(document.getElementById("root")).render(
    <>
        <Header />
        <RouterProvider router={router} />
    </>
);
