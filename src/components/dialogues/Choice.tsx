import React from "react";
import { GlobalContext } from "../../states";
import { ContentInterface } from "../../types";

const Choice = ({
    content,
    next,
}: {
    content: ContentInterface;
    next: any;
}) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const handleSetChoice = (choice: number) => {
        if (choice === 0) {
            dispatch({ type: "set", field: "scene", payload: scene + 1 });
        } else {
            dispatch({
                type: "set",
                field: "scene",
                payload: scene + next[0] + 1,
            });
        }
    };
    return (
        <div
            className="flex absolute justify-evenly text-xl
            z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] break-words"
        >
            <button
                onClick={() => handleSetChoice(0)}
                className="flex-1 bg-white rounded-full shadow-md border-2
                text-center p-5 mr-2 hover:scale-[102%] transition"
            >
                {content.subContent}
            </button>
            <button
                onClick={() => handleSetChoice(1)}
                className="flex-1 bg-white rounded-full shadow-md border-2
                text-center p-5 ml-2 hover:scale-[102%] transition"
            >
                {content.subContent1}
            </button>
        </div>
    );
};

export default Choice;
