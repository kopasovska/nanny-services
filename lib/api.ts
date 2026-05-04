import { Nanny } from "@/app/types/nanny";
import { db } from "@/lib/firebase";
import { DataSnapshot, onValue, ref, Unsubscribe } from "firebase/database";

export const fetchNannies = (
    callback: (nannies: Nanny[]) => void,
): Unsubscribe => {
    const unsubscribe = onValue(
        ref(db, "nannies"),
        (snapshot: DataSnapshot) => {
            const nannies: Nanny[] = snapshot.val();
            callback(nannies);
        },
    );

    return unsubscribe;
};
