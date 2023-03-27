import { SceneInterface } from "../../types";

const defaultRabbitClassName = {
    top: "45%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const firstAttractionBackground = {
    name: "ferris.webp",
};

export const firstScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "rabbit",
                state: "Happy",
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
                state: "Idle",
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
                state: "Idle",
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
                state: "Happy",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันเป็นพนักงานดูแลชิงช้าสวรรค์",
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
                state: "Idle",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ช่วยตามหา ไขควง ให้ฉันหน่อยได้มั้ย ฉันลืมไว้ด้านบนเครื่องเล่นน่ะ ฉันจะต้องซ่อมชิงช้าสวรรค์ให้เสร็จทันเวลา",
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
                state: "Idle",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ได้สิ",
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
                state: "Idle",
                className: { ...defaultRabbitClassName, opacity: 0 },
            },
            {
                name: "a1-objects",
                state: "Idle",
                className: {},
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ตามหาไขควงที่กระต่ายลืมไว้บนชิงช้าสวรรค์",
                speaker: "โจทย์",
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
                state: "Happy",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เจอแล้ว ! ขอบคุณมากเลยนะ ว่าเเต่เธอช่วยฉันซ่อมชิงช้าสวรรค์ได้มั้ย",
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
                state: "Idle",
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
                state: "Idle",
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
                state: "Idle",
                className: { ...defaultRabbitClassName, opacity: 0 },
            },
            {
                name: "a1-objects",
                state: "Idle",
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
                state: "Happy",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เจอแล้ว ! ขอบคุณมากเลยนะ ว่าเเต่เธอช่วยฉันซ่อมชิงช้าสวรรค์ได้มั้ย",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        trackChange: 1,
        characters: [
            {
                name: "rabbit",
                state: "Sad",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ถ้าฉันซ่อมเองแล้วมันออกมาไม่ดี คนอื่นต้องคิดว่าฉันไม่ได้เรื่องแน่เลย",
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
                state: "Sad",
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
                state: "Sad",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันน่ะเคยซ่อมเครื่องเล่นพลาด ชิงช้าหมุนวนไปวนมาอยู่เป็นชั่วโมงเลย ฉันยังรู้สึกเสียใจแถมยังโกรธตัวเองด้วย",
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
                state: "Sad",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ตอนนี้ยังคิดเรื่องนั้นวนไปวนมาจนนอนไม่หลับอยู่เลย ต่อจากนี้คงไม่กล้าทำอะไรเองเเล้วล่ะ",
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
                state: "Sad",
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
                state: "Sad",
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
                state: "Sad",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "งั้นเธอลองซ่อมเองอีกทีมั้ย",
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
                state: "Sad",
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
                state: "Sad",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "อืม... แต่ฉันก็ยังรู้สึกกังวลอยู่ดีน่ะ",
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
                state: "Idle",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แล้วเวลาเธอรู้สึกกังวลที่จะต้องทำสิ่งที่เคยทำผิดพลาดมาก่อน เธอรับมือยังไงหรอ",
                speaker: "กระต่าย",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "Happy",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ขอบคุณมากเลยนะที่เล่าให้ฉันฟัง เธอทำให้ฉันมั่นใจขึ้นเลยล่ะ ฉันอยากลองซ่อมด้วยตัวเองดู เธอเป็นกำลังใจให้ฉันด้วยนะ",
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
                state: "Screwdriver",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "...",
                speaker: "กระต่าย",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        trackChange: 0,
        characters: [
            {
                name: "rabbit",
                state: "Happy",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ซ่อมเสร็จแล้วล่ะ ขอบคุณมากๆเลยนะ",
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
                state: "Idle",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เรื่องราวของเธอทำให้ฉันคิดได้ว่าใคร ๆ ก็เคยผิดพลาดกันทั้งนั้น เราแค่เรียนรู้จากมันเเล้วเดินต่อไปก็พอ",
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
                state: "Idle",
                className: defaultRabbitClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "อ่ะนี่ฉันให้ ตุ๊กตา เก็บไว้อาจจะช่วยอะไรเธอได้",
                speaker: "กระต่าย",
            },
            {
                type: "special",
                content: "New item/Heart2",
            },
        ],
        background: firstAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "rabbit",
                state: "Happy",
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
