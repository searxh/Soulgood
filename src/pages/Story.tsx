import React from 'react'
import { GlobalContext } from '../states'
import { scenes } from '../lib/Scenes'
import { Input, Them, Us } from '../lib/Dialogue'
import { Soul } from '../lib/Characters'

export default function Story() {
    const { global_state }:any = React.useContext(GlobalContext)
    React.useEffect(()=>{
        console.log(global_state.scene)
    },[global_state.scene])
    return (
        <div className="flex flex-col h-screen">
            <>
                {scenes.filter((sceneObj)=>global_state.scene===sceneObj.id)
                .map((sceneObj)=>{
                    return sceneObj.characters.map((character,index)=>{
                        return (
                            <Character 
                                key={index} 
                                name={character.name} 
                                state={character.state}
                            />
                        )
                    })
                })}
                {scenes.filter((sceneObj)=>global_state.scene===sceneObj.id)
                .map((sceneObj,index)=>{
                    return (
                        <Dialogue 
                            key={index} 
                            type={sceneObj.dialogue.type} 
                            content={sceneObj.dialogue.content}
                        />
                    )
                })}
            </>
        </div>
    )
}

function Character({ name, state }:{ name:string, state:string }) {
    return (
        <>
            {name==="soul"?
                <Soul state={state} />:
            null}
        </>
    )
}

function Dialogue({ type, content }:{ type:string, content:string }) {
    return (
        <>
            {type==="them"?
                <Them content={content} />:
            type==="us"?
                <Us content={content} />:
            type==="input"?
                <Input content={content} />:
            null}
        </>
    )
}