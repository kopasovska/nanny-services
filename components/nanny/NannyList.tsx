"use client";

import { Nanny } from "@/app/types/nanny";
import { fetchNannies } from "@/lib/api";
import { useEffect, useState } from "react";
import NannyCard from "./NannyCard";

const NannyList = () => {
    const [nannies, setNannies] = useState<Nanny[]>([]);

    useEffect(() => {
        const unsubscribe = fetchNannies((data) => setNannies(data));
        return unsubscribe;
    }, [nannies]);

    return (
        <ul>
            {nannies.map((nanny, index) => (
                <NannyCard key={index} nanny={nanny} />
            ))}
        </ul>
    );
};

export default NannyList;
