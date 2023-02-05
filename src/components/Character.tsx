import Owl from "./characters/Owl";
import Rabbit from "./characters/Rabbit";
import FirstAttractionObjects from "./characters/FirstAttractionObjects";
import Peacock from "./characters/Peacock";
import Giraffe from "./characters/Giraffe";
import KangarooKid from "./characters/KangarooKid";
import KangarooKid1 from "./characters/KangarooKid1";
import KangarooMother from "./characters/KangarooMother";

const Character = ({
    name,
    state,
    className,
}: {
    name: string;
    state: string;
    className: any;
}) => {
    return (
        <>
            {name === "owl" ? (
                <Owl state={state} className={className} />
            ) : name === "rabbit" ? (
                <Rabbit state={state} className={className} />
            ) : name === "a1-objects" ? (
                <FirstAttractionObjects state={state} className={className} />
            ) : name === "peacock" ? (
                <Peacock state={state} className={className} />
            ) : name === "giraffe" ? (
                <Giraffe state={state} className={className} />
            ) : name === "kid_kangaroo" ? (
                <KangarooKid state={state} className={className} />
            ) : name === "kid_kangaroo_1" ? (
                <KangarooKid1 state={state} className={className} />
            ) : name === "mother_kangaroo" ? (
                <KangarooMother state={state} className={className} />
            ) : null}
        </>
    );
};

export default Character;
