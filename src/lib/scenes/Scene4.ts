import { SceneInterface } from "../../types";

const defaultKangarooKidClassName = {
    top: "50%",
    bottom: "0%",
    left: "-60%",
    right: "0%",
};

const defaultKangarooKid1ClassName = {
    top: "50%",
    bottom: "0%",
    left: "60%",
    right: "0%",
};

const defaultMotherKangarooClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const defaultOwlClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const fourthAttractionBackground = {
    name: "bumper.jpg",
};

export const fourthScene: Array<SceneInterface> = [
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: { ...defaultKangarooKidClassName, opacity: 0 },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: { ...defaultKangarooKid1ClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เอ ไปไหนก่อนดีนะ",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันมาฝึกงานที่นี่ เพราะแม่เคยทำงานเครื่องเล่นนี้มาก่อน ต้องทำให้ดีสมกับที่แม่คาดหวัง",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "จริง ๆ ฉันไม่ได้อยากดูแลเครื่องเล่นด้วยซ้ำ ฉันอยากเป็นเชฟ กดดันมากเลย",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แล้ว <name> ชอบสิ่งที่ตัวเองกำลังทำอยู่ไหม",
                speaker: "จิงโจ้ (2)",
            },
            {
                type: "choice",
                content: {
                    subContent: "ชอบ",
                    subContent1: "ไม่ชอบ",
                },
            },
        ],
        background: fourthAttractionBackground,
        next: [1, 1],
    },
    {
        branch: 1,
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ดีจังนะ",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เรายังมีเวลาค้นหาตัวเองอีกเยอะ การค้นพบสิ่งที่ชอบไม่มีวันสุดสิ้นหรอกนะ สักวันเธอจะต้องเจอตัวเองเเน่ๆ",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอเจอพี่ยีราฟมาแล้วใช่มั้ย ถ้าฉันเก่งแบบพี่ยีราฟก็คงดี",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ฉันต้องเก่งแบบพี่เขา เพราะแม่ชอบชมพี่ยีราฟ บางทีฉันก็อยากให้แม่ชมฉันบ้าง",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ตอนฝึกงานใหม่ ๆ ฉันทำได้ไม่ดี ฉันต้องผ่านการทดลองงานให้ได้ทำงานที่นี่ให้ได้ จะต้องไม่ทำให้แม่ผิดหวัง",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เดี๋ยวฉันต้องดูแลเครื่องเล่นต่อละ ถ้าทำได้ดีน้อยกว่าคนอื่นเดี๋ยวแม่เสียหน้า",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* แม่จิงโจ้แอบดู *",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "นั่น ผู้จัดการนกฮูกมาประเมินลูกทั้งสองคนของฉันแน่เลย",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แต่ลูก ๆ ฉันเป็นคนดี ถึงไม่เก่งเท่ามาตรฐานคนอื่น ขอแค่เป็นคนดีก็น่าจะได้รางวัลแล้ว",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันมีแผนการ รอดูเถอะ หึ ๆ",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* วิ่งเข้ามาแกล้งสะดุดล้ม *",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "คุณผู้หญิง เป็นอะไรไหมครับ",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เจ็บตรงไหนไหมคะ",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไม่เป็นไรค่ะ ไม่เป็นไรเลย",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* วิกหลุด *",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แม่ !!!",
                speaker: "จิงโจ้(1)/จิงโจ้(2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ว้ายยย ตายแล้ว โดนจับได้",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "พระเจ้าช่วย !!!",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เพื่อให้ลูกได้รางวัล ต้องทำถึงขนาดนี้เลยเหรอเนี่ย",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "จริง ๆ คุณไม่ต้องทำถึงขนาดนี้ก็ได้นะ",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ก็มันเป็นเพราะคุณนั่นแหละที่ตั้งมาตรฐานไว้สูงขนาดนั้น !!",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "(ตายล่ะ เป็นเพราะฉันเองเหรอเนี่ย)",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "(ฉันควรจะพูดอะไรหน่อยไหมนะ)",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content:
                    "ฉันเห็นความพยายามของเธอนะ การทำให้แม่ภูมิใจเป็นเรื่องดี แต่ถ้ามันกดดันตัวเองมากเกินไป มันจะทำให้เธอไม่สบายใจรึเปล่า",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "neutral",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ฉันก็เคยเป็นแบบนี้เหมือนกัน ไม่เป็นไรนะ",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "อื้ม นั่นสินะ พวกเราคงต้องหาอะไรทำให้ตัวเองรู้สึกดีขึ้นบ้างแล้วล่ะ",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอพอจะมีอะไรที่พอใช้พึ่งพาใจได้มั้ย ไม่จำเป็นต้องเป็นคนก็ได้นะ จะเป็นท้องฟ้า ของอร่อย สิ่งของอย่างอื่นก็ได้หมดเลย",
                speaker: "จิงโจ้ (1)",
            },
            {
                type: "input",
                content: "",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(0.5)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(1)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "อย่างนี้นี่เอง ฉันหวังว่าเธอจะหาสิ่งที่ดีกับใจเธอเพิ่มขึ้นในทุก ๆ วันของชีวิตนะ",
                speaker: "จิงโจ้ (2)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "* แม่ลูกจิงโจ้กอดกัน *",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "neutral",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แม่ขอโทษด้วยนะลูก ๆ ที่กดดันพวกลูกขนาดนี้",
                speaker: "แม่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "neutral",
                className: {
                    ...defaultKangarooKidClassName,
                    filter: "brightness(1)",
                },
            },
            {
                name: "kid_kangaroo_1",
                state: "neutral",
                className: {
                    ...defaultKangarooKid1ClassName,
                    filter: "brightness(0.5)",
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไม่่เป็นไร เราเข้าใจนะแม่",
                speaker: "จิงโจ้ (1)",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
];
