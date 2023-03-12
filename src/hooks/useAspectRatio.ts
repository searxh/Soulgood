/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import useWindowSize from "./useWindowSize";

const useAspectRatio = (supportedAspectRatio: Array<number>) => {
    const { windowSize } = useWindowSize();
    const [selectedRatioIndex, setSelectedRatioIndex] =
        React.useState<number>(-1);
    const calculateDifference = () => {
        let minDiff = 1e9;
        supportedAspectRatio.forEach((item, index) => {
            const temp = Math.abs(windowSize.width / windowSize.height - item);
            if (temp < minDiff) {
                setSelectedRatioIndex(index);
                minDiff = temp;
            }
        });
    };
    React.useEffect(() => {
        calculateDifference();
    }, [windowSize]);
    return selectedRatioIndex;
};

export default useAspectRatio;
