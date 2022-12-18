import React from "react";
import { GlobalContext } from "../states";
import { ContentInterface } from "../types";
import { scenes } from "../lib/Scenes";
import { Choice, Input, Them, Us } from "../lib/Dialogue";
import { Owl } from "../lib/Characters";
import { Forest, Hills } from "../lib/Background";
import { BranchInfoInterface } from "../types";

export default function Story() {
    const { global_state } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const [branchInfo, setBranchInfo] =
        React.useState<BranchInfoInterface | null>(null);
    const [next, setNext] = React.useState<any>();
    const calculateNext = () => {
        if (branchInfo === null) {
            return scenes[scene].next;
        } else {
            const {
                startBranchIndex,
                choiceTaken,
                firstBranchLength,
                endBranchIndex,
            } = branchInfo;
            const lastFirstBranchIndex = startBranchIndex + firstBranchLength;
            if (scene !== startBranchIndex && choiceTaken === undefined) {
                const newChoiceTaken = scene <= lastFirstBranchIndex ? 0 : 1;
                setBranchInfo({ ...branchInfo, choiceTaken: newChoiceTaken });
                return "default";
            } else if (choiceTaken !== undefined) {
                console.log(scene, branchInfo, lastFirstBranchIndex);
                if (
                    scene === lastFirstBranchIndex ||
                    scene === endBranchIndex
                ) {
                    console.log("go to end branch");
                    setBranchInfo(null);
                    return endBranchIndex + 1;
                } else {
                    return "default";
                }
            }
            return scenes[scene].next;
        }
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
    }, [scene]);
    return (
        <div className="h-screen w-screen overflow-hidden font-mitr">
            <div className="flex m-auto h-full relative bg-blue-400">
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
                    return (
                        <Dialogue
                            key={index}
                            type={dialogue.type}
                            content={dialogue.content}
                            next={next}
                        />
                    );
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
}: {
    type: string;
    content: string | ContentInterface;
    next: any;
}) {
    console.log(type, content, next);
    return (
        <>
            {type === "them" ? (
                <Them content={content as string} next={next} />
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
    return (
        <>
            {name === "hills" ? (
                <Hills name={name} />
            ) : name === "forest" ? (
                <Forest name={name} />
            ) : null}
        </>
    );
}
