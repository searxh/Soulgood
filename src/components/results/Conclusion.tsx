import React from "react";
import { useNavigate } from "react-router-dom";
import generateUID from "../../lib/utilities/GenerateUID";
import CharacterChoose from "./CharacterChoose";
import Credits from "./Credits";
import MiniScene from "./MiniScene";
import Rating from "./Rating";
import Cookies from "js-cookie";
import { GlobalContext } from "../../states";

const Conclusion = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { resultPage, formAnswers } = global_state;
    const [transition, setTransition] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const changePage = () => {
        if (resultPage + 1 === 2 && formAnswers.includes(null)) {
            alert(
                "ขอความร่วมมือช่วยกรอกฟอร์มกันหน่อยนะคะ แป๊บเดียวเท่านั้น กรอกเสร็จช่วงท้ายเรามีของขวัญเซอร์ไพรส์ด้วยนะ !"
            );
        } else {
            dispatch({
                type: "set",
                field: "resultPage",
                payload: resultPage + 1,
            });
        }
    };
    const handleBackToMenu = () => {
        Cookies.remove("uid");
        dispatch({
            type: "reset",
        });
        generateUID();
        navigate("/");
    };
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0 blur-sm"
            } flex flex-col m-auto px-5 md:px-12 py-12 text-xl h-full overflow-scroll bg-neutral-100
            transition duration-[2000ms] ease-in select-text')]`}
        >
            <div className="mx-auto">
                <div className="mx-auto drop-shadow-md text-center">
                    <div
                        style={{
                            textShadow: "5px 5px 0px pink",
                        }}
                        className="text-5xl md:text-7xl font-ms font-bold leading-none text-pink-400 rounded-full my-2"
                    >
                        GOODIVAL
                    </div>
                </div>
                {resultPage === 0 ? (
                    <div className="grid grid-cols-1 gap-12 max-w-[40rem] mx-auto">
                        <div className="font-semibold text-3xl md:text-4xl text-pink-500 tracking-wide mx-auto">
                            สรุป
                        </div>
                        <div>
                            สำหรับความหมายของสิ่งที่ทุกคนได้เห็นผ่านเรื่องราวในสวนสนุกนี้ก็คือ
                            บุคลิกภาพแบบคติสมบูรณ์แบบ หรือ Perfectionism นั่นเอง
                            เครื่องเล่นต่าง ๆ
                            ก็สามารถเปรียบเทียบได้กับองค์ประกอบของความสมบูรณ์แบบ
                            ลองอ่านดูกันได้เลย
                        </div>
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                บุคลิกภาพแบบคติสมบูรณ์แบบ (Perfectionism)
                            </div>{" "}
                            หมายถึง การตั้งมาตรฐานสูงในการดำรงชีวิต การเรียน
                            หรือการทำงาน
                            โดยมุ่งมั่นพยายามไปให้ถึงเป้าหมายที่ตั้งไว้อย่างจริงจังและมีการประเมินผลอย่างเข้มงวด
                            ถ้าสามารถไปถึงมาตรฐานที่ตั้งไว้ได้ก็จะไม่เกิดปัญหา
                            แต่หากไม่ถึงเป้าหมายก็จะเกิดความกังวล
                            เครียดและส่งผลต่อสุขภาพจิตได้
                            เพราะกลัวว่าความผิดพลาดที่เกิดขึ้นแสดงให้เห็นถึงความล้มเหลวและอาจทำให้ไม่ได้รับการยอมรับจากคนรอบข้าง
                        </div>
                        <div>
                            องค์ประกอบย่อยเกี่ยวกับ Perfectionism
                            ประยุกต์จากแนวคิดการนิยมความสมบูรณ์แบบของ Frost et
                            al. (1990) มีทั้งด้านลบและด้านบวกใน 6 องค์ประกอบ
                            (อ้างอิง สุปรีชา ชำนาญพุฒิพร, 2563)
                        </div>
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                01 เครื่องเล่นชิงช้าสวรรค์ (กระต่าย)
                            </div>
                            ความกังวลในความผิดพลาด (Concerns over mistake) คือ
                            ความกลัวว่าจะไม่ได้รับการยอมรับจากสังคมหรือคนรอบข้างจากล้มเหลวที่จะทำตามมาตรฐานที่ตั้งเอาไว้แบบเกินทำได้จริง
                        </div>
                        <MiniScene
                            character="/assets/Character/Rabbit/Rabbit_Sad.png"
                            background="/assets/Background/bg_ferris.webp"
                        />
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                02 เครื่องเล่นม้าหมุน (นกยูง)
                            </div>
                            ความลังเลสงสัยในการกระทำของตนเอง (Doubt about
                            action) คือ ความรู้สึกว่าสิ่งที่ตนเองทำไม่ดีพอ
                            ซึ่งทำให้ไม่กล้าตัดสินใจและผัดวันประกันพรุ่ง
                        </div>
                        <MiniScene
                            character="/assets/Character/Peacock/Peacock_Worry.png"
                            background="/assets/Background/bg_carousel.webp"
                        />
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                03 เครื่องเล่นปาลูกโป่ง (ยีราฟ)
                            </div>
                            การตั้งมาตรฐานส่วนบุคคล (Personal Standard)
                            และการชอบจัดการ (Organization) คือ
                            การกำหนดและความพยายามไปถึงมาตรฐานส่วนตัวที่สูง
                            ซึ่งเป็นทั้งข้อดีและข้อเสีย
                            เนื่องจากถ้าไม่สามารถทำตามมาตรฐานได้สำเร็จอาจเกิดผลเสียต่อสุขภาพจิต
                            อีกทั้งยังชอบการจัดการและควบคุมสิ่งต่าง ๆ
                            ให้สมบูรณ์แบบตามมาตรฐานของตนเอง
                        </div>
                        <MiniScene
                            character="/assets/Character/Giraffe/Giraffe_Worry.png"
                            background="/assets/Background/bg_balloon.webp"
                        />
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                04 เครื่องเล่นรถบั๊ม (จิงโจ้)
                            </div>
                            ความคาดหวังของพ่อแม่และการวิพากษ์วิจารณ์ของผู้ปกครอง
                            คือ
                            ความพยายามทำตามความคาดหวังของผู้ปกครองเพื่อให้ได้รับการยอมรับ
                            นอกจากนี้ยังได้รับคำตำหนิหรือการวิพากษ์วิจารณ์จากผู้ปกครองซึ่งอาจส่งผลให้เกิดความรู้สึกไม่มั่นใจได้
                        </div>
                        <MiniScene
                            character="/assets/Character/Kangaroo (Kid)/Grey_Sad.png"
                            background="/assets/Background/bg_bumper.webp"
                        />
                        <div>
                            <div className="font-semibold text-2xl mb-1">
                                หมายเหตุ
                            </div>
                            เว็บไซต์นี้ไม่ได้มีวัตถุประสงค์ในการจัดทำเพื่อวินิจฉัยหรือวัดบุคลิกภาพแบบคติสมบูรณ์แบบ
                            แต่เป็นการนำลักษณะด้านต่าง ๆ
                            ของคติสมบูรณ์แบบมานำเสนอให้เห็นผ่านตัวละครเพื่อสร้างความรู้ความเข้าใจเกี่ยวกับคติสมบูรณ์แบบเพียงเท่านั้น
                            <div className="mt-5">
                                หากคุณมีความกังวลใจหรือต้องการความช่วยเหลือ
                                สามารถติดต่อนักจิตวิทยาหรือจิตเเพทย์ได้
                            </div>
                        </div>
                    </div>
                ) : resultPage === 1 ? (
                    <Rating />
                ) : resultPage === 2 ? (
                    <CharacterChoose />
                ) : resultPage === 3 ? (
                    <Credits />
                ) : null}
            </div>
            {resultPage !== 3 ? (
                <div className="my-12">
                    <button
                        onClick={changePage}
                        className="flex mx-auto bg-pink-500 md:hover:bg-pink-600 rounded-full py-2 px-5 shadow-md transition duration-300"
                    >
                        <div className="my-auto text-white">Next</div>
                        <svg
                            className="w-6 h-6 fill-white my-auto"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 512"
                        >
                            {
                                "<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
                            }
                            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </button>
                </div>
            ) : (
                <button
                    onClick={handleBackToMenu}
                    style={{
                        boxShadow: `5px 5px 0px pink`,
                    }}
                    className={`bg-pink-400 md:hover:bg-pink-500 text-2xl rounded-lg text-white px-5 w-[80%]
                py-2 mt-5 m-auto transition max-w-[20rem] duration-500 font-medium drop-shadow-md mx-auto`}
                >
                    Back to menu
                </button>
            )}
        </div>
    );
};

export default Conclusion;
