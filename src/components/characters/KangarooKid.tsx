import React from "react";

export default function KangarooKid({
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
                "/assets/Character/Kangaroo (Kid)/Cream_" + state + ".PNG"
            );
        }
    }, [state, className]);
    return (
        <div
            style={className}
            className="absolute -scale-x-100 max-w-[80%] w-[400px] m-auto z-10"
        >
            <img
                src={image}
                className={`drop-shadow-md sepia-[50%]
                animate-bob transition duration-300`}
                alt=""
            />
        </div>
    );
}
