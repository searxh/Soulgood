/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

const scores = ["น้อยที่สุด", "น้อย", "ปานกลาง", "มาก", "มากที่สุด"];

const Score = ({
    selectedCallback,
}: {
    selectedCallback: (selected: number) => void;
}) => {
    const [selected, setSelected] = React.useState<number>(0);
    const selectScore = (index: number) => {
        setSelected(index);
    };
    React.useEffect(() => {
        selectedCallback(selected);
    }, [selected]);
    return (
        <div className="grid grid-cols-5 w-full gap-5">
            {scores.map((item, index) => {
                return (
                    <button
                        onClick={() => selectScore(index)}
                        className="flex flex-col"
                    >
                        <div
                            className={`${
                                selected === index
                                    ? "bg-pink-500 shadow-md shadow-pink-200 border-white"
                                    : "border-neutral-400"
                            } w-5 h-5 rounded-full border-[1px] 
                            mx-auto transition duration-300`}
                        />
                        <div className="p-3 text-neutral-600 font-light text-lg mx-auto">
                            {item}
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default Score;
