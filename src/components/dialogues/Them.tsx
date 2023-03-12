import React from "react";
import { GlobalContext } from "../../states";
import { NextContext } from "../../next";
import { delayInterval } from "../../default";

const Them = ({
    content,
    next,
    speaker,
    printDoneCallback,
    preventNext,
}: {
    content: string;
    next: any;
    speaker: string;
    printDoneCallback?: Function;
    preventNext: boolean | null;
}) => {
    const [printing, setPrinting] = React.useState<boolean>(true);
    const [displayedContent, setDisplayedContent] = React.useState<string>("");
    const { global_state } = React.useContext(GlobalContext);
    const { setActive, setNextScene } = React.useContext(NextContext);
    const { name, scene } = global_state;
    const preventRef = React.useRef<any>(null);
    const printDoneCallbackRef = React.useRef<any>(null);
    const sceneRouterRef = React.useRef<any>(null);
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    preventRef.current = preventNext;
    printDoneCallbackRef.current = printDoneCallback;
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
            if (printDoneCallbackRef.current !== undefined) {
                printDoneCallbackRef.current();
            }
            setPrinting(false);
            if (preventRef.current === null) {
                setNextScene(sceneRouterRef.current);
                setActive(true);
            }
        }, delay);
    }, [scene]);
    return (
        <button
            onClick={() => {
                if (!preventNext) {
                    /*dispatch({
                        type: "set",
                        field: "scene",
                        payload: sceneRouter(),
                    });*/
                }
            }}
            style={{
                boxShadow: "5px 5px 0px BurlyWood",
            }}
            className="absolute bg-gradient-to-r from-orange-100 to-orange-200 rounded-2x rounded-xl
            text-center z-10 left-0 right-0 mx-auto top-10 w-[90%] max-w-[50rem] drop-shadow-lg text-neutral-700"
        >
            <div className="relative w-full h-full p-5 py-10 mx-auto">
                <div
                    style={{
                        boxShadow: "5px 5px 0px mediumvioletred",
                    }}
                    className="absolute -top-3 left-[10%] bg-pink-500 px-10 py-1 
                    drop-shadow-md rounded-xl text-white"
                >
                    {speaker}
                </div>
                <div className="mx-auto max-w-[40rem]">{displayedContent}</div>
            </div>
        </button>
    );
};

export default Them;
