/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";

const EndFade = () => {
    const [transition, setTransition] = React.useState<boolean>(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 100);
        const timeout1 = setTimeout(() => {
            navigate("/result");
        }, 2000);
        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout1);
        };
    }, []);
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0"
            } absolute w-screen h-screen top-0 bottom-0 left-0 right-0
             bg-white transition duration-[2000ms]`}
        />
    );
};

export default EndFade;
