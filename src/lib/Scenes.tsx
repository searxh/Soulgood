interface CharacterType {
    name:string,
    state:string
    location:LocationType
}
export interface LocationType {
    top:string,
    left:string,
}
export interface ContentType {
    subContent:string,
    subContent1:string,
}
interface SceneType {
    dialogue:{ type:string, content:string | ContentType }
    characters:Array<CharacterType>
    background:{ name:string }
    next:string | Array<number>
}

export const scenes:Array<SceneType> = [
    {
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
        characters:[{ name:"soul", state:"neutral", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"input",
            content:"What is your name?"
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        characters:[{ name:"soul", state:"neutral", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"Nice to meet you <name>, follow me!"
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        characters:[{ name:"soul", state:"neutral", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"choice",
            content:{
                subContent:"where is this?",
                subContent1:"what happened?"
            }
        },
        background:{
            name:"hills"
        },
        next:[5,7],
    },
    {
        characters:[{ name:"soul", state:"neutral", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"this is a place where souls gather to fulfill something before they move on",
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        characters:[{ name:"soul", state:"worried", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"เเต่ว่าตอนนี้ เมืองที่เราอยู่ กําลังเจอปัญหาใหญ่ เเสงที่หล่อเลี้ยงเมืองนี้กําลังจะดับลง",
        },
        background:{
            name:"hills"
        },
        next:[9],
    },
    {
        characters:[{ name:"soul", state:"worried", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"here we are in the city, เมืองที่เราอยู่ กําลังเจอปัญหาใหญ่ เเสงที่หล่อเลี้ยงเมืองนี้กําลังจะดับลง",
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        characters:[{ name:"soul", state:"worried", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"we are souls that reached this city to fulfill something..",
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
    {
        characters:[{ name:"soul", state:"worried", location:{ top:"top-[40%]", left:"left-[40%]"} }],
        dialogue:{
            type:"them",
            content:"it would be really bad if the light stopped shining, we have to help this city!",
        },
        background:{
            name:"hills"
        },
        next:'default',
    },
]