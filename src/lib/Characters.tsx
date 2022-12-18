import React from "react";

export function Owl({ state, className }: { state: string; className: any }) {
    const [image, setImage] = React.useState<string>("");
    state = "";
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/owl" + state + ".gif");
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute ${className} drop-shadow-md
            animate-bob z-10 w-80 transition duration-300`}
            alt=""
            style={className}
        />
    );
}
