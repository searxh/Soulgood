interface Dialogue {
    content:string
}

interface SceneDialogue {
    scene:string,
    dialogues:Array<Dialogue>
}

export const all_dialogue:Array<SceneDialogue> = [
    {
        scene:'scene 1',
        dialogues:[
            {
                content:'test'
            },
            {
                content:'test 1'
            },
            {
                content:'test 2'
            },
        ]
    },
]