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

export const scenes: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "soul",
                state: "neutral",
                location: { top: "top-[50%]", left: "left-[50%]" },
            },
        ],
        dialogues: [
            {
                type: "input",
                content: "What is your name?",
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
                name: "soul",
                state: "neutral",
                location: { top: "top-[50%]", left: "left-[50%]" },
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
