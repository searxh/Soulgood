import React from "react";

const NewItem = ({
    clickCallback,
    item,
}: {
    clickCallback: Function;
    item: string;
}) => {
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
        <>
            <div
                className={`${
                    transition ? "opacity-50" : "opacity-0"
                } absolute left-0 top-0 w-screen h-screen bg-black transition duration-500`}
            />
            <div
                className={`${
                    transition ? "scale-100" : "scale-0"
                } relative flex flex-col w-[350px] aspect-square max-w-[80%] z-10 m-auto drop-shadow-md
            p-5 rounded-3xl border-2 bg-white bg-opacity-60 backdrop-blur-lg transition duration-500`}
            >
                <img
                    className="absolute top-0 bottom-0 left-0 right-0 w-full h-full z-10"
                    src="/assets/shiny.gif"
                    alt=""
                />
                <img
                    className="drop-shadow-md m-auto"
                    src={`/assets/Props/${item}.webp`}
                    alt=""
                />
                <button
                    onClick={handleOnClick}
                    className={`${
                        transition ? "opacity-100" : "opacity-0"
                    } hover:bg-red-500 absolute -top-3 -right-3 mx-auto w-12 h-12 drop-shadow-md
                    bg-red-400 text-white z-10 transition duration-500 rounded-full`}
                >
                    X
                </button>
            </div>
        </>
    );
};

export default NewItem;
