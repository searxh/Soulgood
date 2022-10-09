interface Dialogue {
    content:string
    type:string
}

interface SceneDialogue {
    scene:string,
    dialogues:Array<Dialogue>
}

export const scenes:Array<SceneDialogue> = [
    {
        scene:'scene 1',
        dialogues:[
            {
                content:'test',
                type:'them'
            },
            {
                content:'test 1',
                type:'us'
            },
            {
                content:'test 2',
                type:'input'
            },
        ]
    },
]