import React from "react";

const NewItem = ({ clickCallback }: { clickCallback: Function }) => {
    const [transition, setTransition] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setTransition(false);
        setTimeout(() => {
            clickCallback();
        }, 1000);
    };
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <button
            onClick={handleOnClick}
            className={`${
                transition ? "scale-100 hover:scale-105" : "scale-0"
            } relative flex flex-col w-[350px] h-[350px] z-10 m-auto shadow-md
            p-5 rounded-full bg-blue-200 opacity-100 border-2 transition duration-500`}
        >
            <img
                className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
                src="/assets/shiny.gif"
                alt=""
            />
            <img
                className="drop-shadow-md m-auto"
                src="/assets/backpack.webp"
                alt=""
            />
        </button>
    );
};

export default NewItem;
