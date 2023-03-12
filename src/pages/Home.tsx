/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import Page1 from "../components/intro/Page1";
import Page2 from "../components/intro/Page2";
import Page3 from "../components/intro/Page3";
import Page4 from "../components/intro/Page4";
import PreIntroForm from "../components/PreIntroForm";
import { introPlayInterval } from "../default";
import useAspectRatio from "../hooks/useAspectRatio";
import { GlobalContext } from "../states";
import { PreIntroFormInterface } from "../types";

const aspectRatioBg = [
    "/assets/Background/game_cover.webp",
    "/assets/Background/game_cover_m.webp",
];

const introScreens = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, null];

export default function Home() {
    const { dispatch } = React.useContext(GlobalContext);
    const navigate = useNavigate();
    //status 0 = initial, status 1 = form shows up, status 2 = intro starts
    const [status, setStatus] = React.useState<number>(0);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const aspectRatioIndex = useAspectRatio([1.777, 0.5625]);
    const handleOnClick = () => {
        setStatus(1);
    };
    const answerCallback = (formData: PreIntroFormInterface) => {
        console.log(formData);
        dispatch({
            type: "set",
            field: "preIntroForm",
            payload: formData,
        });
        setStatus(2);
    };
    React.useEffect(() => {
        if (status === 2) {
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
    }, [status]);
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
                <div
                    className={`flex flex-col w-full h-full m-auto drop-shadow-md`}
                >
                    <div className="flex flex-col text-center m-auto">
                        <div className="text-center text-xl font-medium text-neutral-700">
                            WELCOME TO THE ULTIMATE GAME
                        </div>
                        <div
                            style={{
                                textShadow: "5px 5px 0px pink",
                            }}
                            className="text-6xl font-bold leading-none text-pink-400 rounded-full"
                        >
                            GOODIVAL
                        </div>
                        <img
                            className="mx-auto w-[20rem] h-20"
                            src="/assets/logo.png"
                            alt=""
                        />
                        {status === 0 ? (
                            <button
                                style={{
                                    boxShadow: "5px 5px 0px forestgreen",
                                }}
                                className="text-2xl bg-green-400 rounded-lg text-white
                                px-24 py-2 m-auto hover:scale-105 hover:bg-green-500 transition 
                                duration-300 font-medium my-10"
                                onClick={handleOnClick}
                            >
                                Start!
                            </button>
                        ) : (
                            <PreIntroForm
                                answerCallback={(formData) =>
                                    answerCallback(formData)
                                }
                            />
                        )}
                    </div>
                </div>
            ) : (
                introScreens[currentPage - 1]
            )}
        </div>
    );
}
