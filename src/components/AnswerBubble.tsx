import React from "react";
import { qList } from "../default";
import { GlobalContext } from "../states";

const test: { [key: string]: string } = {
    Q1_Deal: "Lorem ipsum dolor sit amet, consectetur",
    Q2_Manage:
        "adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
    Q3_Enough: "ullamco laboris nisi ut aliquip",
    Q5_Method:
        "ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteu",
    Q6_NotWork:
        "sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    Q7_Alt: "Sed ut perspiciatis",
    Q9_Parent:
        "unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
    Q10_Support:
        "sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
};

const AnswerBubble = ({ clickCallback }: { clickCallback: Function }) => {
    const { global_state } = React.useContext(GlobalContext);
    const { answers } = global_state;
    const [transition, setTransition] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setTransition(false);
        setTimeout(() => {
            clickCallback();
        }, 1000);
    };
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <div className="relative w-[80%] max-w-[40rem] h-[80%] m-auto">
            <button
                onClick={handleOnClick}
                className={`${
                    transition ? "opacity-100" : "opacity-0"
                } hover:scale-105 absolute -top-3 -right-3 mx-auto w-12 h-12 drop-shadow-md
                bg-red-400 text-white z-20 transition duration-500 rounded-full`}
            >
                X
            </button>
            <div
                className={`${
                    transition ? "scale-100" : "scale-0 opacity-0"
                } flex flex-col w-full h-full z-10 m-auto backdrop-blur-lg shadow-md
                p-5 rounded-xl transition duration-500 bg-white bg-opacity-90 overflow-scroll text-left`}
            >
                {Object.keys(test).map((key) => (
                    <div key={key} className="w-full my-3 px-3">
                        <div className="m-auto font-semibold text-pink-500">
                            {qList[key] + "?"}
                        </div>
                        <div className="m-auto font-light text-lg">
                            {test[key]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnswerBubble;
