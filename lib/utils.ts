import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface ReplaceBgResponse {
    data: {
        result_b64: string;
    };
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function replaceBg(
    imageURL: string,
    bgColor: string = "e0e0e0",
): Promise<string> {
    const response = await axios.post<ReplaceBgResponse>(
        "https://api.remove.bg/v1.0/removebg",
        {
            image_url: imageURL,
            size: "auto",
            bg_color: bgColor,
        },
        {
            headers: {
                "X-Api-Key": process.env.NEXT_PUBLIC_REMOVEBG_API_KEY,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        },
    );
    const base64 = response.data.data.result_b64;
    return `data:image/png;base64,${base64}`;
}
