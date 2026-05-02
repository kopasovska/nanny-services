import HeroSection from "@/components/home/HeroSection";
import { db } from "@/lib/firebase";
import { onValue, ref } from "firebase/database";

export default async function Home() {
    // onValue(ref(db, "nannies"), (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data);
    // });
    return <HeroSection />;
}
