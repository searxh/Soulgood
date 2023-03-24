import useIntroTransition from "../../hooks/useIntroTransition";

const Page1 = () => {
    const transition = useIntroTransition();
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0"
            } flex flex-col m-auto text-xl md:text-2xl text-pink-400
            z-10 h-full w-full transition duration-1000 drop-shadow-md`}
        >
            <div className="w-[80%] m-auto">
                <div className="text-center text-2xl md:text-3xl">Goodival</div>
                <div className="p-5 text-center">
                    เป็นเว็บไซต์ต้นแบบนวัตกรรมสุขภาพจิต จากทีม Soulgood
                    ภายในโครงการบ่มเพาะนวัตกรรม (University Incubation Program
                    2022)
                </div>
                <div className="grid grid-cols-3 gap-5 max-w-[40rem] mx-auto py-5">
                    <img
                        className="rounded-xl my-auto"
                        src="/assets/sss.webp"
                        alt=""
                    />
                    <img
                        className="rounded-xl aspect-square"
                        src="/assets/innowhale.webp"
                        alt=""
                    />
                    <img
                        className="rounded-full aspect-square"
                        src="/assets/psychology.webp"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Page1;
