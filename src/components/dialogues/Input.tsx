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
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                    className="absolute left-0 right-0 bottom-0 flex bg-white border-2 rounded-3xl p-3 shadow-md z-20"
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
                        className="w-[80%] my-2 mx-auto p-2 outline-none text-center"
                    />
                </form>
                {content.length !== 0 ? (
                    <div
                        className={`${
                            transition ? "opacity-100 animate-bob" : "opacity-0"
                        } absolute bottom-[100px] right-5 transition duration-1000
                    w-[150px] h-[75px] md:w-[200px] md:h-[100px] text-sm md:text-lg z-10`}
                    >
                        <div className="relative flex justify-center w-full h-full bg-amber-100 rounded-xl p-2 shadow-md">
                            <div className="m-auto">
                                ลองค่อย ๆ คิดทบทวนกับตัวเอง
                                แล้วเล่ามาได้เต็มที่เลยนะ
                            </div>
                            <div className="absolute -bottom-10 -z-10 h-12 w-5 shadow-md bg-amber-100" />
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Input;
