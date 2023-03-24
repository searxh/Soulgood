import React, { createContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "./states";
import { NextContextInterface } from "./types";

export const NextContext = createContext<NextContextInterface>(
    {} as NextContextInterface
);

export function NextStateProvider({ children }: any) {
    const { dispatch } = React.useContext(GlobalContext);
    const location = useLocation();
    const [active, setActive] = React.useState<boolean>(false);
    const [nextScene, setNextScene] = React.useState<number>(-1);
    const handleOnClick = () => {
        setActive(false);
        console.log("<NEXT CONTEXT>", nextScene);
        dispatch({
            type: "set",
            field: "scene",
            payload: nextScene,
        });
    };
    React.useEffect(() => {
        if (location.pathname === "/") {
            setActive(false);
        }
    }, [location.pathname]);
    React.useEffect(() => {
        console.log("[NEXT STATE]", active);
    }, [active]);
    return (
        <NextContext.Provider
            value={{
                setActive: setActive,
                setNextScene: setNextScene,
            }}
        >
            {active ? (
                <button
                    onClick={handleOnClick}
                    className="absolute z-50 w-screen h-screen"
                ></button>
            ) : null}
            {children}
        </NextContext.Provider>
    );
}
