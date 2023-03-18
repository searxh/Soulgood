import React from "react";
import Score from "./Score";
import TextAnswer from "./TextAnswer";

const feedback = [
    { question: "เธอรู้สึกพึงพอใจกับประสบการณ์มากน้อยขนาดไหน?", type: 1 },
    {
        question:
            "เธอได้เรียนรู้อะไรเกี่ยวกับตัวเองมากขึ้นบ้างอย่างไรบ้างจากการใช้เว็บไซต์นี้?",
        type: 0,
    },
    {
        question:
            "เธอจะแนะนำให้เพื่อนหรือคนรอบข้างที่เผชิญความท้าทายคล้ายกับคุณให้ได้ลองใช้เว็บไซต์นี้ขนาดไหน?",
        type: 1,
    },
    {
        question:
            "จุดไหนเป็นจุดสำคัญที่ทำให้เธออยากแนะนำเว็บไซต์นี้ให้กับเพื่อนหรือคนรอบข้าง?",
        type: 0,
    },
];

const Rating = () => {
    const [feedbackData, setFeedbackData] = React.useState<
        Array<number | string | null>
    >([null, null, null, null]);
    const setFeedback = (questionNumber: number, answer: number | string) => {
        const newFeedbackData = [...feedbackData];
        newFeedbackData[questionNumber] = answer;
        setFeedbackData(newFeedbackData);
    };
    return (
        <div className="grid gap-5">
            <div className="mx-auto font-semibold text-3xl">แบบประเมิน</div>
            {feedback.map((questionItem, index) => {
                const questionNumber = index + 1;
                return (
                    <>
                        <div>
                            {questionNumber + ")"} {questionItem.question}
                        </div>
                        {questionItem.type ? (
                            <Score
                                selectedCallback={(selected) =>
                                    setFeedback(questionNumber, selected)
                                }
                            />
                        ) : (
                            <TextAnswer
                                answerCallback={(answer) =>
                                    setFeedback(questionNumber, answer)
                                }
                            />
                        )}
                    </>
                );
            })}
        </div>
    );
};

export default Rating;
