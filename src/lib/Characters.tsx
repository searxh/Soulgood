import React from 'react'

export function Soul({ state }:{ state:string }) {
    const [image,setImage] = React.useState<string>("")
    React.useLayoutEffect(()=>{
        if (state !== undefined) {
            setImage("/assets/soul_"+state+".png")
        }
    },[state])
    return (
        <img
            src={image}
            className="absolute aspect-video top-[40%] left-[40%] 
            h-[20%] animate-bob z-10 object-contain"
            alt=""
        />
    )
}