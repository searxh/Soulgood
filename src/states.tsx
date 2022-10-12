import React, { createContext } from "react"

export const GlobalContext = createContext({})

interface State {
    name:string,
    scene:number
}

interface Action {
    type:string,
    field:string,
    payload:any
}

const initialState:State = {
    name:"",
    scene:0,
}

export function GlobalStateProvider({ children }:any) {
    const reducer = (state:State, action:Action) => {
        switch (action.type) {
            case "set":
                const newState:any = { ...state }
                newState[action.field] = action.payload
                return newState
            default:
                return state
        }
    }
    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    React.useEffect(()=>{
        console.log(state)
    },[state])
    return (
        <GlobalContext.Provider value={{ global_state:state, dispatch:dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}
