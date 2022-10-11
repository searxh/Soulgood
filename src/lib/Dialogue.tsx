import React from 'react'
import { GlobalContext } from '../states'
import { ContentType } from './Scenes'

export function Them({ content, next }:{ content:string, next:string | Array<Number> }) {
    const [ printing, setPrinting ] = React.useState<boolean>(true)
    const [ displayedContent, setDisplayedContent ] = React.useState<string>("")
    const { global_state, dispatch }:any = React.useContext(GlobalContext)
    const { scene } = global_state
    React.useEffect(()=>{
        if (printing) {
            let accumulator = ""
            let delay = 0
            for (let i = 0; i < content.length; i++) {
                // eslint-disable-next-line no-loop-func
                setTimeout(()=>{
                    accumulator += content[i]
                    setDisplayedContent(accumulator)
                },delay)
                delay += 0
            }
            setTimeout(()=>setPrinting(false),delay)
        }
    },[global_state.scene])
    return (
        <button
            disabled={printing}
            onClick={()=>{
                dispatch({ type:"set" , field:"scene", payload:scene+1, })
                setPrinting(true)
            }}
            className="absolute bg-white text-black border-black border-2
            text-center p-5 z-10 left-0 right-0 mx-auto bottom-5 w-[90%] shadow-md"
        >
            {displayedContent}
        </button>
    )
}

export function Us({ content }:{ content:string }) {
    return (
        <button
            className="bg-white text-black rounded-lg text-center p-5 m-2"
        >
            {content}
        </button>
    )
}

export function Input({ content }:{ content:string }) {
    return (
        <div
            className="bg-white text-black text-center p-5 m-2"
        >
            {content}
        </div>
    )
}

export function Choice({ content, next }:{ content:ContentType, next:string | Array<Number> }) {
    const { global_state, dispatch }:any = React.useContext(GlobalContext)
    const { scene } = global_state
    return (
        <div
            className="flex absolute justify-evenly
            z-10 left-0 right-0 mx-auto bottom-5 w-[90%] shadow-md"
        >
            <button
                onClick={()=>{
                    dispatch({ type:"set" , field:"scene", payload:scene+1, })
                }}
                className="flex-1 bg-white border-black 
                border-2 text-center p-5 mr-2 hover:scale-[102%] transition"
            >
                {content.subContent}
            </button>
            <button
                onClick={()=>{
                    dispatch({ type:"set" , field:"scene", payload:scene+1, })
                }}
                className="flex-1 bg-white border-black 
                border-2 text-center p-5 ml-2 hover:scale-[102%] transition"
            >
                {content.subContent1}
            </button>
        </div>
    )
}