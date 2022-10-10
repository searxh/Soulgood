interface Character {
    name:string,
    state:string
}
interface SceneDialogue {
    id:number
    dialogue:{ type:string, content:string}
    characters:Array<Character>
}

export const scenes:Array<SceneDialogue> = [
    {
        id:0,
        characters:[{ name:"soul", state:"neutral" }],
        dialogue:{
            type:"them",
            content:"oh hello are you a lost soul?"
        }
    },
    {
        id:1,
        characters:[{ name:"soul", state:"happy" }],
        dialogue:{
            type:"them",
            content:"soul? a ghost? did i already die?!"
        }
    },
]