import React from "react";
import { LocationInterface } from "../types";

export function Soul({
    state,
    location,
}: {
    state: string;
    location: LocationInterface;
}) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/soul_" + state + ".png");
        }
    }, [state]);
    return (
        <img
            src={image}
            className={`absolute aspect-video ${location.top} ${location.left}
            h-[20%] animate-bob z-10 object-contain`}
            alt=""
        />
    );
}
