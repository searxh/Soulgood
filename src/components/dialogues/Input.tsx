import { GlobalContext } from "../../states";
import React, { FormEvent } from "react";

const Input = ({
    content,
    next,
    targetList,
}: {
    content: string;
    next: any;
    targetList: Array<number>;
}) => {
    const [transition, setTransition] = React.useState<boolean>(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { name, scene, answers } = global_state;
    const sceneRouter = () => {
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    const handleOnSubmit = (e?: FormEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        if (inputRef.current === null) return;
        let newName = name;
        if (name.length === 0) {
            newName = inputRef.current.value;
        }
        let newAnswers = answers;
        if (targetList.includes(scene)) {
            console.log(`[STORE VALUE SCENE ${scene}]`, inputRef.current.value);
            newAnswers = [...answers, inputRef.current.value];
        }
        dispatch({
            type: "multi-set",
            field: ["name", "scene", "answers"],
            payload: [newName, sceneRouter(), newAnswers],
        });
    };
    React.useEffect(() => {
        if (content.length !== 0) setTimeout(() => setTransition(true), 50);
    }, [content]);
    return (
        <div className="absolute text-black text-center z-20 left-0 right-0 mx-auto bottom-5 w-[90%] max-w-[50rem]">
            <div className="relative w-full h-full">
                <form
                    style={{
                        boxShadow: "5px 5px 0px gray",
                    }}
                    className="absolute left-0 right-0 bottom-0 flex bg-gradient-to-r from-white to-neutral-200 rounded-3xl p-3 drop-shadow-lg z-20"
                    onSubmit={(e) => handleOnSubmit(e)}
                >
                    {/*<div
                        className="absolute -top-3 left-[10%] bg-yellow-200 px-10 py-0.5 
                        shadow-md rounded-xl"
                    >
                        เรา
                </div>*/}
                    <input
                        ref={inputRef}
                        autoFocus={true}
                        className="w-[80%] my-2 mx-auto p-2 outline-none text-center bg-transparent"
                    />
                    <button
                        onClick={() => handleOnSubmit()}
                        style={{
                            boxShadow: "5px 5px 0px mediumblue",
                        }}
                        className="relative flex rounded-xl w-14 h-6 bg-blue-500 my-auto
                         text-white p-5 drop-shadow-md hover:scale-105 transition duration-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="absolute top-0 bottom-0 left-0 right-0 fill-white m-auto w-6 h-6"
                        >
                            {
                                "<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
                            }
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                    </button>
                </form>
                {content.length !== 0 ? (
                    <div
                        className={`${
                            transition ? "opacity-100 animate-bob" : "opacity-0"
                        } absolute bottom-[100px] right-5 transition duration-1000
                    w-[150px] h-[75px] md:w-[200px] md:h-[100px] text-sm md:text-lg z-10`}
                    >
                        <div
                            className="relative flex justify-center w-[130%] h-[130%] rounded-xl
                        p-5 drop-shadow-md bg-[url('../public/assets/Props/TextBox.webp')] bg-cover"
                        >
                            <div className="m-auto">
                                ลองค่อย ๆ คิดทบทวนกับตัวเอง
                                แล้วเล่ามาได้เต็มที่เลยนะ
                            </div>
                            <div className="absolute -bottom-10 -z-10 h-14 w-5 shadow-md bg-orange-200" />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Input;
