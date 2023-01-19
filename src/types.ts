import { Dispatch, SetStateAction } from "react";
export interface CharacterInterface {
    name: string;
    state: string;
    className: any;
}
export interface LocationInterface {
    top: string;
    left: string;
}
export interface ContentInterface {
    subContent: string;
    subContent1: string;
}
export interface DialogueInterface {
    type: string;
    content: string | ContentInterface;
    speaker?: string;
}
export interface SceneInterface {
    dialogues: Array<DialogueInterface>;
    characters: Array<CharacterInterface>;
    background: { name: string };
    next: string | Array<number>;
    //param for switching music
    trackChange?: number;
    //extra param for visual purpose only
    branch?: number;
}
export interface GlobalStateInterface {
    name: string;
    track: number;
    scene: number;
}
export interface ActionInterface {
    type: string;
    field?: string | Array<string>;
    payload: any;
}
export interface BranchInfoInterface {
    startBranchIndex: number;
    choiceTaken?: number;
    firstBranchLength: number;
    secondBranchLength: number;
    endBranchIndex: number;
}

export interface GlobalContextInterface {
    global_state: GlobalStateInterface;
    dispatch: Dispatch<ActionInterface>;
}

export interface NextContextInterface {
    setActive: Dispatch<SetStateAction<boolean>>;
    setNextScene: Dispatch<SetStateAction<number>>;
}
