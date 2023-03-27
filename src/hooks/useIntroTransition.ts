import React from "react";
import { introPlayInterval } from "../default";

const useIntroTransition = () => {
    const [transition, setTransition] = React.useState<boolean>(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setTransition(true);
        }, 100);
        const timeout1 = setTimeout(() => {
            setTransition(false);
        }, introPlayInterval);
        return () => {
            clearTimeout(timeout);
            clearTimeout(timeout1);
        };
    }, []);
    return transition;
};

export default useIntroTransition;
