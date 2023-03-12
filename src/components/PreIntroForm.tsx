import React from "react";
import { PreIntroFormInterface } from "../types";

const PreIntroForm = ({
    answerCallback,
}: {
    answerCallback: (answer: PreIntroFormInterface) => void;
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
    return (
        <div
            style={{
                boxShadow: "5px 5px 0px hotpink",
            }}
            className="flex flex-col p-5 m-auto text-lg md:text-xl
             bg-gradient-to-r from-pink-200 to-pink-300 w-full my-2 rounded-xl drop-shadow-md"
        >
            <div className="m-auto drop-shadow-md">
                <div className="text-left text-white">เพศ:</div>
                <select
                    ref={sexRef}
                    className="rounded-xl w-24 px-2 h-8 bg-white"
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
                    className="rounded-xl w-24 px-2 h-8 bg-white"
                />
            </div>
            <button
                style={{
                    boxShadow: `5px 5px 0px ${isError ? "red" : "forestgreen"}`,
                }}
                className={`${
                    isError ? "bg-red-400" : "bg-green-400 hover:bg-green-500"
                } text-2xl rounded-lg text-white px-5 w-[80%]
                py-2 mt-5 m-auto hover:scale-105 transition 
                duration-500 font-medium drop-shadow-md`}
                onClick={handleOnSubmit}
            >
                {isError ? "Error" : "Confirm"}
            </button>
        </div>
    );
};

export default PreIntroForm;
