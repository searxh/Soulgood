import React from "react";
import Zoom from "./Zoom";

const ZoomModule = ({ clickCallback }: { clickCallback: Function }) => {
    const [transition, setTransition] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setTransition(false);
        setTimeout(() => {
            clickCallback();
        }, 1000);
    };
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <>
            <div
                className={`${
                    transition ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } relative h-full w-full
                transition duration-300`}
            >
                <Zoom />
                <button
                    onClick={handleOnClick}
                    style={{
                        boxShadow: "5px 5px 0px maroon",
                    }}
                    className="absolute bottom-5 right-5 px-5 transition duration-300 justify-center
                        z-20 w-52 h-16 shadow-md flex m-auto bg-pink-500 md:hover:bg-pink-600 rounded-2xl py-2"
                >
                    <div className="my-auto text-white drop-shadow-md">
                        NEXT
                    </div>
                    <svg
                        className="w-6 h-6 fill-white my-auto ml-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        {
                            "<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
                        }
                        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg>
                </button>
            </div>
        </>
    );
};

export default ZoomModule;
