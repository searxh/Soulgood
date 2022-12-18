import React from "react";
import { delayInterval } from "../default";
import { GlobalContext } from "../states";
import { ContentInterface } from "../types";

export function Them({ content, next }: { content: string; next: any }) {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { name, scene } = global_state;
    let processedContent = content.replace("<name>", name);
    const sceneRouter = () => {
        //routing for jumping back to main route
        console.log("THEM - ", next);
        if (next === "default") {
            return scene + 1;
            //routing for jumping back to main route
        } else {
            return next;
        }
    };
    React.useEffect(() => {
        if (printing) {
            let accumulator = "";
            let delay = 0;
            for (let i = 0; i < processedContent.length; i++) {
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    accumulator += processedContent[i];
                    setDisplayedContent(accumulator);
                }, delay);
                delay += delayInterval;
            }
            setTimeout(() => setPrinting(false), delay);
        }
    }, [scene]);
    return (
        <button
            disabled={printing}
            onClick={() => {
                dispatch({
                    type: "set",
                    field: "scene",
                    payload: sceneRouter(),
                });
                setPrinting(true);
            }}
            className="absolute bg-white text-black rounded-3xl text-xl
            text-center p-5 py-10 z-10 left-0 right-0 mx-auto top-5 w-[80%] shadow-md"
        >
            {displayedContent}
        </button>
    );
}

export function Us({ content, next }: { content: string; next: any }) {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { name, scene } = global_state;
    let processedContent = content.replace("<name>", name);
    const sceneRouter = () => {
        //routing for jumping back to main route
        if (next === "default") {
            return scene + 1;
            //routing for jumping back to main route
        } else {
            return next;
        }
    };
    React.useEffect(() => {
        if (printing) {
            let accumulator = "";
            let delay = 0;
            for (let i = 0; i < processedContent.length; i++) {
                // eslint-disable-next-line no-loop-func
                setTimeout(() => {
                    accumulator += processedContent[i];
                    setDisplayedContent(accumulator);
                }, delay);
                delay += delayInterval;
            }
            setTimeout(() => setPrinting(false), delay);
        }
    }, [scene]);
    return (
        <>
            <button
                disabled={printing}
                onClick={() => {
                    dispatch({
                        type: "set",
                        field: "scene",
                        payload: sceneRouter(),
                    });
                    setPrinting(true);
                }}
                className="absolute bg-white text-black rounded-full
            text-center p-5 py-5 text-xl z-10 left-0 right-0 mx-auto bottom-5 w-[80%] shadow-md"
            >
                {displayedContent}
            </button>
        </>
    );
}

export function Input({ content, next }: { content: string; next: any }) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { name, scene } = global_state;
    const sceneRouter = () => {
        //routing for jumping back to main route
        if (next === "default") {
            return scene + 1;
            //routing for jumping back to main route
        } else {
            return next;
        }
    };
    React.useEffect(() => {
        if (name !== "") {
            dispatch({ type: "set", field: "scene", payload: sceneRouter() });
        }
    }, [name]);
    return (
        <div
            className="absolute bg-white text-black rounded-full
            text-center p-3 z-10 left-0 right-0 mx-auto bottom-5 w-[80%] shadow-md text-xl"
        >
            {content}
            <form
                className="flex"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (inputRef.current !== null) {
                        dispatch({
                            type: "set",
                            field: "name",
                            payload: inputRef.current.value,
                        });
                    }
                }}
            >
                <input
                    ref={inputRef}
                    autoFocus={true}
                    className="bg-slate-200 w-[80%] mx-auto p-2 mt-2 border-2
                     border-black rounded-full"
                />
            </form>
        </div>
    );
}

export function Choice({
    content,
    next,
}: {
    content: ContentInterface;
    next: any;
}) {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const handleSetChoice = (choice: number) => {
        console.log(next);
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
            z-10 left-0 right-0 mx-auto bottom-5 w-[90%]"
        >
            <button
                onClick={() => handleSetChoice(0)}
                className="flex-1 bg-white rounded-full shadow-md
                text-center p-5 mr-2 hover:scale-[102%] transition"
            >
                {content.subContent}
            </button>
            <button
                onClick={() => handleSetChoice(1)}
                className="flex-1 bg-white rounded-full shadow-md
                text-center p-5 ml-2 hover:scale-[102%] transition"
            >
                {content.subContent1}
            </button>
        </div>
    );
}
