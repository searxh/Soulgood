import { SceneInterface } from "../types";
/*
{
    characters: array to render objects or characters
    dialogue: specify dialogue type and content
    background: specify background used
    next: specify next action 
        if default -> increment scene by 1 normally
        else if array -> 
            array[0] specifies first choice branch length
            array[1] specifies second choice branch length
}
*/

const defaultOwlClassName = {
    top: "35%",
    left: "15%",
};

export const scenes: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: { ...defaultOwlClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "input",
                content: "What is your name?",
            },
            {
                type: "them",
                content: "wtf lol?",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: defaultOwlClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "Nice to meet you <name>, follow me!",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
];
