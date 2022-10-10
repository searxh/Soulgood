interface Character {
    name:string,
    state:string
}
interface SceneDialogue {
    id:number
    dialogue:{ type:string, content:string}
    characters:Array<Character>
    next:number | string
}

export const scenes:Array<SceneDialogue> = [
    {
        id:0,
        characters:[{ name:"soul", state:"neutral" }],
        dialogue:{
            type:"them",
            content:"oh hello are you a lost soul?"
        },
        next:'default',
    },
    {
        id:1,
        characters:[{ name:"soul", state:"happy" }],
        dialogue:{
            type:"them",
            content:"soul? a ghost? did i already die?!"
        },
        next:'default',
    },
    {
        id:2,
        characters:[{ name:"soul", state:"worried" }],
        dialogue:{
            type:"them",
            content:"hi panus!!"
        },
        next:'default',
    },
]