/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { GlobalContext } from "../states";
import { ContentInterface } from "../types";
import { scenes } from "../lib/scenes/Scenes";
import { Choice, Input, Them, Us, Special } from "../lib/Dialogue";
import {
    FirstAttractionObjects,
    Giraffe,
    KangarooKid,
    KangarooKid1,
    KangarooMother,
    Owl,
    Peacock,
    Rabbit,
} from "../lib/Characters";
import { Bg } from "../lib/Background";
import { BranchInfoInterface } from "../types";

export default function Story() {
    const { global_state } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const [branchInfo, setBranchInfo] =
        React.useState<BranchInfoInterface | null>(null);
    const [start, setStart] = React.useState<boolean>(true);
    const [next, setNext] = React.useState<any | undefined>();
    const [windowSize, setWindowSize] = React.useState<{
        height: Number;
        width: Number;
    }>({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [lockDialogue, setLockDialogue] = React.useState<
        boolean | null | undefined
    >();
    const calculateLockDialogue = () => {
        if (scenes[scene].dialogues.length > 1) {
            setLockDialogue(true);
        } else {
            setLockDialogue(null);
        }
    };
    const calculateNext = () => {
        if (branchInfo === null) {
            console.log("[CALCULATE NEXT]", scenes[scene].next);
            return scenes[scene].next;
        } else {
            const { startBranchIndex, firstBranchLength, endBranchIndex } =
                branchInfo;
            const lastFirstBranchIndex = startBranchIndex + firstBranchLength;
            if (scene === lastFirstBranchIndex || scene === endBranchIndex) {
                setBranchInfo(null);
                console.log(
                    "[CALCULATE NEXT] GO END BRANCH",
                    endBranchIndex + 1
                );
                return endBranchIndex + 1;
            }
            console.log("[CALCULATE NEXT]", scenes[scene].next);
            return scenes[scene].next;
        }
    };
    const printDoneCallback = () => {
        if (lockDialogue !== null) setLockDialogue(false);
    };
    React.useLayoutEffect(() => {
        console.log("----------[SCENE " + scene + "]----------------");
        if (scene < scenes.length && Array.isArray(scenes[scene].next)) {
            const a = scenes[scene].next[0] as number;
            const b = scenes[scene].next[1] as number;
            setBranchInfo({
                startBranchIndex: scene,
                endBranchIndex: scene + a + b,
                firstBranchLength: a,
                secondBranchLength: b,
            });
        }
        if (scene < scenes.length) {
            calculateLockDialogue();
            setNext(calculateNext());
        }
        if (scene === 0) setTimeout(() => setStart(false), 100);
    }, [scene]);
    React.useEffect(() => {
        const bodyElement = document.getElementById("body");
        if (bodyElement) {
            bodyElement.style.height = window.innerHeight + "px";
            bodyElement.style.width = window.innerWidth + "px";
            bodyElement.style.touchAction = "none";
        }
        window.addEventListener("resize", (e) => {
            console.log(window.innerWidth, window.innerHeight);
            setWindowSize({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        });
        return () =>
            window.removeEventListener("resize", (e) => {
                setWindowSize({
                    height: window.innerHeight,
                    width: window.innerWidth,
                });
            });
    }, []);
    return scene < scenes.length ? (
        <div
            style={{
                height: windowSize.height + "px",
                width: windowSize.width + "px",
            }}
            className="relative overflow-hidden w-screen font-mitr bg-white"
        >
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
                {next &&
                    lockDialogue !== undefined &&
                    scenes[scene].dialogues.map((dialogue, index) => {
                        if (index === 0) {
                            console.log(
                                "prevent debug",
                                scene,
                                lockDialogue,
                                dialogue.content
                            );
                            return (
                                <Dialogue
                                    key={index}
                                    type={dialogue.type}
                                    content={dialogue.content}
                                    next={next}
                                    speaker={dialogue.speaker}
                                    printDoneCallback={printDoneCallback}
                                    preventNext={lockDialogue}
                                />
                            );
                        } else if (!lockDialogue) {
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
    ) : null;
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
            ) : name === "rabbit" ? (
                <Rabbit state={state} className={className} />
            ) : name === "a1-objects" ? (
                <FirstAttractionObjects state={state} className={className} />
            ) : name === "peacock" ? (
                <Peacock state={state} className={className} />
            ) : name === "giraffe" ? (
                <Giraffe state={state} className={className} />
            ) : name === "kid_kangaroo" ? (
                <KangarooKid state={state} className={className} />
            ) : name === "kid_kangaroo_1" ? (
                <KangarooKid1 state={state} className={className} />
            ) : name === "mother_kangaroo" ? (
                <KangarooMother state={state} className={className} />
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
    preventNext: boolean | null;
}) {
    React.useEffect(() => {}, [type]);
    return type === "them" ? (
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
    ) : type === "special" ? (
        <Special content={content as string} next={next} />
    ) : null;
}

function Background({ name }: { name: string }) {
    return <Bg name={name} />;
}
