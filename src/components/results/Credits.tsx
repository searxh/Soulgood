/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { addData } from "../../lib/firebase/database";
import { GlobalContext } from "../../states";

const Credits = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { submitted, preIntroForm, formAnswers, answers } = global_state;
    React.useEffect(() => {
        if (!submitted) {
            addData({
                personalInfo: preIntroForm,
                formAnswers: formAnswers,
                gameAnswers: answers,
            });
            dispatch({
                type: "set",
                field: "submitted",
                payload: true,
            });
        }
    }, []);
    return (
        <div className="flex flex-col max-w-[40rem] mx-auto text-center">
            <div className="mx-auto font-semibold text-3xl md:text-4xl text-pink-500">
                Credits
            </div>
            <div className="mx-auto my-5 px-5 font-semibold text-4xl md:text-5xl leading-9">
                Thank you for playing!
            </div>
            <div className="grid grid-cols-1 gap-5 mx-auto mb-5">
                <div className="mx-auto text-2xl py-5">ขอขอบคุณ</div>
                <div className="mx-auto md:flex">
                    <div className="font-semibold px-2">Soundtrack:</div>TDKILL
                </div>
                <div className="mx-auto md:flex">
                    <div className="font-semibold px-2">Art:</div>Anangsama
                    Teeranuntawet (IG: @lemondaryy){" "}
                </div>
                <div className="mx-auto md:flex">
                    <div className="font-semibold px-2">Dev:</div> Nattakit
                    Pisitsup (search35453@gmail.com)
                </div>
            </div>
        </div>
    );
};

export default Credits;
