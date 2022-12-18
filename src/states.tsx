import React, { createContext } from "react";
import {
    ActionInterface,
    GlobalContextInterface,
    GlobalStateInterface,
} from "./types";
import { initialState } from "./default";

export const GlobalContext = createContext<GlobalContextInterface>(
    {} as GlobalContextInterface
);

const getSessionData = () => {
    const state = sessionStorage.getItem("fmm-state");
    if (state === null) {
        save(initialState);
        return initialState;
    } else {
        return initialState;
        //disable scene saving
        //return load();
    }
};

const save = (state: GlobalStateInterface) => {
    sessionStorage.setItem("fmm-state", JSON.stringify(state));
};

const load = () => {
    const res = JSON.parse(sessionStorage.getItem("fmm-state") as string);
    return res;
};

export function GlobalStateProvider({ children }: any) {
    const reducer = (state: GlobalStateInterface, action: ActionInterface) => {
        switch (action.type) {
            case "set":
                const newState: any = { ...state };
                newState[action.field as string] = action.payload;
                save(newState);
                return newState;
            case "multi-set":
                if (action.field !== undefined) {
                    for (let i = 0; i < action.field.length; i++) {
                        newState[action.field[i]] = action.payload[i];
                    }
                    save(newState);
                    return newState;
                } else return state;
            default:
                return state;
        }
    };
    const [state, dispatch] = React.useReducer(reducer, getSessionData());
    return (
        <GlobalContext.Provider
            value={{ global_state: state, dispatch: dispatch }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
