import React from "react";
import useElementSize from "../../hooks/useElementSize";

export default function Rabbit({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    const rabbitSize = useElementSize("rabbit-image");
    React.useLayoutEffect(() => {
        if (state === "Screwdriver") {
            setImage("/assets/Character/Rabbit/Rabbit_Idle.png");
        } else if (state !== undefined) {
            setImage("/assets/Character/Rabbit/Rabbit_" + state + ".png");
        }
    }, [state, className]);
    return (
        <div
            style={{ ...className, height: rabbitSize.height }}
            className="absolute w-full max-w-[450px] m-auto z-10 transition duration-300"
        >
            <div
                style={{
                    height: rabbitSize.height,
                }}
                className="relative w-full max-w-[450px]"
            >
                <img
                    id="rabbit-image"
                    src={image}
                    className={`absolute drop-shadow-md
                    animate-bob w-full max-w-[450px] pointer-events-none`}
                    alt=""
                />
                {state === "Screwdriver" ? (
                    <img
                        src="/assets/Props/Screwdriver.webp"
                        className={`absolute top-[65%] left-[17%] drop-shadow-md
                        w-[20%] animate-bigbob pointer-events-none`}
                        alt=""
                    />
                ) : null}
            </div>
        </div>
    );
}
