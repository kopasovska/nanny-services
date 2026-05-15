"use client";

import { Nanny } from "@/app/types/nanny";
import { replaceBg } from "@/lib/utils";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NannyCardProps {
    nanny: Nanny;
}

const NannyCard = ({ nanny }: NannyCardProps) => {
    // const [avatarSrc, setAvatarSrc] = useState<string>(nanny.avatar_url);

    // useEffect(() => {
    //     const fetchAvatar = async () => {
    //         try {
    //             const result = await replaceBg(nanny.avatar_url);
    //             setAvatarSrc(result);
    //         } catch (error) {
    //             if (axios.isAxiosError(error)) {
    //                 console.error("API error:", error.response?.data);
    //             } else {
    //                 console.error("Unknown error:", error);
    //             }
    //         }
    //     };

    //     fetchAvatar();
    // }, [nanny.avatar_url]);

    return (
        <li>
            <div className="flex">
                <div className="relative border-2 border-border rounded-[30px] p-3 w-30 h-30">
                    <div className="absolute top-2.25 right-3.5 w-3.5 h-3.5 p-0.5 rounded-full bg-background flex justify-center items-center">
                        <div className="w-2.25 h-2.25 rounded-full bg-green-500" />
                    </div>
                    <Image
                        src={nanny.avatar_url}
                        alt="Nanie&0146s photo"
                        height={120}
                        width={120}
                        className="rounded-[15px]"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-body-sm-bold text-foreground-muted">
                        Nanny
                    </p>
                    <h2 className="text-title text-[24px] text-foreground">
                        {nanny.name}
                    </h2>
                </div>
            </div>
            <ul>
                <li>{nanny.location}</li>
                <li>Rating: {nanny.rating}</li>
                <li>Price / 1hour: {nanny.price_per_hour}</li>
            </ul>
            <button>Fav</button>
            <ul>
                <li>Age: {nanny.birthday}</li>
                <li>Expirience: {nanny.experience}</li>
                <li>Kids Age: {nanny.kids_age}</li>
                <li>Characters: {nanny.characters}</li>
                <li>Education: {nanny.education}</li>
            </ul>
            <p>{nanny.about}</p>
            Read more
        </li>
    );
};

export default NannyCard;
