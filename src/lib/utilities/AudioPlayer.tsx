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
        <div
            onClick={handleOnClick}
            className={`absolute top-1 right-1 w-14 h-14 rounded-full 
            bg-white cursor-pointer md:hover:bg-neutral-200 opacity-100 shadow-md
            ${
                mute
                    ? "bg-[url('../public/assets/mute.png')]"
                    : "bg-[url('../public/assets/unmute.png')]"
            } 
            transition duration-300 z-50`}
        >
            <img
                className="m-auto invert drop-shadow-md p-2 opacity-50"
                src={mute ? "assets/mute.png" : "assets/unmute.png"}
                alt=""
            />
            <Player
                autoPlayAfterSrcChange={!mute}
                src={trackList[track]}
                className="opacity-0 scale-[0.01%] w-0 h-0"
                volume={0.2}
                loop={true}
                ref={ref}
            />
        </div>
    );
}
