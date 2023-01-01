import React from "react";

const zoom = 2;

const Zoom = () => {
    const [position, setPosition] = React.useState<any>({
        x: 0,
        y: 0,
    });
    const ref = React.useRef<any>();
    const bgRef = React.useRef<any>();
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
            className={`relative h-full w-full bg-yellow-100 aspect-video z-20 rounded-xl
                bg-[url('../public/assets/bg_carousel.jpg')] bg-no-repeat bg-cover`}
        >
            <div
                ref={ref}
                onTouchMove={(e) => handleMouseMove(e)}
                onMouseMove={(e) => handleMouseMove(e)}
                className="w-[20%] aspect-square absolute border-2 border-black shadow-md rounded-full
                    bg-[url('../public/assets/bg_carousel.jpg')] bg-no-repeat bg-cover cursor-move bg-yellow-100"
                style={{
                    top: position.y - ref?.current?.offsetHeight / 2 + "px",
                    left: position.x - ref?.current?.offsetWidth / 2 + "px",
                    backgroundPosition:
                        "-" +
                        (position.x * zoom - ref?.current?.offsetWidth / 2) +
                        "px -" +
                        (position.y * zoom - ref?.current?.offsetHeight / 2) +
                        "px",
                    backgroundSize:
                        bgRef?.current?.offsetWidth * zoom +
                        "px " +
                        bgRef?.current?.offsetHeight * zoom +
                        "px",
                }}
            />
        </div>
    );
};

export default Zoom;
