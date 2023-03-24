interface IProps {
    name: string;
    character: string;
    background: string;
    index: number;
    onSelectCallback: (index: number) => void;
}

const CharacterCard = ({
    name,
    character,
    background,
    index,
    onSelectCallback,
}: IProps) => {
    const handleOnClick = () => {
        onSelectCallback(index);
    };
    return (
        <button onClick={handleOnClick} className="flex flex-col">
            <div className="drop-shadow-md text-2xl p-2 mx-auto">{name}</div>
            <div
                className="relative h-[10rem] w-[10rem] sm:h-[15rem] sm:w-[15rem] md:h-[20rem] md:w-[20rem] mx-auto rounded-xl bg-white
                shadow-md text-center overflow-hidden border-[1px]"
            >
                <img
                    src={background}
                    className={`absolute top-0 bottom-0 left-0 right-0 blur-sm
                    object-cover w-full h-full transition duration-1000`}
                    alt=""
                />

                <div
                    className={`w-full h-full m-auto rounded-3xl drop-shadow-md hover:scale-105 transition duration-500`}
                >
                    <img
                        id={character + background}
                        src={character}
                        style={{
                            top: "50%",
                            left: "0%",
                            right: "0%",
                            bottom: "0%",
                        }}
                        className={`absolute drop-shadow-md m-auto w-[90%]
                    z-10 transition duration-1000`}
                        alt=""
                    />
                </div>
            </div>
        </button>
    );
};

export default CharacterCard;
