interface CharacterType {
    name:string,
    state:string
    location:LocationType
}
export interface LocationType {
    top:string,
    left:string,
}
interface SceneDialogue {
    id:number
    dialogue:{ type:string, content:string}
    characters:Array<CharacterType>
    background:{ name:string }
    next:number | string
}

export const scenes:Array<SceneDialogue> = [
    {
        id:0,
        characters:[
            { name:"soul", state:"neutral", location:{ top:"top-[40%]", left:"left-[40%]"} },
        ],
        dialogue:{
            type:"them",
            content:"โอ๊ะ สวัสดี เธอคือ soul ที่ลงมาเหรอ"
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        id:1,
        characters:[{ name:"soul", state:"happy", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"ไม่สิ ไม่ใช่ Soul คือ จิตวิญญาณ เธอยังไม่ตายหรอกนะ ฉันด้วย"
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        id:2,
        characters:[{ name:"soul", state:"worried", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"เเต่ว่าตอนนี้ เมืองที่เราอยู่ กําลังเจอปัญหาใหญ่ เเสงที่หล่อเลี้ยงเมืองนี้กําลังจะดับลง"
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
]