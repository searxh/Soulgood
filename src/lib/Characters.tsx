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
            className="h-32 w-42 animate-bob"
            alt=""
        />
    )
}