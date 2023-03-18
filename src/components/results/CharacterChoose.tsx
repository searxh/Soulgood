import React from "react";
import CharacterCard from "./CharacterCard";

const characterCardData = [
    {
        name: "กระต่าย",
        character: "/assets/Character/Rabbit/Rabbit_Happy.png",
        background: "/assets/Background/bg_ferris.webp",
        quotes: [
            "'ใคร ๆ ก็เคยผิดพลาดกันทั้งนั้น แค่เรียนรู้จากมันเเล้วเดินต่อไปก็พอ'",
            "'Let your past make you better, not bitter.'",
            "'The past is a place to learn from, not to live in.'",
        ],
    },
    {
        name: "นกยูง",
        character: "/assets/Character/Peacock/Peacock_Happy.png",
        background: "/assets/Background/bg_carousel.webp",
        quotes: [
            "'You don't have to see the whole staircase, just take the first step.'|- Martin Luther King, Jr",
            "'Continuous improvement is better delayed perfection.'|- Mark Twain",
            "'Perfection is an illusion based on our own perception.'",
        ],
    },
    {
        name: "ยีราฟ",
        character: "/assets/Character/Giraffe/Giraffe_Happy.png",
        background: "/assets/Background/bg_balloon.webp",
        quotes: [
            "'บางทีมันอาจไม่ใช่เพราะฉันทำได้ไม่ดีพอ แต่เป็นเพราะมาตรฐานของฉันเพิ่มขึ้นเรื่อย ๆ'",
            "'Don't aim for perfection, aim for 'better than yesterday.'|- Izey Victoria Odiase",
            "'When you aim for perfection, you discover it's a moving target'|- Geoffrey Fisher",
        ],
    },
    {
        name: "จิงโจ้",
        character: "/assets/Character/Kangaroo (kid)/Cream_Happy.png",
        background: "/assets/Background/bg_bumper.webp",
        quotes: [
            "'To be worthy does not mean to be perfect.'|- Gerrit W. Gong",
            "'You don't have to be perfect to be loved.'",
            "'When you stop expecting people to be perfect, you can like them for who they are.'|- Donald Miller",
        ],
    },
];

const CharacterChoose = () => {
    return (
        <div className="grid grid-cols-4">
            {characterCardData.map((card) => {
                const { name, character, background, quotes } = card;
                return (
                    <CharacterCard
                        name={name}
                        character={character}
                        background={background}
                        quotes={quotes}
                    />
                );
            })}
        </div>
    );
};

export default CharacterChoose;
