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
            className={`absolute drop-shadow-md m-auto
            animate-bob z-10 w-[560px] max-w-[80%] transition duration-300`}
            alt=""
            style={className}
        />
    );
}

export function Rabbit({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    state = "";
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/rabbit" + state + ".gif");
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute drop-shadow-md m-auto
            animate-bob z-10 w-[560px] max-w-[80%] transition duration-300`}
            alt=""
            style={className}
        />
    );
}

export function FirstAttractionObjects({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    return (
        <div className="absolute m-auto top-0 bottom-0 left-0 right-0 z-10">
            <div className="relative flex w-full h-full">
                <div className="flex m-auto">
                    <img
                        src="/assets/object.webp"
                        className={`drop-shadow-md mr-24 my-auto
                        w-[100px] transition duration-300 animate-bob`}
                        alt=""
                        style={className}
                    />
                    <img
                        src="/assets/object1.webp"
                        className={`drop-shadow-md my-auto
                        w-[100px] transition duration-300 animate-bob`}
                        alt=""
                        style={className}
                    />
                </div>
            </div>
        </div>
    );
}

export function Peacock({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    state = "";
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/peacock" + state + ".webp");
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute drop-shadow-md m-auto
            animate-bob z-10 w-[500px] max-w-[80%] transition duration-300`}
            alt=""
            style={className}
        />
    );
}

export function Giraffe({
    state,
    className,
}: {
    state: string;
    className: any;
}) {
    const [image, setImage] = React.useState<string>("");
    state = "";
    React.useLayoutEffect(() => {
        if (state !== undefined) {
            setImage("/assets/giraffe" + state + ".webp");
        }
    }, [state, className]);
    return (
        <img
            src={image}
            className={`absolute drop-shadow-md m-auto
            animate-bob z-10 w-[500px] max-w-[80%] transition duration-300`}
            alt=""
            style={className}
        />
    );
}
