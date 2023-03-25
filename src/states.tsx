import React, { createContext } from "react";
import {
    ActionInterface,
    GlobalContextInterface,
    GlobalStateInterface,
} from "./types";
import { initialState } from "./default";
import cloneDeep from "lodash/cloneDeep";

export const GlobalContext = createContext<GlobalContextInterface>(
    {} as GlobalContextInterface
);

const getSessionData = () => {
    const state = sessionStorage.getItem("session-state");
    if (state === null) {
        save(initialState);
        return initialState;
    } else {
        //return initialState;
        //disable scene saving
        return load();
    }
};

const save = (state: GlobalStateInterface) => {
    sessionStorage.setItem("session-state", JSON.stringify(state));
};

const load = () => {
    const res = JSON.parse(sessionStorage.getItem("session-state") as string);
    return res;
};

export function GlobalStateProvider({ children }: any) {
    const reducer = (state: GlobalStateInterface, action: ActionInterface) => {
        const newState: GlobalStateInterface = cloneDeep({ ...state });
        //console.log(newState);
        switch (action.type) {
            case "set":
                newState[action.field as string] = action.payload;
                //console.log("[SET]", state, newState);
                save(newState);
                return newState;
            case "multi-set":
                if (action.field !== undefined) {
                    for (let i = 0; i < action.field.length; i++) {
                        newState[action.field[i]] = action.payload[i];
                    }
                    //console.log("[MULTI-SET]", state, newState);
                    save(newState);
                    return newState;
                } else return state;
            case "reset":
                const resetState = { ...initialState };
                //console.log("[RESET]", state, resetState);
                save(resetState);
                return resetState;
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
