import { Nanny } from "@/app/types/nanny";
import Image from "next/image";

interface NannyCardProps {
    nanny: Nanny;
}

const NannyCard = ({ nanny }: NannyCardProps) => {
    return (
        <li>
            <div>
                <Image
                    src={nanny.avatar_url}
                    alt="Nanie&0146s photo"
                    height="120"
                    width="120"
                />
            </div>
        </li>
    );
};

export default NannyCard;
