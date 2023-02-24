import React from "react";
import { ContentInterface } from "../types";
import Them from "./dialogues/Them";
import Choice from "../components/dialogues/Choice";
import Input from "../components/dialogues/Input";
import Special from "../components/dialogues/Special";
import Us from "../components/dialogues/Us";

const Dialogue = ({
    type,
    content,
    next,
    speaker,
    printDoneCallback,
    preventNext,
    targetList,
}: {
    type: string;
    content: string | ContentInterface;
    next: any;
    speaker?: string;
    printDoneCallback?: Function;
    preventNext: boolean | null;
    targetList: Array<number>;
}) => {
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
        <Input
            content={content as string}
            next={next}
            targetList={targetList}
        />
    ) : type === "choice" ? (
        <Choice content={content as ContentInterface} next={next} />
    ) : type === "special" ? (
        <Special content={content as string} next={next} />
    ) : null;
};

export default Dialogue;
