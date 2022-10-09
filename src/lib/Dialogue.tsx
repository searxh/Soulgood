import React from 'react'

export function Them({ content }:{ content:string }) {
    const [printing, setPrinting] = React.useState<boolean>(true)
    const [displayedContent, setDisplayedContent] = React.useState<string>("")
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
                delay += 200
            }
            setPrinting(false)
        }
    },[])
    return (
        <button
            disabled={printing}
            className="bg-white text-black text-center p-5 m-2"
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