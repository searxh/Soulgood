import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Result from "./pages/Result";
import generateUID from "./lib/utilities/GenerateUID";
import ReactGA from "react-ga4";

const measurementId = process.env.REACT_APP_MEASUREMENT_ID;
if (measurementId) ReactGA.initialize(measurementId);

function App() {
    React.useEffect(() => {
        generateUID();
    }, []);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/result" element={<Result />} />
        </Routes>
    );
}

export default App;
