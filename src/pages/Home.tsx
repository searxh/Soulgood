import React from "react";
import { useNavigate } from "react-router-dom";
import Zoom from "../components/Zoom";

export default function Home() {
    const navigate = useNavigate();
    const [start, setStart] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setStart(true);
    };
    React.useEffect(() => {
        if (start) {
            setTimeout(() => navigate("/story"), 2000);
        }
    }, [start]);
    return (
        <div
            className={`flex relative h-screen w-screen bg-yellow-100 overflow-hidden`}
        >
            <img
                className={` ${
                    start ? "opacity-100 z-50" : "opacity-0 -z-10 blur-lg"
                } absolute top-0 bottom-0 right-0 left-0 transition duration-500 m-auto object-center object-cover w-full`}
                src="/assets/spiral.gif"
                alt=""
            />
            <div className={`flex flex-col w-full h-full m-auto`}>
                <div className="flex flex-col text-2xl m-auto font-extrabold">
                    <div className="text-center">
                        WELCOME TO THE ULTIMATE GAME
                    </div>
                    <img
                        className=" mx-auto w-[25rem] h-24"
                        src="/assets/logo.png"
                        alt=""
                    />
                    <Zoom />
                </div>
                <button
                    className="text-3xl bg-green-300 rounded-lg border-black font-bold
					border-2 px-24 py-3 m-auto hover:scale-105 transition duration-300"
                    onClick={handleOnClick}
                >
                    Start!
                </button>
            </div>
        </div>
    );
}
