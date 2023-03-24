import React from "react";
import { useNavigate } from "react-router-dom";
import Conclusion from "../components/results/Conclusion";
import { GlobalContext } from "../states";

const Result = () => {
    const { global_state } = React.useContext(GlobalContext);
    const { scene } = global_state;
    const navigate = useNavigate();
    const [eligible, setEligible] = React.useState<boolean>(false);
    React.useEffect(() => {
        if (scene === 151) {
            setEligible(true);
        } else {
            navigate("/");
        }
    }, []);
    return (
        <div className="bg-white w-full h-full font-mitr">
            {eligible ? <Conclusion /> : null}
        </div>
    );
};

export default Result;
