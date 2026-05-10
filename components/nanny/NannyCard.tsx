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
    const [avatarSrc, setAvatarSrc] = useState<string>(nanny.avatar_url);

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const result = await replaceBg(nanny.avatar_url);
                setAvatarSrc(result);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error("API error:", error.response?.data);
                } else {
                    console.error("Unknown error:", error);
                }
            }
        };

        fetchAvatar();
    }, [nanny.avatar_url]);

    return (
        <li>
            <div>
                <Image
                    src={avatarSrc}
                    alt="Nanie&0146s photo"
                    height={120}
                    width={120}
                />
            </div>
        </li>
    );
};

export default NannyCard;
