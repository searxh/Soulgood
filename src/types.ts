import { Dispatch } from "react";
export interface GlobalStateInterface {
    name: string;
    scene: number;
}
export interface ActionInterface {
    type: string;
    field?: string | Array<string>;
    payload: any;
}

export interface GlobalContextInterface {
    global_state: GlobalStateInterface;
    dispatch: Dispatch<ActionInterface>;
}
