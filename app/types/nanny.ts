interface Review {
    comment: string;
    rating: number;
    reviewer: string;
}

export interface Nanny {
    about: string;
    avatar_url: string;
    birthday: string; // lub Date jeśli parsуjesz
    characters: string[];
    education: string;
    experience: string;
    kids_age: string;
    location: string;
    name: string;
    price_per_hour: number;
    rating: number;
    reviews: Review[];
}
