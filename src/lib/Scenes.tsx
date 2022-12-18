import { SceneType } from "../types";
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

export const scenes: Array<SceneType> = [
    {
        characters: [
            {
                name: "soul",
                state: "neutral",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "input",
            content: "What is your name?",
        },
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
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "Nice to meet you <name>, follow me!",
        },
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
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "choice",
            content: {
                subContent: "where is this?",
                subContent1: "what happened?",
            },
        },
        background: {
            name: "hills",
        },
        next: [2, 3],
    },
    {
        characters: [
            {
                name: "soul",
                state: "neutral",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "1",
        },
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        characters: [
            {
                name: "soul",
                state: "worried",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "1",
        },
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        characters: [
            {
                name: "soul",
                state: "worried",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "2",
        },
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        characters: [
            {
                name: "soul",
                state: "happy",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "2",
        },
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
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "2",
        },
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        characters: [
            {
                name: "soul",
                state: "worried",
                location: { top: "top-[40%]", left: "left-[40%]" },
            },
        ],
        dialogue: {
            type: "them",
            content: "you're back on track",
        },
        background: {
            name: "hills",
        },
        next: "default",
    },
];
