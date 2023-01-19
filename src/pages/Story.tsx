/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
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
import useStoryController from "../hooks/useStoryController";
import useWindowSize from "../hooks/useWindowSize";

export default function Story() {
    const { scene, start, next, lockDialogue, printDoneCallback } =
        useStoryController();
    const { windowSize } = useWindowSize();
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
