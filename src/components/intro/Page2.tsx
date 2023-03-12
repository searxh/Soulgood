import useIntroTransition from "../../hooks/useIntroTransition";

const Page2 = () => {
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
                    เราจะพาทุกคนไปสำรวจความคิดและความรู้สึกของตัวเองผ่านการเดินทางในครั้งนี้
                    ถ้าพร้อมแล้วไปกันเลย!
                </div>
            </div>
        </div>
    );
};

export default Page2;
