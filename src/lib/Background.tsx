import React from "react"

export function Hills({ name }:{ name:string }) {
    const [image,setImage] = React.useState<string>("")
    React.useLayoutEffect(()=>{
        if (name !== undefined) {
            setImage("/assets/bg_"+name+".jpg")
        }
    },[name])
    return (
        <img
            src={image}
            className="flex-1 grayscale brightness-150 object-fill"
            alt=""
        />
    )
}

export function Forest({ name }:{ name:string }) {
    const [image,setImage] = React.useState<string>("")
    React.useLayoutEffect(()=>{
        if (name !== undefined) {
            setImage("/assets/bg_"+name+".jpg")
        }
    },[name])
    return (
        <img
            src={image}
            className="flex-1 grayscale brightness-200 object-fill"
            alt=""
        />
    )
}