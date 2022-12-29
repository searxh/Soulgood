import { SceneInterface } from "../../types";

const defaultRabbitClassName = {
    top: "25%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const firstAttractionBackground = {
    name: "forest.jpg",
};

export const firstScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: { ...defaultRabbitClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เอ ไปไหนก่อนดีนะ",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "โอ้ะ เธอตรงนั้น ขอความช่วยเหลือหน่อยสิ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "มีเรื่องอะไรเหรอ",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉัน คือ พนักงานดูแลชิงช้าสวรรค์",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ช่วยตามหา ไขควง ให้ฉันหน่อยได้ไหม ฉันลืมไว้ด้านบนเครื่องเล่นน่ะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไม่อย่างนั้นคนอื่นต้องคิดว่าฉันไม่ได้เรื่องแน่เลย",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ทำไมถึงคิดแบบนั้นล่ะ",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันน่ะเคยกดเครื่องเล่นพลาด ชิงช้าวนไปวนมาอยู่เป็นชั่วโมงเลย ยังรู้สึกเสียใจ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันคิดเรื่องนั้นวนไปวนมาจนนอนไม่หลับอยู่เลย",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันเลยไม่กล้าทำอะไรเองแล้วล่ะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "มีคนอื่นว่าเธออย่างนั้นเหรอ",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เปล่าหรอก ฉันรู้สึกแย่เองทั้งที่ไม่มีใครว่าฉัน",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content:
                    "งั้นเธอลองหาเองดูดีมั้ย เผื่อเธอจะมีความมั่นใจในตัวเองมากขึ้น",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "แต่ไม่ต้องกังวล เดี๋ยวฉันจะช่วยเธอเอง",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: { ...defaultRabbitClassName, opacity: 0 },
            },
            {
                name: "a1-objects",
                state: "neutral",
                className: {},
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "<name> ช่วยบอกฉันหน่อยสิว่ามันอยู่ตรงไหน",
                speaker: "กระต่าย",
            },
            {
                type: "choice",
                content: {
                    subContent: "อยู่ทางซ้าย",
                    subContent1: "อยู่ทางขวา",
                },
            },
        ],
        background: firstAttractionBackground,
        next: [1, 4],
    },
    {
        branch: 1,
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เจอแล้ว ! ขอบคุณมากเลยนะ เธอช่วยฉันได้เยอะเลย",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "a1-objects",
                state: "neutral",
                className: {},
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เอ๊ะ ไขควงที่ฉันรู้จักไม่ใช่แบบนี้นะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "a1-objects",
                state: "neutral",
                className: {},
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ลองหาใหม่กันเถอะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: { ...defaultRabbitClassName, opacity: 0 },
            },
            {
                name: "a1-objects",
                state: "neutral",
                className: {},
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ทางซ้ายมือนั่นไง !",
                speaker: "เรา",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เจอแล้ว ! ขอบคุณมากเลยนะ เธอช่วยฉันได้เยอะเลย",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แล้วเวลาเธอรู้สึกกังวลที่จะต้องสิ่งที่เคยผิดพลาดมาก่อน เธอรับมือยังไงหรอ",
                speaker: "กระต่าย",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "การที่เธอช่วยฉันหาของทำให้ฉันคิดได้ว่าความผิดพลาดในอดีตไม่ได้เป็นเหมือนเดิม ขอบคุณมาก ๆ เลยนะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "อ่ะนี่ฉันให้ ตุ๊กตาหัวใจมีปีก เก็บไว้อาจจะช่วยอะไรเธอได้",
                speaker: "กระต่าย",
            },
            {
                type: "special",
                content: "",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ขอให้โชคดีนะ",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
];
