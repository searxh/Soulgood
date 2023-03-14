import React from "react";
import { GlobalContext } from "../states";

const test = ["hello", "hi", "welcome", "yo"];

const AnswerBubble = ({ clickCallback }: { clickCallback: Function }) => {
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
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <button
            onClick={handleOnClick}
            className={`${
                transition
                    ? "scale-100 hover:scale-105"
                    : "scale-[1000%] opacity-0"
            } relative flex flex-col w-[350px] aspect-square max-w-[80%] z-10 m-auto
            p-5 rounded-full transition duration-500 grid gap-5`}
        >
            {Object.keys(answers).map((key) => (
                <div className="flex bg-white rounded-full w-24 h-24">
                    <div className="m-auto">{key}</div>
                    <div className="m-auto">{answers[key]}</div>
                </div>
            ))}
        </button>
    );
};

export default AnswerBubble;
