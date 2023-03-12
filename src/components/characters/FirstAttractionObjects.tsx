import React from "react";

export default function FirstAttractionObjects({
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
                        src="/assets/Props/Screwdriver.webp"
                        className={`drop-shadow-md mr-24 my-auto
                        w-[100px] transition duration-300 animate-bob`}
                        alt=""
                        style={className}
                    />
                    <img
                        src="/assets/Props/Hammer.webp"
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
