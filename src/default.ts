import { GlobalStateInterface, PreIntroFormInterface } from "./types";

export const initialState: GlobalStateInterface = {
    name: "",
    track: 0,
    scene: 0,
    preIntroForm: {} as PreIntroFormInterface,
    answers: {},
};

export const delayInterval = 0;

export const introPlayInterval = 5000;
