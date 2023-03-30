import React from "react";

export default function KangarooMother({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage(
                "/assets/Character/Kangaroo (Mom)/Kgr_Mom_" + state + ".png"
            );
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute drop-shadow-md m-auto pointer-events-none
            animate-bob z-10 w-full max-w-[400px] transition duration-300`}
            alt=""
            style={className}
        />
    );
}
