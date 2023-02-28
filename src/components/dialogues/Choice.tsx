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
            className="flex absolute justify-evenly
            z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] break-words"
        >
            <button
                onClick={() => handleSetChoice(0)}
                style={{
                    boxShadow: "5px 5px 0px gray",
                }}
                className="flex-1 bg-gradient-to-r from-white to-neutral-200 rounded-full drop-shadow-lg
                text-center p-5 mr-2 hover:scale-[102%] transition"
            >
                {content.subContent}
            </button>
            <button
                onClick={() => handleSetChoice(1)}
                style={{
                    boxShadow: "5px 5px 0px gray",
                }}
                className="flex-1 bg-gradient-to-r from-white to-neutral-200 rounded-full drop-shadow-lg
                text-center p-5 ml-2 hover:scale-[102%] transition"
            >
                {content.subContent1}
            </button>
        </div>
    );
};

export default Choice;
