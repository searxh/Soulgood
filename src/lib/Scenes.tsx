import { Them, Us, Input } from './Dialogue'
import { Soul } from './Characters'
interface SceneDialogue {
    id:number,
    dialogues:Array<Function>
    characters:Array<Function>

}

export const scenes:Array<SceneDialogue> = [
    {
        id:1,
        characters:[
            ()=><Soul state="happy" />,
        ],
        dialogues:[
            ()=><Them content="hello" />,
            ()=><Us content="no no" />,
        ]
    },
]