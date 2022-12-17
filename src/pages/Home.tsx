import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    const [start, setStart] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setStart(true);
    };
    React.useEffect(() => {
        if (start) {
            setTimeout(() => navigate("/story"), 500);
        }
    }, [start]);
    return !start ? (
        <div className="flex flex-col h-screen w-screen bg-yellow-100">
            <div className="flex flex-col text-2xl m-auto font-extrabold">
                <div className="text-center">WELCOME TO THE ULTIMATE GAME</div>
                <img
                    className=" mx-auto w-[25rem] h-24"
                    src="/assets/logo.png"
                    alt=""
                />
            </div>

            <button
                className="text-3xl bg-green-300 rounded-lg border-black font-bold
				border-2 px-24 py-3 m-auto hover:scale-105 transition duration-300"
                onClick={handleOnClick}
            >
                Start!
            </button>
        </div>
    ) : (
        <div className="overflow-hidden">
            <img
                className="animate-ping
				m-auto h-[300% w-[800%] aspect-video"
                src="/assets/spiral.webp"
                alt=""
            />
        </div>
    );
}
