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
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};
const defaultBackground = {
    name: "apark.png",
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
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
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
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
            {
                type: "choice",
                content: {
                    subContent: "ได้สิ ฉันอยากเข้าไปดู",
                    subContent1: "ไม่เอาดีกว่า",
                },
            },
        ],
        background: defaultBackground,
        next: [1, 3],
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
                speaker: "นกฮูก",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
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
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
            {
                type: "special",
                content: "",
            },
        ],
        background: defaultBackground,
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
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
        next: "default",
    },
];
