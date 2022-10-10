import React from 'react'
import { GlobalContext } from '../states'
import { scenes } from '../lib/Scenes'
import { Input, Them, Us } from '../lib/Dialogue'
import { Soul } from '../lib/Characters'
import { Forest, Hills } from '../lib/Background'

export default function Story() {
    const { global_state }:any = React.useContext(GlobalContext)
    React.useEffect(()=>{
        console.log(global_state.scene)
    },[global_state.scene])
    const filteredScenes = React.useMemo(()=>{
        return scenes.filter((sceneObj)=>global_state.scene===sceneObj.id)
    },[global_state.scene])
    return (
        <div className="">
            <div className="flex aspect-video max-h-screen m-auto relative bg-blue-400">
                {filteredScenes
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
                {filteredScenes
                .map((sceneObj,index)=>{
                    return (
                        <Dialogue 
                            key={index} 
                            type={sceneObj.dialogue.type} 
                            content={sceneObj.dialogue.content}
                        />
                    )
                })}
                {filteredScenes
                .map((sceneObj,index)=>{
                    return (
                        <Background 
                            key={index} 
                            name={sceneObj.background.name}
                        />
                    )
                })}
            </div>
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

function Background({ name }:{ name:string }) {
    return (
        <>
            {name==="1"?
                <Hills name={name} />:
            name==="2"?
                <Forest name={name} />:
            null}
        </>
    )
}