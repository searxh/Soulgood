import { scenes } from "../../components/scenes/Scenes";

export const searchSceneNumber = (target: string) => {
    const scenesIndex = scenes.findIndex((scene) => {
        return scene.dialogues.find((dialogue) =>
            typeof dialogue.content === "string"
                ? dialogue.content.includes(target)
                : false
        );
    });
    return scenesIndex;
};
