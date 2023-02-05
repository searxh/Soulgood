import { GlobalContext } from "../../states";
import React from "react";
import { NextContext } from "../../next";
import { delayInterval } from "../../default";

const Us = ({ content, next }: { content: string; next: any }) => {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state } = React.useContext(GlobalContext);
    const { setActive, setNextScene } = React.useContext(NextContext);
    const { name, scene } = global_state;
    const sceneRouterRef = React.useRef<any>(null);
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    sceneRouterRef.current = sceneRouter();
    let processedContent = content.replace("<name>", name);
    React.useEffect(() => {
        if (!printing) setPrinting(true);
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
        setTimeout(() => {
            setPrinting(false);
            setNextScene(sceneRouterRef.current);
            setActive(true);
        }, delay);
    }, [scene]);
    return (
        <>
            <button
                disabled={printing}
                onClick={() => {
                    /*dispatch({
                        type: "set",
                        field: "scene",
                        payload: sceneRouter(),
                    });*/
                }}
                className="absolute bg-white text-black rounded-3xl border-2
            text-center z-10 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem] shadow-md"
            >
                <div className="relative w-full h-full p-5 py-10 break-words">
                    <div
                        className="absolute -top-3 left-[10%] bg-yellow-200 px-10 py-0.5 
                        shadow-md rounded-xl"
                    >
                        เรา
                    </div>
                    {displayedContent}
                </div>
            </button>
        </>
    );
};

export default Us;
