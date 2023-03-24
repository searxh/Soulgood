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
        character: "/assets/Character/Kangaroo (kid)/Grey_Happy.png",
        background: "/assets/Background/bg_bumper.webp",
    },
];

const CharacterChoose = () => {
    const [selected, setSelected] = React.useState<number>(0);
    const [random] = React.useState<number>(Math.floor(Math.random() * 3) + 1);
    return (
        <div>
            <div className="font-semibold text-2xl md:text-3xl mb-1 text-center text-pink-500">
                เลือกตัวละครที่คุณชื่นชอบ
            </div>
            {selected === 0 ? (
                <div className="grid grid-cols-2 gap-1 max-w-[50rem] mx-auto">
                    {characterCardData.map((card, index) => {
                        const { name, character, background } = card;
                        return (
                            <CharacterCard
                                name={name}
                                character={character}
                                background={background}
                                index={index}
                                onSelectCallback={(index) => {
                                    console.log("selected", index + 1, random);
                                    setSelected(index + 1);
                                }}
                            />
                        );
                    })}
                </div>
            ) : (
                <div>
                    <img
                        src={`/assets/Cards/${selected}/quote${random}.png`}
                        alt=""
                        className={`w-[20rem] mx-auto my-5 shadow-lg border-2 rounded-xl`}
                    />
                    <SaveImageButton index={selected} random={random} />
                </div>
            )}
        </div>
    );
};

export default CharacterChoose;
