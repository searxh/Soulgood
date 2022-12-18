import { Dispatch } from "react";
export interface CharacterType {
    name: string;
    state: string;
    location: LocationType;
}
export interface LocationType {
    top: string;
    left: string;
}
export interface ContentType {
    subContent: string;
    subContent1: string;
}
export interface SceneType {
    dialogue: { type: string; content: string | ContentType };
    characters: Array<CharacterType>;
    background: { name: string };
    next: string | Array<number>;
}
export interface GlobalStateInterface {
    name: string;
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
