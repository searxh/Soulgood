import React from "react";

export default function Giraffe({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/Character/Giraffe/Giraffe_" + state + ".PNG");
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute drop-shadow-md m-auto
            animate-bob z-10 w-[600px] max-w-[80%] transition duration-300`}
            alt=""
            style={className}
        />
    );
}
