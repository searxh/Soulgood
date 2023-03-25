/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { scenes } from "../components/scenes/Scenes";
import useStoryController from "../hooks/useStoryController";
import useWindowSize from "../hooks/useWindowSize";
import Character from "../components/Character";
import Dialogue from "../components/Dialogue";
import Background from "../components/Background";
import { searchSceneNumber } from "../lib/utilities/SearchSceneNumber";
import { qList } from "../default";
import { GlobalContext } from "../states";
import { useNavigate } from "react-router-dom";

const Story = () => {
    const { global_state } = React.useContext(GlobalContext);
    const { preIntroForm } = global_state;
    const [eligible, setEligible] = React.useState<boolean>(false);
    const [targetList, setTargetList] = React.useState<
        Array<{
            id: string;
            sceneNumber: number;
        }>
    >([]);
    const { scene, start, next, lockDialogue, printDoneCallback } =
        useStoryController();
    const { windowSize } = useWindowSize();
    const navigate = useNavigate();
    React.useEffect(() => {
        const isEligible = Object.keys(preIntroForm).length !== 0;
        if (isEligible && targetList.length < 1) {
            setEligible(true);
            const newList = Object.keys(qList).map((key) => {
                return { id: key, sceneNumber: searchSceneNumber(qList[key]) };
            });
            console.log(newList);
            setTargetList(newList);
        } else if (!isEligible) {
            navigate("/");
        }
    }, []);
    return scene < scenes.length && eligible ? (
        <div
            style={{
                height: windowSize.height + "px",
                width: windowSize.width + "px",
            }}
            className="relative overflow-hidden w-screen font-mitr text-lg md:text-xl bg-white"
        >
            {scene === 0 && (
                <img
                    className={` ${
                        start ? "opacity-100 z-50" : "opacity-0 -z-10 blur-lg"
                    } absolute top-0 bottom-0 right-0 left-0 transition duration-500 m-auto 
                    object-cover w-full h-full grayscale`}
                    src="/assets/spiral.gif"
                    alt=""
                />
            )}
            <div className="flex m-auto h-full relative">
                {scenes[scene].characters.map((character, index) => {
                    return (
                        <Character
                            key={index}
                            name={character.name}
                            state={character.state}
                            className={character.className}
                        />
                    );
                })}
                {next &&
                    lockDialogue !== undefined &&
                    scenes[scene].dialogues.map((dialogue, index) => {
                        console.log("story next", next);
                        if (index === 0) {
                            return (
                                <Dialogue
                                    key={index}
                                    type={dialogue.type}
                                    content={dialogue.content}
                                    next={next}
                                    speaker={dialogue.speaker}
                                    printDoneCallback={printDoneCallback}
                                    preventNext={lockDialogue}
                                    targetList={targetList}
                                />
                            );
                        } else if (!lockDialogue) {
                            return (
                                <Dialogue
                                    key={index}
                                    type={dialogue.type}
                                    content={dialogue.content}
                                    next={next}
                                    speaker={dialogue.speaker}
                                    preventNext={false}
                                    targetList={targetList}
                                />
                            );
                        }
                        return null;
                    })}
                <Background name={scenes[scene].background.name} />
            </div>
        </div>
    ) : null;
};

export default Story;
