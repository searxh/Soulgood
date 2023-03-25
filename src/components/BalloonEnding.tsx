/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const BalloonEnding = ({ callback }: { callback: Function }) => {
    const [transition, setTransition] = React.useState<boolean>(false);
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
        setTimeout(() => {
            callback();
        }, 5100);
    }, []);
    return (
        <div
            className={`${
                transition ? "-translate-y-[1000px]" : "translate-y-[1000px]"
            } relative flex flex-col w-[350px] aspect-square max-w-[80%] z-10 m-auto
            p-5 rounded-full transition duration-[5000ms]`}
        >
            <img
                className="m-auto h-full"
                src="/assets/Props/Balloon2.webp"
                alt=""
            />
        </div>
    );
};

export default BalloonEnding;
