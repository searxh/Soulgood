import React from "react";
import { GlobalContext } from "../states";
import { ContentInterface } from "../types";
import { scenes } from "../lib/Scenes";
import { Choice, Input, Them, Us } from "../lib/Dialogue";
import { Owl } from "../lib/Characters";
import { Bg } from "../lib/Background";
import { BranchInfoInterface } from "../types";

export default function Story() {
    const { global_state } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const [branchInfo, setBranchInfo] =
        React.useState<BranchInfoInterface | null>(null);
    const [start, setStart] = React.useState<boolean>(true);
    const calculateLockDialogue = () => {
        return scenes[scene].dialogues.length > 1 ? true : false;
    };
    const [lockDialogue, setLockDialogue] = React.useState<boolean>(
        calculateLockDialogue
    );
    const [next, setNext] = React.useState<any>();
    const calculateNext = () => {
        if (branchInfo === null) {
            return scenes[scene].next;
        } else {
            const { startBranchIndex, firstBranchLength, endBranchIndex } =
                branchInfo;
            const lastFirstBranchIndex = startBranchIndex + firstBranchLength;
            if (scene === lastFirstBranchIndex || scene === endBranchIndex) {
                console.log("go to end branch");
                setBranchInfo(null);
                return endBranchIndex + 1;
            }
            return scenes[scene].next;
        }
    };
    const printDoneCallback = () => {
        setLockDialogue(false);
    };
    React.useLayoutEffect(() => {
        if (Array.isArray(scenes[scene].next)) {
            const a = scenes[scene].next[0] as number;
            const b = scenes[scene].next[1] as number;
            setBranchInfo({
                startBranchIndex: scene,
                endBranchIndex: scene + a + b,
                firstBranchLength: a,
                secondBranchLength: b,
            });
        }
        setNext(calculateNext());
        setLockDialogue(calculateLockDialogue());
        if (scene === 0) setTimeout(() => setStart(false), 100);
        console.log("[SCENE " + scene + "]");
    }, [scene]);
    return (
        <div className="relative h-screen w-screen overflow-hidden font-mitr">
            {scene === 0 && (
                <img
                    className={` ${
                        start ? "opacity-100 z-50" : "opacity-0 -z-10 blur-lg"
                    } absolute top-0 bottom-0 right-0 left-0 transition duration-500 m-auto 
                    object-cover w-full h-full grayscale`}
                    src="/assets/spiral.gif"
                    alt=""
                />
            )}
            <div className="flex m-auto h-full relative">
                {scenes[scene].characters.map((character, index) => {
                    return (
                        <Character
                            key={index}
                            name={character.name}
                            state={character.state}
                            className={character.className}
                        />
                    );
                })}
                {scenes[scene].dialogues.map((dialogue, index) => {
                    if (index === 0) {
                        return (
                            <Dialogue
                                key={index}
                                type={dialogue.type}
                                content={dialogue.content}
                                next={next}
                                speaker={dialogue.speaker}
                                printDoneCallback={printDoneCallback}
                                preventNext={calculateLockDialogue()}
                            />
                        );
                    } else if (!lockDialogue) {
                        console.log("hello");
                        return (
                            <Dialogue
                                key={index}
                                type={dialogue.type}
                                content={dialogue.content}
                                next={next}
                                speaker={dialogue.speaker}
                                preventNext={false}
                            />
                        );
                    }
                    return null;
                })}
                <Background name={scenes[scene].background.name} />
            </div>
        </div>
    );
}

function Character({
    name,
    state,
    className,
}: {
    name: string;
    state: string;
    className: any;
}) {
    return (
        <>
            {name === "owl" ? (
                <Owl state={state} className={className} />
            ) : null}
        </>
    );
}

function Dialogue({
    type,
    content,
    next,
    speaker,
    printDoneCallback,
    preventNext,
}: {
    type: string;
    content: string | ContentInterface;
    next: any;
    speaker?: string;
    printDoneCallback?: Function;
    preventNext: boolean;
}) {
    console.log(type, content, next);
    return (
        <>
            {type === "them" ? (
                <Them
                    content={content as string}
                    next={next}
                    speaker={speaker as string}
                    printDoneCallback={printDoneCallback}
                    preventNext={preventNext}
                />
            ) : type === "us" ? (
                <Us content={content as string} next={next} />
            ) : type === "input" ? (
                <Input content={content as string} next={next} />
            ) : type === "choice" ? (
                <Choice content={content as ContentInterface} next={next} />
            ) : null}
        </>
    );
}

function Background({ name }: { name: string }) {
    return <Bg name={name} />;
}
