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

const defaultRabbitClassName = {
    top: "25%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const defaultBackground = {
    name: "apark.png",
};
const firstAttractionBackground = {
    name: "forest.jpg",
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
    // ATTRACTION 1 STARTS HERE
    {
        characters: [
            {
                name: "rabbit",
                state: "neutral",
                className: { ...defaultOwlClassName, opacity: 0 },
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
