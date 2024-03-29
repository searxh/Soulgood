/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import NewItem from "../NewItem";
import { GlobalContext } from "../../states";
import ZoomModule from "../ZoomModule";
import Balloon from "../Balloon";
import AnswerBubble from "../AnswerBubble";
import EndFade from "../EndFade";
import BalloonEnding from "../BalloonEnding";

const Special = ({ content, next }: { content: string; next: any }) => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const sceneRouter = () => {
        //console.log("special next", next);
        if (next === "default") {
            return scene + 1;
        } else {
            return next;
        }
    };
    const handleSetChoice = () => {
        dispatch({ type: "set", field: "scene", payload: sceneRouter() });
    };
    return (
        <div
            className="flex absolute justify-evenly w-screen h-screen
            z-10 top-0 bottom-0 left-0 right-0 mx-auto break-words"
        >
            <>
                {content.includes("New item") ? (
                    <NewItem
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                        item={content.split("/")[1]}
                    />
                ) : content === "Zoom" ? (
                    <ZoomModule
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : content === "Balloon" ? (
                    <Balloon
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : content.includes("Answer bubble") ? (
                    <AnswerBubble
                        clickCallback={() => {
                            handleSetChoice();
                        }}
                        type={content.split("/")[1]}
                    />
                ) : content === "End" ? (
                    <EndFade />
                ) : content === "Balloon ending" ? (
                    <BalloonEnding
                        callback={() => {
                            handleSetChoice();
                        }}
                    />
                ) : null}
            </>
        </div>
    );
};

export default Special;
