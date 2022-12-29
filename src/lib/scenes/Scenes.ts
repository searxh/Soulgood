import { SceneInterface } from "../../types";
import { zerothScene } from "./Scene";
import { firstScene } from "./Scene1";
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
export const scenes: Array<SceneInterface> = [...zerothScene, ...firstScene];
