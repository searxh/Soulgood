import React from "react";
import { qList } from "../default";
import { GlobalContext } from "../states";

const badList = ["Q3_Enough", "Q9_Parent"];

const AnswerBubble = ({
    clickCallback,
    type,
}: {
    clickCallback: Function;
    type: string;
}) => {
    const { global_state } = React.useContext(GlobalContext);
    const { answers } = global_state;
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
        <div className="relative w-[80%] max-w-[40rem] h-[80%] m-auto">
            <button
                onClick={handleOnClick}
                className={`${
                    transition ? "opacity-100" : "opacity-0"
                } md:hover:bg-red-500 absolute -top-3 -right-3 mx-auto w-12 h-12 drop-shadow-md
                bg-red-400 text-white z-30 transition duration-500 rounded-full`}
            >
                X
            </button>
            <div
                className={`${
                    transition ? "scale-100" : "scale-0 opacity-0"
                } flex flex-col w-full h-full z-10 m-auto backdrop-blur-lg shadow-md
                p-5 rounded-xl transition duration-500 bg-white bg-opacity-90 overflow-scroll text-left`}
            >
                {Object.keys(answers).map((key) => {
                    if (
                        (type === "bad" && badList.includes(key)) ||
                        (type === "good" && !badList.includes(key))
                    ) {
                        return (
                            <div key={key} className="w-full my-3 px-3">
                                <div className="m-auto font-semibold text-pink-500">
                                    {qList[key] + "?"}
                                </div>
                                <div className="m-auto font-light text-lg">
                                    {answers[key]}
                                </div>
                            </div>
                        );
                    } else {
                        return <></>;
                    }
                })}
            </div>
        </div>
    );
};

export default AnswerBubble;
