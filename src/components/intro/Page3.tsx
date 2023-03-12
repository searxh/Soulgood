import useIntroTransition from "../../hooks/useIntroTransition";

const Page3 = () => {
    const transition = useIntroTransition();
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0"
            } flex flex-col m-auto text-xl md:text-2xl text-pink-400
            z-10 h-full w-full transition duration-1000 drop-shadow-md`}
        >
            <div className="w-[80%] m-auto">
                <div className="text-center text-2xl md:text-3xl">หมายเหตุ</div>
                <div className="p-5 text-center">
                    เว็บไซต์นี้มีการเก็บข้อมูลการตอบของผู้เล่น
                    แต่จะเป็นข้อมูลที่ไม่ระบุตัวตน
                    ใช้เพื่อการศึกษาเท่านั้นและจะไม่มีการเปิดเผยข้อมูลต่อ
                </div>
            </div>
        </div>
    );
};

export default Page3;
