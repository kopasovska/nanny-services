import { Nanny } from "@/app/types/nanny";

interface NannyCardProps {
    index: number;
    nanny: Nanny;
}

const NannyCard = ({ index, nanny }: NannyCardProps) => {
    return <li key={index}>{nanny.name}</li>;
};

export default NannyCard;
