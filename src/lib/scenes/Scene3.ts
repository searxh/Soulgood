import { SceneInterface } from "../../types";

const defaultGiraffeClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const thirdAttractionBackground = {
    name: "balloon.jpg",
};

export const thirdScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "giraffe",
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เพราะฉะนั้นเครื่องเล่นของฉันจะต้องเพอร์เฟกต์ทุกด้าน",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
                state: "neutral",
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
        characters: [
            {
                name: "giraffe",
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอไม่เคยรู้สึกแบบนี้หรอ แบบว่าทำยังไงก็ยังรู้สึกไม่ดีพอสักทีน่ะ ทั้งที่คนอื่นก็ไม่ได้กดดัน",
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
        next: [4, 1],
    },
    {
        branch: 1,
        characters: [
            {
                name: "giraffe",
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เคยหรอ ลองเล่าให้ฟังหน่อยได้ไหม",
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
        branch: 1,
        characters: [
            {
                name: "giraffe",
                state: "neutral",
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
        branch: 1,
        characters: [
            {
                name: "giraffe",
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "บางทีมันอาจจะไม่ใช่เพราะเธอทำได้ไม่ดีพอจริง ๆ หรอก แต่เป็นเพราะพอเธอทำได้ตามที่ตัวเองต้องการ มาตรฐานของเธอก็เพิ่มขึ้นตามไปด้วย",
                speaker: "ยีราฟ",
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
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "การพยายามไขว่คว้ามาตรฐานที่เพิ่มขึ้นแบบไม่มีที่สิ้นสุดคงทำให้เธอรู้สึกเหนื่อยได้",
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
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แสดงว่าเธอจัดการกับความรู้สึกของตัวเองได้ดีมากเลยนะเนี่ย ฉันคงจะต้องหาตรงกลางให้ได้แบบเธอบ้างเเล้วล่ะ",
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
                state: "neutral",
                className: { ...defaultGiraffeClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ขอบคุณที่เธอมาช่วยฉันมากเลยนะ นี่ (ลูกโป่ง) เป็นของตอบเเทน อันนี้ยังเหลืออยู่ฉันให้เธอเเล้วกัน",
                speaker: "ยีราฟ",
            },
            {
                type: "special",
                content: "New item",
            },
        ],
        background: thirdAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "giraffe",
                state: "neutral",
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
