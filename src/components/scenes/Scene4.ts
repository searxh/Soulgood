import { SceneInterface } from "../../types";

const defaultKangarooKidClassName = {
    top: "50%",
    bottom: "0%",
    left: "0%",
    right: "0%",
};

const defaultKangarooKid1ClassName = {
    top: "60%",
    bottom: "0%",
    left: "0%",
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
    name: "bumper.webp",
};

export const fourthScene: Array<SceneInterface> = [
    {
        trackChange: 0,
        characters: [
            {
                name: "kid_kangaroo",
                state: "Idle",
                className: { ...defaultKangarooKidClassName, opacity: 0 },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เอ ไปไหนต่อดีนะ",
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
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "สะ..สวัสดี ยินดีต้อนรับเข้าสู่รถบั๊ม",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เอ่อ นาย พูดต่อสิ ๆ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Idle",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ขะ...เข้ามานั่งตรงนี้ ละ...เลย พวกเราจะดูแลคุณเอง",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Idle",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "พวกเธอโอเครึเปล่า ดูเกร็งๆนะ",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เปล่าสักหน่อย… ว่าเเต่เธอดูออกด้วยหรอ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Sad",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "พวกเราเพิ่งมาฝึกงานที่นี่น่ะ แม่ของพวกเราเคยทำงานที่เครื่องเล่นนี้เลยต้องทำให้ดีตามที่แม่คาดหวัง",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "จริง ๆ ฉันไม่ได้อยากทำงานนี้ด้วยซ้ำ ฉันอยากเป็นเชฟ กดดันมากเลย",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Idle",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "แล้ว <name> ชอบสิ่งที่ตัวเองกำลังทำเรียนหรือทำงานอยู่มั้ย",
                speaker: "น้องจิงโจ้",
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
                name: "kid_kangaroo_1",
                state: "Happy",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ดีจังเลย อย่างน้อยเธอก็ได้มีโอกาสทำในสิ่งที่ชอบนะ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        trackChange: 1,
        branch: 2,
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Idle",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ไม่เป็นไรนะ ฉันเข้าใจมาก ๆ เลยล่ะ ถึงรู้ว่ายังมีเวลาค้นหาตัวเองอีกเยอะแต่ก็รู้สึกไม่สบายใจอยู่ดี",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        trackChange: 1,
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ว่าเเต่เธอเจอพี่ยีราฟมาแล้วใช่มั้ย ถ้าฉันเก่งแบบพี่ยีราฟก็คงดี",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "เพราะอะไรถึงคิดว่าพี่เค้าเก่งเหรอ",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แม่บอกว่าพี่เค้าเก่ง เพราะเค้าทำงานได้ไร้ที่ติเลยล่ะ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ถ้าพวกเธอทำงานออกมาไร้ที่ติบ้างจะได้อะไรเหรอ",
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
                state: "Sad",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "บางทีฉันก็แค่อยากให้แม่ชมฉันบ้าง พักนี้แม่เอาแต่เปรียบเทียบพวกเรากับพี่ยีราฟ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "โอ้ะ พวกเราเผลอเล่าให้เธอฟังไปซะเยอะ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "<name> ล่ะ อยากเล่าเรื่องราวที่เคยได้รับความคาดหวังจากพ่อเเม่ให้พวกเราฟังบ้างมั้ย",
                speaker: "พี่จิงโจ้",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Happy",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ขอบคุณที่เล่าให้พวกเราฟังนะ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แม่ของพวกเราคาดหวังกับการทดลองงานนี้ไว้เยอะเลยล่ะ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content:
                    "ฉันเห็นถึงความพยายามของเธอนะ การทำให้แม่ภูมิใจเป็นเรื่องดี แต่ก็ระวังอย่ากดดันตัวเองมากเกินไปนะ",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Sad",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "แต่ว่ามันก็ยังเป็นเรื่องที่ยากอยู่ดี…",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Stress",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "อื้ม นั่นสินะ พวกเราคงต้องหาอะไรมาช่วยทำให้ตัวเองรู้สึกดีขึ้นบ้างแล้วล่ะ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "เธอพอจะมีอะไรที่พอใช้พึ่งพาใจได้มั้ย ไม่จำเป็นต้องเป็นคนก็ได้นะ จะเป็นท้องฟ้า ของอร่อย สิ่งของอย่างอื่นก็ได้หมดเลย",
                speaker: "พี่จิงโจ้",
            },
            {
                type: "input",
                content: "consider",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo",
                state: "Happy",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เยี่ยมเลย ไว้ฉันจะลองหาของฉันบ้างนะ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "kid_kangaroo_1",
                state: "Happy",
                className: {
                    ...defaultKangarooKid1ClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "งั้นถ้าตอนไหนที่เธอต้องการที่พึ่งพาใจก็อย่าลืมนึกถึงมันนะ",
                speaker: "น้องจิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Happy",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "สวัสดีลูก ๆ แม่เอาข้าวกลางวันมาให้",
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
                state: "Stress",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "นี่ทั้งสองคนยืนคุยเล่นกันอยู่เหรอ ทำไมถึงไม่ทำงานล่ะ",
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
                state: "Sad",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "พวกเราแค่คุยกับคุณลูกค้าเเปปเดียวเองแม่",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Stress",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "พี่ยีราฟเขาคงไม่มาทำตัวแบบนี้หรอก เขาถึงได้รางวัลพนักงานดีเด่นยังไงล่ะ",
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
                state: "Stress",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "มัวแต่คุยเล่นอยู่แบบนี้เดี๋ยวก็ไม่ผ่านการทดลองงานหรอก",
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
                state: "Sad",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ผู้จัดการนกฮูกยิ่งจับตาดูอยู่ด้วย",
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
                state: "Idle",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "ใจเย็น ๆ ก่อนนะคุณแม่",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Idle",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "อย่างที่ฉันบอกไป ที่นี่เขาเข้มงวดมาก ๆ",
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
                state: "Sad",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "การทดลองงานนี้มันเป็นเรื่องสำคัญมากเลยนะ",
                speaker: "แม่จิงโจ้",
            },
            {
                type: "choice",
                content: {
                    subContent: "เราเข้าใจที่คุณแม่พูดนะ",
                    subContent1: "เรารู้สึกได้ถึงความหวังดีของคุณแม่นะ",
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
                name: "mother_kangaroo",
                state: "Idle",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "แต่คุณแม่เคยถามความต้องการของลูกมั้ย",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        branch: 2,
        characters: [
            {
                name: "mother_kangaroo",
                state: "Idle",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content: "แต่คุณแม่เคยถามความต้องการของลูกมั้ย",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Sad",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "...",
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
                state: "Idle",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "us",
                content:
                    "ถ้าทั้งสองคนทำสำเร็จตามที่คุณแม่หวังแต่ไม่มีความสุข คุณแม่จะโอเคจริง ๆ เหรอ",
                speaker: "เรา",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Sad",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "นี่ลูก ๆ ไม่ได้อยากทำงานที่นี่เหรอ",
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
                state: "Idle",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ใช่ครับ พวกเรามีความฝันที่อยากไปทำ แต่ก็ไม่เคยได้บอกแม่",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "mother_kangaroo",
                state: "Sad",
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
                state: "Happy",
                className: {
                    ...defaultKangarooKidClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ไม่เป็นไรเลยครับ เราเข้าใจถึงความหวังดีของแม่นะ",
                speaker: "พี่จิงโจ้",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
    {
        characters: [
            {
                name: "owl",
                state: "Idle",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "ใครกำลังพูดถึงฉันอยู่หรือเปล่านะ",
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
                state: "Stress",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "คุณมาก็ดีแล้ว",
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
                state: "Stress",
                className: {
                    ...defaultMotherKangarooClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ที่ฉันต้องกดดันลูกเป็นเพราะคุณนั่นแหละที่ตั้งมาตรฐานไว้สูงขนาดนั้น !!",
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
                state: "Surprise",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content: "เพราะฉันเหรอ…",
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
                state: "Idle",
                className: {
                    ...defaultOwlClassName,
                },
            },
        ],
        dialogues: [
            {
                type: "them",
                content:
                    "ระ…หรือว่าสาเหตุที่เเท้จริงที่สวนสนุกนี้กำลังจะล้มละลายเพราะฉันกดดันทุกคนมากเกินไป",
                speaker: "นกฮูก",
            },
        ],
        background: fourthAttractionBackground,
        next: "default",
    },
];
