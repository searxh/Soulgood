/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

interface IProps {
    index: number;
    random: number;
}

const SaveImageButton = ({ index, random }: IProps) => {
    const canvasRef = React.useRef<any>(null);
    const handleSaveImage = () => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const link = document.createElement("a");
            const filename = `quote${random}.png`;
            link.download = filename;
            link.href = canvas.toDataURL();
            link.click();
        }
    };
    React.useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const image = new Image();
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
        image.src = `/assets/Cards/${index}/quote${random}.png`;
    }, []);
    return (
        <div className="flex relative">
            <div className="absolute opacity-0 scale-0">
                <canvas ref={canvasRef} width="1080" height="1920" />
            </div>
            <button
                onClick={handleSaveImage}
                style={{
                    boxShadow: `5px 5px 0px blue`,
                }}
                className={`bg-blue-500 hover:bg-blue-700 text-2xl rounded-lg 
                text-white px-5 w-[80%] py-2 mt-5 m-auto hover:scale-105 flex justify-center
                transition max-w-[20rem] duration-500 font-medium drop-shadow-md mx-auto`}
            >
                <svg
                    className="w-8 h-8 mx-3 fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                >
                    {
                        "<!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->"
                    }
                    <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                </svg>
                Save Image
            </button>
        </div>
    );
};

export default SaveImageButton;
