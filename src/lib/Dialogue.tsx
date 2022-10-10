import React from 'react'
import { GlobalContext } from '../states'

export function Them({ content }:{ content:string }) {
    const [printing, setPrinting] = React.useState<boolean>(true)
    const [displayedContent, setDisplayedContent] = React.useState<string>("")
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
                delay += 100
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