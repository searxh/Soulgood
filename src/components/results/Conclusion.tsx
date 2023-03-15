import React from "react";
import MiniScene from "./MiniScene";

const Conclusion = () => {
    const [transition, setTransition] = React.useState<boolean>(false);
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0 blur-sm"
            } m-auto p-12 text-xl h-full overflow-scroll bg-neutral-100
            transition duration-[2000ms] ease-in select-text')]`}
        >
            <div className="grid grid-cols-1 gap-12 max-w-[40rem] mx-auto">
                <div className="mx-auto drop-shadow-md text-center">
                    <div
                        style={{
                            textShadow: "5px 5px 0px pink",
                        }}
                        className="text-6xl font-bold leading-none text-pink-400 rounded-full"
                    >
                        GOODIVAL
                    </div>
                    <div className="font-semibold text-4xl text-pink-400">
                        สรุป
                    </div>
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
                    ประยุกต์จากแนวคิดการนิยมความสมบูรณ์แบบของ Frost et al.
                    (1990) มีทั้งด้านลบและด้านบวกใน 6 องค์ประกอบ (อ้างอิง
                    สุปรีชา ชำนาญพุฒิพร, 2563)
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
                    ความลังเลสงสัยในการกระทำของตนเอง (Doubt about action) คือ
                    ความรู้สึกว่าสิ่งที่ตนเองทำไม่ดีพอ
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
                    การตั้งมาตรฐานส่วนบุคคล (Personal Standard) และการชอบจัดการ
                    (Organization) คือ
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
                    ความคาดหวังของพ่อแม่และการวิพากษ์วิจารณ์ของผู้ปกครอง คือ
                    ความพยายามทำตามความคาดหวังของผู้ปกครองเพื่อให้ได้รับการยอมรับ
                    นอกจากนี้ยังได้รับคำตำหนิหรือการวิพากษ์วิจารณ์จากผู้ปกครองซึ่งอาจส่งผลให้เกิดความรู้สึกไม่มั่นใจได้
                </div>
                <MiniScene
                    character="/assets/Character/Kangaroo (Kid)/Cream_Sad.png"
                    background="/assets/Background/bg_bumper.webp"
                />
            </div>
        </div>
    );
};

export default Conclusion;
