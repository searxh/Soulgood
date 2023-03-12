import React from "react";

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState<{
        height: number;
        width: number;
    }>({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    React.useEffect(() => {
        const bodyElement = document.getElementById("body");
        if (bodyElement) {
            bodyElement.style.height = window.innerHeight + "px";
            bodyElement.style.width = window.innerWidth + "px";
            bodyElement.style.touchAction = "none";
        }
        window.addEventListener("resize", (e) => {
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        });
        return () =>
            window.removeEventListener("resize", (e) => {
                setWindowSize({
                    height: window.innerHeight,
                    width: window.innerWidth,
                });
            });
    }, []);
    return { windowSize };
};

export default useWindowSize;
