import { SceneInterface } from "../../types";

const defaultGiraffeClassName = {
    top: "40%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const thirdAttractionBackground = {
    name: "balloon.webp",
};

export const thirdScene: Array<SceneInterface> = [
    {
        trackChange: 0,
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ทำไมมันยังไม่ตรงสักทีนะ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "สวัสดี นายกำลังทำอะไรอยู่น่ะ",
                speaker: "เรา",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไง ฉันกำลังจัดลูกโป่งอยู่ มันไม่ยอมตรงสักที",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แบบนี้ฉันก็เปิดให้คนเข้ามาเล่นไม่ได้สิ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เอ๋ มันก็ดูตรงแล้วนะ",
                speaker: "เรา",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "หรือให้ฉันช่วยไหม",
                speaker: "เรา",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไม่เป็นไร เดี๋ยวฉันดูเองดีกว่า",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "มันยังไม่ตรงตามที่ฉันต้องการสักทีน่ะ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เอ๋ แต่ว่ายังไงคนก็ปาลูกโป่งแตกอยู่ดีไม่ใช่เหรอ",
                speaker: "เรา",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ไม่สิ ที่นี่น่ะ เป็นสวนสนุกอันดับหนึ่งเลยนะ มาตรฐานต้องสูงเป็นธรรมดาแหละ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เพราะฉะนั้นเครื่องเล่นของฉันจะต้องสมบูรณ์แบบทุกด้าน",
                speaker: "ยีราฟ",
            },
            {
                type: "choice",
                content: {
                    subContent:
                        "จริง ๆ แล้ว ฉันว่าไม่ต้องตรงขนาดนั้นมันก็สนุกได้นะ",
                    subContent1: "ฉันว่าตอนนี้ก็ดีมากพอแล้วนะ",
                },
            },
        ],
        background: thirdAttractionBackground,
        next: [1, 1],
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แต่ว่า...",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แต่ว่า...",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "....",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันยังไม่พอใจกับผลงานของตัวเองน่ะ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        trackChange: 1,
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "<name> ไม่เคยรู้สึกแบบนี้หรอ แบบว่าทำยังไงก็ยังรู้สึกไม่ดีพอสักทีน่ะ ทั้งที่คนอื่นก็ไม่ได้กดดัน",
                speaker: "ยีราฟ",
            },
            {
                type: "choice",
                content: {
                    subContent: "เคย",
                    subContent1: "ไม่เคย",
                },
            },
        ],
        background: thirdAttractionBackground,
        next: [12, 1],
    },
    {
        branch: 1,
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เคยเหรอ ลองเล่าให้ฟังหน่อยได้มั้ยว่าเพราะอะไรเธอถึงรู้สึกไม่ดีพอ ถึงแม้จะไม่มีใครกดดัน",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1,
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แล้ว <name> รับมือกับความรู้สึกไม่ดีพอนี้ได้มั้ย",
                speaker: "ยีราฟ",
            },
            {
                type: "choice",
                content: {
                    subContent: "ได้",
                    subContent1: "ไม่ได้",
                },
            },
        ],
        background: thirdAttractionBackground,
        next: [1, 9],
    },
    {
        branch: 1.1,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอรับมือกับความรู้สึกไม่ดีพอได้ยังไงเหรอ บอกฉันหน่อยได้มั้ย",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "งั้นเรามาลองคิดไปด้วยกันไหมว่าจะจัดการกับความคิดนี้ยังไงดี",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "<name> เคยใช้วิธีจัดการกับความรู้สึกที่ไม่ดีพออะไรมาบ้างหรอ",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แล้วเธอคิดว่าวิธีที่ทำไป ทำไมมันถึงยังไม่ได้ผลล่ะ",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ถ้าอย่างนั้นเราจะทำให้มันดีขึ้นได้ยังไงบ้าง หรือพอมีวิธีอื่นอีกไหมที่เธอคิดว่ามันอาจจะช่วยได้",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Happy",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "พอได้ฟังที่เธอเล่า ฉันว่าฉันเริ่มเข้าใจตัวเองมากขึ้นแล้วล่ะ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Worry",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "บางทีมันอาจจะไม่ใช่เพราะฉันทำได้ไม่ดีพอหรอก แต่เป็นเพราะมาตรฐานของฉันเพิ่มขึ้นเรื่อย ๆ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Stress",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เพราะแบบนี้ ฉันถึงรู้สึกว่ามันยังไม่ดีพอสักที",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันจะเก็บเรื่องนี้ไว้เป็นบทเรียนนะ ขอบคุณเธอมากเลย",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 1.2,
        characters: [
            {
                name: "giraffe",
                state: "Happy",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ถ้าเกิดเธอความรู้สึกแบบนี้บ้าง ก็อยากให้เธอลองเอาวิธีที่เธอบอกฉันเมื่อกี้ไปปรับใช้ดูนะ",
                speaker: "ยีราฟ",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เก่งจังเลย บอกฉันหน่อยสิว่าเธอทำยังไงถึงไม่เคยรู้สึกไม่ดีพอเลย",
                speaker: "ยีราฟ",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Happy",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ขอบคุณที่เธอมาช่วยฉันมากเลยนะ นี่ลูกโป่งกับตุ๊กตาเป็นของตอบเเทน",
                speaker: "ยีราฟ",
            },
            {
                type: "special",
                content: "New item/Balloon2",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Happy",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ขอบคุณที่เธอมาช่วยฉันมากเลยนะ นี่ลูกโป่งกับตุ๊กตาเป็นของตอบเเทน",
                speaker: "ยีราฟ",
            },
            {
                type: "special",
                content: "New item/Heart2",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "Idle",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไหน ๆ ก็ไหน ๆ แล้ว เธอลองเล่นดูหน่อยไหม",
                speaker: "ยีราฟ",
            },
            {
                type: "special",
                content: "Balloon",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
];
