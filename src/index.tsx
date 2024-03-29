import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { GlobalStateProvider } from "./states";
import { NextStateProvider } from "./next";
import AudioPlayer from "./lib/utilities/AudioPlayer";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <div className="relative w-screen h-screen select-none">
        <BrowserRouter>
            <GlobalStateProvider>
                <NextStateProvider>
                    <AudioPlayer />
                    <App />
                </NextStateProvider>
            </GlobalStateProvider>
        </BrowserRouter>
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(//console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
