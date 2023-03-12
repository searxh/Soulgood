import React from "react";
import { introPlayInterval } from "../default";

const useIntroTransition = () => {
    const [transition, setTransition] = React.useState<boolean>(false);
    React.useEffect(() => {
        setTimeout(() => {
            setTransition(true);
        }, 100);
        setTimeout(() => {
            setTransition(false);
        }, introPlayInterval);
    }, []);
    return transition;
};

export default useIntroTransition;
