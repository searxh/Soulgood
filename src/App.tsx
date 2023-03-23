import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Result from "./pages/Result";
import generateUID from "./lib/utilities/GenerateUID";
import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_FIREBASE_MEASUREMENT_ID as string);

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
