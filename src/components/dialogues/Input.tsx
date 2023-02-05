import { GlobalContext } from "../../states";
import React from "react";

const Input = ({ content, next }: { content: string; next: any }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { name, scene } = global_state;
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    return (
        <div
            className="absolute bg-white text-black rounded-3xl border-2
            text-center p-3 z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] shadow-md text-xl"
        >
            {content}
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputRef.current !== null) {
                        const newName =
                            name.length !== 0 ? name : inputRef.current.value;
                        dispatch({
                            type: "multi-set",
                            field: ["name", "scene"],
                            payload: [newName, sceneRouter()],
                        });
                    }
                }}
            >
                <input
                    ref={inputRef}
                    autoFocus={true}
                    className="w-[80%] mx-auto p-2 mt-2 rounded-xl outline-none
                     border-black text-center"
                />
            </form>
        </div>
    );
};

export default Input;
