import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

const generateUID = () => {
    const userId = Cookies.get("uid");
    if (!userId) {
        Cookies.set("uid", uuidv4());
    }
};

export default generateUID;
