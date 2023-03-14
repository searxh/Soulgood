/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { scenes } from "../components/scenes/Scenes";
import useStoryController from "../hooks/useStoryController";
import useWindowSize from "../hooks/useWindowSize";
import Character from "../components/Character";
import Dialogue from "../components/Dialogue";
import Background from "../components/Background";
import { searchSceneNumber } from "../lib/utilities/SearchSceneNumber";

const Story = () => {
    const [targetList, setTargetList] = React.useState<
        Array<{
            id: string;
            sceneNumber: number;
        }>
    >([]);
    const { scene, start, next, lockDialogue, printDoneCallback } =
        useStoryController();
    const { windowSize } = useWindowSize();
    React.useEffect(() => {
        if (targetList.length < 1) {
            const list: { [key: string]: string } = {
                Q1_Deal:
                    "รู้สึกกังวลที่จะต้องทำสิ่งที่เคยทำผิดพลาดมาก่อน เธอรับมือยังไงหรอ",
                Q2_Manage:
                    "มีวิธีจัดการกับความไม่มั่นใจยังไงบ้าง เล่าให้ฉันฟังหน่อยได้มั้ย",
                Q3_Enough:
                    "เคยเหรอ ลองเล่าให้ฟังหน่อยได้มั้ยว่าเพราะอะไรเธอถึงรู้สึกไม่ดีพอ ถึงแม้จะไม่มีใครกดดัน",
                Q4_Handle:
                    "เธอรับมือกับความรู้สึกไม่ดีพอได้ยังไงเหรอ บอกฉันหน่อยได้มั้ย",
                Q5_Method:
                    "เคยใช้วิธีจัดการกับความรู้สึกที่ไม่ดีพออะไรมาบ้างหรอ",
                Q6_NotWork: "แล้วเธอคิดว่าวิธีที่ทำไป ทำไมมันถึงยังไม่ได้ผลล่ะ",
                Q7_Alt: "ถ้าอย่างนั้นเราจะทำให้มันดีขึ้นได้ยังไงบ้าง หรือพอมีวิธีอื่นอีกไหมที่เธอคิดว่ามันอาจจะช่วยได้",
                Q8_How: "เก่งจังเลย บอกฉันหน่อยสิว่าเธอทำยังไงถึงไม่เคยรู้สึกไม่ดีพอเลย",
                Q9_Parent:
                    "อยากเล่าเรื่องราวที่เคยได้รับความคาดหวังจากพ่อเเม่ให้พวกเราฟังบ้างมั้ย",
                Q10_Support:
                    "เธอพอจะมีอะไรที่พอใช้พึ่งพาใจได้มั้ย ไม่จำเป็นต้องเป็นคนก็ได้นะ จะเป็นท้องฟ้า ของอร่อย สิ่งของอย่างอื่นก็ได้หมดเลย",
            };
            const newList = Object.keys(list).map((key) => {
                return { id: key, sceneNumber: searchSceneNumber(list[key]) };
            });
            console.log(newList);
            setTargetList(newList);
        }
    }, []);
    return scene < scenes.length ? (
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
                        if (index === 0) {
                            console.log(
                                "prevent debug",
                                scene,
                                lockDialogue,
                                dialogue.content
                            );
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
