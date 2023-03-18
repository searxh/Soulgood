import React from "react";

const TextAnswer = ({
    answerCallback,
}: {
    answerCallback: (answer: string) => void;
}) => {
    const ref = React.useRef<HTMLInputElement>(null);
    const handleOnChange = () => {
        if (ref.current) answerCallback(ref.current.value);
        else {
            alert("Please fill in feedback");
        }
    };
    return (
        <input
            ref={ref}
            onChange={handleOnChange}
            className="border-[1px] border-neutral-400 rounded-xl p-1 px-2 font-light text-lg"
        />
    );
};

export default TextAnswer;
