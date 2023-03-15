import React from "react";

export function Bg({ name }: { name: string }) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (name !== undefined) {
            setImage("/assets/Background/bg_" + name);
        }
    }, [name]);
    return (
        <img
            src={image}
            className="flex-1 object-cover opacity-60 bg-white blur-sm"
            alt=""
        />
    );
}
