import React, { useContext } from "react";
import { default as Player } from "react-h5-audio-player";
import { GlobalContext } from "../../states";

const trackList = ["/assets/track1.mp3", "/assets/track2.mp3"];

export default function AudioPlayer() {
    const { global_state } = useContext(GlobalContext);
    const { track } = global_state;
    const [mute, setMute] = React.useState<boolean>(true);
    const ref = React.useRef<any>(null);
    const handleOnClick = () => {
        setMute(!mute);
        if (!mute) {
            ref.current?.audio.current.pause();
        } else {
            ref.current?.audio.current.play();
        }
    };
    return (
        <button
            onClick={handleOnClick}
            className={`absolute top-1 left-3 w-12 h-12 hover:scale-110 opacity-70
            ${
                mute
                    ? "bg-[url('../public/assets/mute.png')]"
                    : "bg-[url('../public/assets/unmute.png')]"
            } 
            transition duration-300 z-50`}
        >
            <img
                className="m-auto invert"
                src={mute ? "assets/mute.png" : "assets/unmute.png"}
                alt=""
            />
            <Player
                autoPlayAfterSrcChange={!mute}
                src={trackList[track]}
                className="opacity-50 scale-[0.01%]"
                volume={0.2}
                loop={true}
                ref={ref}
            />
        </button>
    );
}
