import React from "react";
import useAspectRatio from "../hooks/useAspectRatio";
import useWindowSize from "../hooks/useWindowSize";

const zoom = 2;

const aspectRatioBg = [
    "bg-[url('../public/assets/Background/bg_carousel.webp')]",
    "bg-[url('../public/assets/Background/bg_carousel_i.webp')]",
    "bg-[url('../public/assets/Background/bg_carousel_m.webp')]",
];

const Zoom = () => {
    const [position, setPosition] = React.useState<any>({
        x: 0,
        y: 0,
    });
    const ref = React.useRef<any>();
    const bgRef = React.useRef<any>();
    const aspectRatioIndex = useAspectRatio([1.777, 1.333, 0.5625]);
    const { windowSize } = useWindowSize();
    const handleMouseMove = (e: any) => {
        if (ref.current !== null && bgRef.current !== null) {
            const img = bgRef.current.getBoundingClientRect();
            const w = ref.current.offsetWidth / 2;
            const h = ref.current.offsetHeight / 2;
            const xPos = e.clientX ? e.clientX : e.touches[0].clientX;
            const yPos = e.clientY ? e.clientY : e.touches[0].clientY;
            const newPos = {
                x: xPos - img.left - window.pageXOffset,
                y: yPos - img.top - window.pageYOffset,
            };
            if (newPos.x > bgRef.current.offsetWidth - w / zoom) {
                newPos.x = bgRef.current.offsetWidth - w / zoom;
            }
            if (newPos.x < w / zoom) {
                newPos.x = w / zoom;
            }
            if (newPos.y > bgRef.current.offsetHeight - h / zoom) {
                newPos.y = bgRef.current.offsetHeight - h / zoom;
            }
            if (newPos.y < h / zoom) {
                newPos.y = h / zoom;
            }
            setPosition(newPos);
        }
    };
    React.useEffect(() => {
        window.addEventListener("touchmove", (e: any) => {
            handleMouseMove(e);
        });
    }, []);
    return (
        <div
            ref={bgRef}
            onTouchMove={(e) => handleMouseMove(e)}
            onMouseMove={(e) => handleMouseMove(e)}
            style={{
                aspectRatio: windowSize.width / windowSize.height,
                backgroundSize:
                    windowSize.width + "px " + windowSize.height + "px",
            }}
            className={`relative m-auto bg-yellow-100 z-20
                ${aspectRatioBg[aspectRatioIndex]} bg-no-repeat bg-contain bg-center shadow-md`}
        >
            <div
                ref={ref}
                onTouchMove={(e) => handleMouseMove(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                className={`absolute w-[10rem] h-[10rem] m-auto aspect-square border-2 border-black shadow-md rounded-full
                ${aspectRatioBg[aspectRatioIndex]} bg-no-repeat bg-contain bg-center cursor-move bg-yellow-100`}
                style={{
                    aspectRatio: windowSize.width / windowSize.height,
                    top: position.y - ref?.current?.offsetHeight / 2 + "px",
                    left: position.x - ref?.current?.offsetWidth / 2 + "px",
                    backgroundPosition:
                        "-" +
                        (position.x * zoom - ref?.current?.offsetWidth / 2) +
                        "px -" +
                        (position.y * zoom - ref?.current?.offsetHeight / 2) +
                        "px",
                    backgroundSize:
                        windowSize.width * zoom +
                        "px " +
                        windowSize.height * zoom +
                        "px",
                }}
            />
        </div>
    );
};

export default Zoom;
