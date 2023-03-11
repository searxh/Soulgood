import { SceneInterface } from "../../types";

const defaultPeacockClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const secondAttractionBackground = {
    name: "carousel.webp",
};

export const secondScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: { ...defaultPeacockClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "นั่นมันม้าหมุนนี่นา ลองไปดูดีกว่า",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "อืมมม มันสวยหรือยังนะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "สวัสดี เธอกำลังทำอะไรอยู่เหรอ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "โอ้ สวัสดี ฉันกำลังทาสีม้าหมุนอยู่น่ะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "มันโอเครึยัง ถูกใจเธอมั้ย",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "สำหรับฉันยังไม่ถูกใจเลย มองยังไงก็ไม่สวย",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ทำไมถึงคิดแบบนั้นล่ะ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันรู้สึกไม่มั่นใจน่ะเลยผัดวันประกันพรุ่งไปเรื่อยๆ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ตอนแรกฉันว่าจะทำให้เสร็จก่อนถึงวันกำหนดส่ง แต่ตอนนี้ทำไปทำมาจนมันใกล้จะถึงแล้วก็ยังไม่ได้สักที",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันไม่รู้เลยว่าสิ่งที่ทำไปมันดีพอรึเปล่า เธอช่วยดูหน่อยสิ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "special",
                content: "Zoom",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ฉันว่าโอเคแล้วนะ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "แล้วมันต้องสมบูรณ์แบบขนาดไหนเหรอ",
                speaker: "เรา",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "…",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        trackChange: 1,
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันก็ไม่แน่ใจเหมือนกัน เธอเคยเป็นบ้างมั้ย ไม่มั่นใจในตัวเองแบบนี้ ",
                speaker: "นกยูง",
            },
            {
                type: "choice",
                content: {
                    subContent: "เคย",
                    subContent1: "ไม่เคย",
                },
            },
        ],
        background: secondAttractionBackground,
        next: [3, 1],
    },
    {
        branch: 1,
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แล้ว <name> มีวิธีจัดการกับความไม่มั่นใจยังไงบ้าง เล่าให้ฉันฟังหน่อยได้มั้ย",
                speaker: "นกยูง",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        branch: 1,
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เป็นวิธีที่น่าสนใจมากเลย ไว้ฉันจะเอาไปใช้บ้างนะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        branch: 1,
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันหวังว่าเธอจะสามารถก้าวผ่านมันไปได้ เอา ลูกโป่ง นี่ไปเป็นของฝากจากชั้นนะ",
                speaker: "นกยูง",
            },
            {
                type: "special",
                content: "New item/Balloon2",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "peacock",
                state: "Idle",
                className: defaultPeacockClassName,
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ว้าว ดีจังเลย ยังมีอีกหลายคนที่พบเจอกับสถานการณ์แบบนี้ ถ้าวันนึง เธอได้พบเจอกับเพื่อน ๆ เหล่านี้ หวังว่าเธอจะช่วยเป็นกำลังใจอยู่ข้าง ๆ พวกเขาด้วยนะ",
                speaker: "นกยูง",
            },
        ],
        background: secondAttractionBackground,
        next: "default",
    },
];
