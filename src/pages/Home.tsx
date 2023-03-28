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
import useObserver from "../hooks/useObserver";
import { GlobalContext } from "../states";
import { PreIntroFormInterface } from "../types";

const aspectRatioBg = [
    "/assets/Background/game_cover.webp",
    "/assets/Background/game_cover_m.webp",
];

const introScreens = [<Page1 />, <Page2 />, <Page3 />, <Page4 />, null];

export default function Home() {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { preIntroForm } = global_state;
    const navigate = useNavigate();
    //status 0 = initial, status 1 = form shows up, status 2 = intro starts
    const [status, setStatus] = React.useState<number>(0);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const [formData, setFormData] = React.useState<PreIntroFormInterface>({
        age: 1,
        sex: "",
    });
    const aspectRatioIndex = useAspectRatio([1.777, 0.5625]);
    const handleOnStart = () => {
        setStatus(1);
    };
    const handleOnContinue = () => {
        navigate("/story");
    };
    const answerCallback = (formData: PreIntroFormInterface) => {
        setFormData(formData);
        setStatus(2);
    };
    const imgIsVisible = useObserver({
        elementId: "logo-img",
    });
    React.useEffect(() => {
        if (status === 2) {
            introScreens.forEach((item, index) => {
                dispatch({
                    type: "reset",
                });
                const timeout = setTimeout(() => {
                    if (!item) {
                        const timeout1 = setTimeout(() => {
                            dispatch({
                                type: "set",
                                field: "preIntroForm",
                                payload: formData,
                            });
                            navigate("/story");
                        }, 2000);
                        return () => clearTimeout(timeout1);
                    }
                    setCurrentPage((prev) => prev + 1);
                }, index * (introPlayInterval + 2100));
                return () => clearTimeout(timeout);
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
                } absolute top-0 bottom-0 right-0 left-0 transition duration-1000 brightness-110
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
                    <div className="flex flex-col text-center m-auto mt-[11rem] md:mt-[5rem]">
                        <img
                            id="logo-img"
                            className={`${
                                imgIsVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-12 opacity-0"
                            } m-auto h-52 md:h-32 mb-5 drop-shadow-md 
                            md:hover:scale-105 duration-1000 transition object-contain`}
                            src="assets/Logo.webp"
                            draggable={false}
                            alt=""
                        />
                        <div
                            className="mx-auto max-w-[20rem] text-center text-base md:text-lg font-medium 
                        text-pink-500 tracking-widest"
                        >
                            มาสํารวจความเป็น perfectionist ในตัวคุณกันเถอะ!
                        </div>
                        {status === 0 ? (
                            <div className="grid grid-cols-1 gap-3 my-5 w-[70%] min-w-[12rem] mx-auto">
                                {Object.keys(preIntroForm).length !== 0 ? (
                                    <button
                                        style={{
                                            boxShadow: "5px 5px 0px dodgerblue",
                                        }}
                                        className="text-2xl bg-cyan-400 rounded-lg text-white
                            py-1 w-full m-auto md:hover:bg-cyan-500 transition 
                            duration-300 font-medium"
                                        onClick={handleOnContinue}
                                    >
                                        CONTINUE
                                    </button>
                                ) : null}
                                <button
                                    style={{
                                        boxShadow: "5px 5px 0px hotpink",
                                    }}
                                    className="text-2xl bg-pink-300 rounded-lg text-white
                                py-1 w-full m-auto md:hover:bg-pink-500 transition 
                                duration-300 font-medium"
                                    onClick={handleOnStart}
                                >
                                    START
                                </button>
                            </div>
                        ) : (
                            <PreIntroForm
                                answerCallback={(formData) =>
                                    answerCallback(formData)
                                }
                                backCallback={() => {
                                    setStatus(0);
                                }}
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
