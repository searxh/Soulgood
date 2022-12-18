import React from "react";

export function Hills({ name }: { name: string }) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (name !== undefined) {
            setImage("/assets/bg_" + name + ".jpg");
        }
    }, [name]);
    return <img src={image} className="flex-1 object-cover" alt="" />;
}

export function Forest({ name }: { name: string }) {
    const [image, setImage] = React.useState<string>("");
    React.useLayoutEffect(() => {
        if (name !== undefined) {
            setImage("/assets/bg_" + name + ".jpg");
        }
    }, [name]);
    return <img src={image} className="flex-1 object-cover" alt="" />;
}
