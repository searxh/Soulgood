import React from "react";

const Balloon = ({ clickCallback }: { clickCallback: Function }) => {
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
        <button
            onClick={handleOnClick}
            className={`${
                transition
                    ? "scale-100 md:hover:scale-105"
                    : "scale-[1000%] opacity-0"
            } relative flex flex-col w-[350px] aspect-square max-w-[80%] z-10 m-auto
            p-5 rounded-full transition duration-500`}
        >
            <img
                className="m-auto h-full"
                src="/assets/Props/Balloon1.webp"
                alt=""
            />
        </button>
    );
};

export default Balloon;
