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
    top: "40%",
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
                type: "us",
                content: "ที่นี่ ที่ไหนกันเนี่ย",
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
                content: "โอ้ สวัสดี คุณลูกค้า ยินดีต้อนรับสู่สวนสนุก",
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
                type: "us",
                content: "ไม่ใช่นะ ฉันไม่ใช่ลูกค้า ที่นี่ที่ไหนกันเนี่ย",
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
                content:
                    "ที่นี่คือสวนสนุกของฉันเอง ไม่รู้ว่าเพราะอะไร แต่มันกำลังจะล้มละลาย เพราะไม่มีลูกค้าเลยแม้แต่คนเดียว",
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
                content: "ไหน ๆ เธอก็มาถึงนี่แล้ว จะลองเข้าไปดูหน่อยมั้ยล่ะ",
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
                type: "choice",
                content: {
                    subContent: "ได้สิ ฉันอยากเข้าไปดู",
                    subContent1: "ไม่เอาดีกว่า",
                },
            },
        ],
        background: {
            name: "hills",
        },
        next: [2, 4],
    },
    {
        branch: 1,
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
                content: "ดีเลย ว่าแต่เธอชื่ออะไรล่ะ",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        branch: 1,
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: defaultOwlClassName,
            },
        ],
        dialogues: [
            {
                type: "input",
                content: "คุณชื่ออะไร?",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        branch: 2,
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
                content:
                    "เข้ามาเถอะ .... ข้างในอาจจะมีคำตอบที่พาเธอออกไปจากที่นี่ก็ได้นะ",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: defaultOwlClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ถ้าอย่างนั้นก็ได้",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        branch: 2,
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
                content: "ดีเลย ว่าแต่เธอชื่ออะไรล่ะ",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: defaultOwlClassName,
            },
        ],
        dialogues: [
            {
                type: "input",
                content: "คุณชื่ออะไร?",
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
                content:
                    "ยินดีที่ได้รู้จักนะ <name> เอากระเป๋านี่ไปด้วยสิ เผื่อไว้ใส่ของนะ",
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
                content: "ขอให้สนุกกับการเดินทางครั้งนี้นะ",
            },
        ],
        background: {
            name: "hills",
        },
        next: "default",
    },
];
