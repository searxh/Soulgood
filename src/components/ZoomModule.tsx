import React from "react";
import Zoom from "./Zoom";

const ZoomModule = ({ clickCallback }: { clickCallback: Function }) => {
    const [transition, setTransition] = React.useState<boolean>(false);
    const handleOnClick = () => {
        setTransition(false);
        setTimeout(() => {
            clickCallback();
        }, 1000);
    };
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
    }, []);
    return (
        <>
            <div
                onClick={handleOnClick}
                className={`${
                    transition ? "opacity-100" : "opacity-0"
                } fixed bg-black h-full w-full bg-opacity-50 transition 
                duration-300 backdrop-blur-md`}
            />
            <div
                onClick={handleOnClick}
                className={`${
                    transition ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } w-[80%] min-w-[21rem] m-auto
                transition duration-300`}
            >
                <Zoom />
            </div>
        </>
    );
};

export default ZoomModule;
