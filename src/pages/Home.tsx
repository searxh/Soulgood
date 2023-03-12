/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import Page1 from "../components/intro/Page1";
import Page2 from "../components/intro/Page2";
import Page3 from "../components/intro/Page3";
import Page4 from "../components/intro/Page4";
import { introPlayInterval } from "../default";
import useAspectRatio from "../hooks/useAspectRatio";

const aspectRatioBg = [
    "/assets/Background/game_cover.webp",
    "/assets/Background/game_cover_m.webp",
];

const introScreens = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, null];

export default function Home() {
    const navigate = useNavigate();
    const [start, setStart] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const aspectRatioIndex = useAspectRatio([1.777, 0.5625]);
    const handleOnClick = () => {
        setStart(true);
    };
    //currentPage.current = 4;
    React.useEffect(() => {
        if (start) {
            introScreens.forEach((item, index) => {
                setTimeout(() => {
                    if (!item)
                        setTimeout(() => {
                            navigate("/story");
                        }, 2000);
                    setCurrentPage((prev) => prev + 1);
                }, index * (introPlayInterval + 2100));
            });
        }
    }, [start]);
    return (
        <div
            className={`flex relative h-screen w-screen font-mitr overflow-hidden`}
        >
            <img
                className={` ${
                    currentPage === 0
                        ? "opacity-100 -z-10 blur-none"
                        : "opacity-100 -z-10 blur-md"
                } absolute top-0 bottom-0 right-0 left-0 transition duration-1000 
                m-auto object-cover object-center w-[120%] h-[120%] animate-lightbob`}
                src={aspectRatioBg[aspectRatioIndex]}
                alt=""
            />
            <img
                className={` ${
                    currentPage === 0
                        ? "opacity-100 -z-[15] blur-none"
                        : "opacity-100 -z-[15] blur-md"
                } absolute top-0 bottom-0 right-0 left-0 transition duration-1000 
                m-auto object-cover object-center w-[120%] h-[120%]`}
                src={aspectRatioBg[aspectRatioIndex]}
                alt=""
            />
            <div
                className={` ${
                    currentPage === 0
                        ? "opacity-0 -z-10"
                        : "opacity-100 -z-[5] blur-md"
                } absolute top-0 bottom-0 right-0 left-0 transition duration-1000 
                m-auto bg-white bg-opacity-70 w-full h-full`}
            />
            <img
                className={` ${
                    currentPage === 5
                        ? "opacity-100 z-50"
                        : "opacity-0 -z-10 blur-lg"
                } absolute top-0 bottom-0 right-0 left-0 transition duration-500 
                m-auto object-cover w-full h-full grayscale`}
                src="/assets/spiral.gif"
                alt=""
            />
            {currentPage === 0 ? (
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
                introScreens[currentPage - 1]
            )}
        </div>
    );
}
