import React from "react";
import CharacterCard from "./CharacterCard";
import SaveImageButton from "./SaveImageButton";

const characterCardData = [
    {
        name: "กระต่าย",
        character: "/assets/Character/Rabbit/Rabbit_Happy.png",
        background: "/assets/Background/bg_ferris.webp",
    },
    {
        name: "นกยูง",
        character: "/assets/Character/Peacock/Peacock_Happy.png",
        background: "/assets/Background/bg_carousel.webp",
    },
    {
        name: "ยีราฟ",
        character: "/assets/Character/Giraffe/Giraffe_Happy.png",
        background: "/assets/Background/bg_balloon.webp",
    },
    {
        name: "จิงโจ้",
        character: "/assets/Character/Kangaroo (Kid)/Grey_Happy.png",
        background: "/assets/Background/bg_bumper.webp",
    },
];

const CharacterChoose = () => {
    const [selected, setSelected] = React.useState<number>(0);
    const [random] = React.useState<number>(Math.floor(Math.random() * 3) + 1);
    return (
        <div>
            {selected === 0 ? (
                <>
                    <div className="font-semibold text-xl md:text-2xl mb-1 text-center text-pink-500 max-w-[40rem]">
                        เลือกตัวละครที่คุณชื่นชอบ
                    </div>
                    <div className="grid grid-cols-2 gap-1 max-w-[50rem] mx-auto">
                        {characterCardData.map((card, index) => {
                            const { name, character, background } = card;
                            return (
                                <CharacterCard
                                    key={index}
                                    name={name}
                                    character={character}
                                    background={background}
                                    index={index}
                                    onSelectCallback={(index) => {
                                        //console.log("selected", index + 1, random);
                                        setSelected(index + 1);
                                    }}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <>
                    <div className="font-semibold text-xl md:text-2xl mb-1 text-center text-pink-500 max-w-[40rem]">
                        อย่าลืมลง social media มาเล่น add yours แล้วแท็ก ig
                        soulgood.journey ด้วยนะ ✨
                    </div>
                    <div>
                        <img
                            src={`/assets/Cards/${selected}/quote${random}.png`}
                            alt=""
                            className={`w-[20rem] mx-auto my-5 shadow-lg border-2 rounded-xl`}
                        />
                        <SaveImageButton index={selected} random={random} />
                    </div>
                </>
            )}
        </div>
    );
};

export default CharacterChoose;
