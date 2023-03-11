import { SceneInterface } from "../../types";

const defaultOwlClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const defaultBackground = {
    name: "apark.webp",
};

export const fifthScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "owl",
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันรู้แล้วล่ะ ว่าทำไมสวนสนุกแห่งนี้ถึงร้าง เพราะฉันเองที่เป็นคนกดดันให้ทุกคนต้องสมบูรณ์แบบ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "สวนสนุกแห่งนี้ขาดสิ่งที่สำคัญที่สุดคือความสนุกของคนที่ทำงาน",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ขอโทษพนักงานทุกคนด้วยนะ ตอนนี้ฉันเข้าใจเเล้วล่ะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ขอบคุณที่ <name> เข้ามาทำให้ฉันเห็นว่าการกดดันให้ตัวเองและคนอื่นให้เพอร์เฟกต์มันไม่ได้ส่งผลดีเสมอไปนะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอยังเก็บของที่ได้จากเครื่องเล่นต่าง ๆ ไว้อยู่ใช่มั้ย",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "บางทีคำแนะนำหรือกำลังใจก็อาจมาในรูปแบบตุ๊กตาที่คอยปลอบประโลมจิตใจของเธอก็ได้นะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "special",
                content: "Answer bubble",
            },
        ],
        background: defaultBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ถ้าหากวันไหนเธอเหนื่อยเธอลองกอดตุ๊กตานี้ดูได้นะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ส่วนลูกโป่ง ฉันว่าก็ไม่ต่างอะไรจากสิ่งที่ค้างคาอยู่ในใจเธอ ถ้าเธอปล่อยมันไปเธอก็จะเป็นอิสระจากมัน",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เธออยากจะปล่อยมันไปมั้ยล่ะ",
                speaker: "นกฮูก",
            },
            {
                type: "choice",
                content: {
                    subContent: "ปล่อย",
                    subContent1: "ไม่ปล่อย",
                },
            },
        ],
        background: defaultBackground,
        next: [2, 3],
    },
    {
        branch: 1,
        characters: [
            {
                name: "owl",
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* ลูกโป่งลอยขึ้นฟ้าไป *",
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
        next: "default",
    },
    {
        branch: 1,
        characters: [
            {
                name: "owl",
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ดีใจด้วยนะ ขอให้หลังจากนี้เป็นวันที่ดีของเธอนะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* เก้าอี้นั่งพักในสวน *",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ไม่เป็นไรนะ สักวันเธอจะต้องก้าวข้ามมันไปได้เเน่ หวังว่าเธอจะเจอหนทางของเธอในสักวันนะ",
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
                state: "Idle",
                className: { ...defaultOwlClassName },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* แสงจ้า *",
                speaker: "นกฮูก",
            },
        ],
        background: defaultBackground,
        next: "default",
    },
];
