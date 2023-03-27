import { setDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Cookies from "js-cookie";
import generateUID from "../utilities/GenerateUID";

export const getData = async () => {
    try {
        const uid = Cookies.get("uid");
        if (uid) {
            const docSnap = await getDoc(doc(db, "User_info", uid));
            return docSnap.data();
        } else {
            generateUID();
        }
    } catch (e) {
        console.error("Error getting document: ", e);
    }
};

export const addData = async (payload: any) => {
    try {
        const uid = Cookies.get("uid");
        if (uid) {
            await setDoc(doc(db, "User_info", uid), {
                ...payload,
                created_at: new Date(),
            });
        } else {
            generateUID();
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};

export const updateData = async (payload: any) => {
    try {
        const uid = Cookies.get("uid");
        if (uid) {
            await updateDoc(doc(db, "User_info", uid), payload);
        } else {
            generateUID();
        }
    } catch (e) {
        console.error("Error adding document: ", e);
    }
};
