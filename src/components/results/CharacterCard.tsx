import React from "react";
import useObserver from "../../hooks/useObserver";

interface IProps {
    name: string;
    character: string;
    background: string;
    quotes: Array<string>;
    author?: string;
}

const CharacterCard = ({ name, character, background, quotes }: IProps) => {
    const [randomQuote, setRandomQuote] = React.useState<string>();
    const [author, setAuthor] = React.useState<string>();
    const getRandomQuote = () => {
        return Math.floor(Math.random() * quotes.length);
    };
    React.useEffect(() => {
        if (quotes) {
            const splitted = quotes[getRandomQuote()].split("|");
            setRandomQuote(splitted[0]);
            if (splitted[1]) setAuthor(splitted[1]);
        }
    }, []);
    return (
        <div
            className="relative h-[30rem] w-[20rem] mx-auto rounded-xl bg-white
            shadow-md text-center overflow-hidden border-[0.5rem] border-white"
        >
            <img
                src={background}
                className={`absolute top-0 bottom-0 left-0 right-0 blur-md
                object-cover w-full h-full transition duration-1000`}
                alt=""
            />
            <div className={`w-full h-full m-auto rounded-3xl drop-shadow-md`}>
                <div className="bg-black bg-opacity-20 p-2 m-2 rounded-lg">
                    <div className="text-pink-200 drop-shadow-md text-3xl">
                        {name}
                    </div>
                    <div
                        className="text-white text-xl
                    w-[95%] mx-auto rounded-lg leading-7"
                    >
                        {randomQuote}
                        <div className="text-lg text-yellow-200">{author}</div>
                    </div>
                </div>
                <img
                    id={character + background + quotes}
                    src={character}
                    style={{
                        top: "55%",
                        left: "0%",
                        right: "0%",
                        bottom: "0%",
                    }}
                    className={`absolute drop-shadow-md m-auto w-[95%]
                    z-10 transition duration-1000`}
                    alt=""
                />
            </div>
        </div>
    );
};

export default CharacterCard;
