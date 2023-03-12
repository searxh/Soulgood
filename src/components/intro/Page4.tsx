import useIntroTransition from "../../hooks/useIntroTransition";

const Page4 = () => {
    const transition = useIntroTransition();
    return (
        <div
            className={`${
                transition ? "opacity-100" : "opacity-0"
            } flex flex-col m-auto text-xl md:text-2xl text-pink-400
            z-10 h-full w-full transition duration-1000 drop-shadow-md`}
        >
            <div className="w-[80%] m-auto">
                <div className="p-5 text-center">
                    แนะนำให้เปิดเสียงเพลงประกอบเพื่ออรรถรสในการเล่น
                </div>
                <img
                    className="opacity-50 invert w-1/2 max-w-[10rem] m-auto"
                    src="assets/unmute.png"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Page4;
