import React from "react";
import { GlobalContext } from "../states";
import { BranchInfoInterface } from "../types";
import { scenes } from "../lib/scenes/Scenes";

const useStoryController = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const [branchInfo, setBranchInfo] =
        React.useState<BranchInfoInterface | null>(null);
    const [start, setStart] = React.useState<boolean>(true);
    const [next, setNext] = React.useState<any | undefined>();
    const [lockDialogue, setLockDialogue] = React.useState<
        boolean | null | undefined
    >();
    const calculateLockDialogue = () => {
        if (scenes[scene].dialogues.length > 1) {
            setLockDialogue(true);
        } else {
            setLockDialogue(null);
        }
    };
    const calculateNext = () => {
        if (branchInfo === null) {
            console.log("[CALCULATE NEXT]", scenes[scene].next);
            return scenes[scene].next;
        } else {
            const { startBranchIndex, firstBranchLength, endBranchIndex } =
                branchInfo;
            const lastFirstBranchIndex = startBranchIndex + firstBranchLength;
            if (scene === lastFirstBranchIndex || scene === endBranchIndex) {
                setBranchInfo(null);
                console.log(
                    "[CALCULATE NEXT] GO END BRANCH",
                    endBranchIndex + 1
                );
                return endBranchIndex + 1;
            }
            console.log("[CALCULATE NEXT]", scenes[scene].next);
            return scenes[scene].next;
        }
    };
    const printDoneCallback = () => {
        if (lockDialogue !== null) setLockDialogue(false);
    };
    React.useLayoutEffect(() => {
        console.log("----------[SCENE " + scene + "]----------------");
        if (scenes[scene] && scenes[scene].trackChange !== undefined) {
            dispatch({
                type: "set",
                field: "track",
                payload: scenes[scene].trackChange,
            });
        }
        if (scene < scenes.length && Array.isArray(scenes[scene].next)) {
            const a = scenes[scene].next[0] as number;
            const b = scenes[scene].next[1] as number;
            setBranchInfo({
                startBranchIndex: scene,
                endBranchIndex: scene + a + b,
                firstBranchLength: a,
                secondBranchLength: b,
            });
        }
        if (scene < scenes.length) {
            calculateLockDialogue();
            setNext(calculateNext());
        }
        if (scene === 0) setTimeout(() => setStart(false), 100);
    }, [scene]);
    return {
        scene,
        start,
        next,
        lockDialogue,
        printDoneCallback,
    };
};

export default useStoryController;
