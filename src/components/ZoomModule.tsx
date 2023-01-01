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
                } fixed bg-black h-screen w-screen bg-opacity-50 transition 
                duration-300 backdrop-blur-md`}
            />
            <div
                onClick={handleOnClick}
                className={`${
                    transition ? "scale-100 opacity-100" : "scale-0 opacity-0"
                } absolute top-0 bottom-0 right-0 left-0 m-auto w-fit my-[5%]
                transition duration-300 shadow-md`}
            >
                <Zoom />
            </div>
        </>
    );
};

export default ZoomModule;
