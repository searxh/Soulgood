import React from 'react'
import { GlobalContext } from '../states'
import { ContentType, LocationType, scenes } from '../lib/Scenes'
import { Choice, Input, Them, Us } from '../lib/Dialogue'
import { Soul } from '../lib/Characters'
import { Forest, Hills } from '../lib/Background'

export default function Story() {
    const { global_state }:any = React.useContext(GlobalContext)
    const filteredScenes = React.useMemo(()=>{
        return [scenes[global_state.scene]]
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
                                location={character.location}
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
                            next={sceneObj.next}
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

function Character(
    { name, state, location }:
    { name:string, state:string, location:LocationType }
){
    return (
        <>
            {name==="soul"?
                <Soul state={state} location={location} />:
            null}
        </>
    )
}

function Dialogue(
    { type, content, next }:
    { type:string, content:string | ContentType, next:string | Array<number> }
){
    return (
        <>
            {type==="them"?
                <Them 
                    content={content as string}
                    next={next}
                />:
            type==="us"?
                <Us 
                    content={content as string}
                    next={next}
                />:
            type==="input"?
                <Input 
                    content={content as string}
                    next={next}
                />:
            type==="choice"?
                <Choice 
                    content={content as ContentType}
                    next={next}
                />:
            null}
        </>
    )
}

function Background({ name }:{ name:string }) {
    return (
        <>
            {name==="hills"?
                <Hills name={name} />:
            name==="forest"?
                <Forest name={name} />:
            null}
        </>
    )
}