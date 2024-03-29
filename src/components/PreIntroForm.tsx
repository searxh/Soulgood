import React from "react";
import { PreIntroFormInterface } from "../types";

const PreIntroForm = ({
    answerCallback,
    backCallback,
}: {
    answerCallback: (answer: PreIntroFormInterface) => void;
    backCallback: () => void;
}) => {
    const [isError, setIsError] = React.useState<boolean>(false);
    const ageRef = React.useRef<HTMLInputElement>(null);
    const sexRef = React.useRef<HTMLSelectElement>(null);
    const handleOnSubmit = () => {
        if (
            ageRef.current &&
            sexRef.current &&
            ageRef.current.value &&
            sexRef.current.value
        ) {
            answerCallback({
                age: Number(ageRef.current.value),
                sex: sexRef.current.value,
            });
        } else {
            setIsError(true);
            setTimeout(() => setIsError(false), 1000);
        }
    };
    const handleOnBack = () => {
        backCallback();
    };
    return (
        <div
            style={{
                boxShadow: "5px 5px 0px hotpink",
            }}
            className="flex flex-col p-5 m-auto text-lg md:text-xl w-[90%]
             bg-gradient-to-r from-pink-200 to-pink-300 max-w-[30rem] rounded-xl"
        >
            <div className="m-auto w-[80%]">
                <div className="text-left text-white">เพศ:</div>
                <select
                    ref={sexRef}
                    className="rounded-xl w-full px-2 h-8 bg-white shadow-md"
                >
                    <option>ชาย</option>
                    <option>หญิง</option>
                    <option>LGBTQ+</option>
                    <option>ไม่ระบุ</option>
                </select>
                <div className="text-left text-white">อายุ:</div>
                <input
                    ref={ageRef}
                    type="number"
                    min={1}
                    max={150}
                    className="rounded-xl w-full px-2 h-8 bg-white shadow-md"
                />
            </div>
            <div className="grid grid-cols-1 gap-3 mt-5">
                <button
                    style={{
                        boxShadow: `5px 5px 0px ${
                            isError ? "red" : "forestgreen"
                        }`,
                    }}
                    className={`${
                        isError
                            ? "bg-red-400"
                            : "bg-green-400 md:hover:bg-green-500"
                    } text-2xl rounded-lg text-white px-5 w-[80%]
                py-2 m-auto transition 
                duration-300 font-medium drop-shadow-md`}
                    onClick={handleOnSubmit}
                >
                    {isError ? "ERROR" : "CONFIRM"}
                </button>
                <button
                    style={{
                        boxShadow: `5px 5px 0px dimgray`,
                    }}
                    className={`bg-neutral-400 md:hover:bg-neutral-500
                text-2xl rounded-lg text-white px-5 w-[80%]
                py-2 m-auto transition 
                duration-300 font-medium drop-shadow-md`}
                    onClick={handleOnBack}
                >
                    BACK
                </button>
            </div>
        </div>
    );
};

export default PreIntroForm;
