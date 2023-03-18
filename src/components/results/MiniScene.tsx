import React from "react";
import useObserver from "../../hooks/useObserver";

interface IProps {
    character: string;
    background: string;
}

const MiniScene = ({ character, background }: IProps) => {
    const observer = useObserver({
        elementId: character + background,
        delay: 2000,
    });
    return (
        <div
            className={`relative h-[20rem] max-w-[40rem] mx-auto
            overflow-hidden rounded-3xl shadow-md`}
        >
            <img
                id={character + background}
                src={character}
                style={{
                    top: "30%",
                    left: "0%",
                    right: "0%",
                    bottom: "0%",
                }}
                className={`${
                    observer ? "opacity-100" : "opacity-0"
                } absolute drop-shadow-md m-auto
                animate-bob z-10 h-full transition duration-1000`}
                alt=""
            />
            <img
                src={background}
                className={`${
                    observer
                        ? "blur-sm opacity-60 bg-white"
                        : "blur-none opacity-100"
                } object-cover w-full h-full transition duration-1000`}
                alt=""
            />
        </div>
    );
};

export default MiniScene;
