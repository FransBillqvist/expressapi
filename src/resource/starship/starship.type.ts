export interface Starship {
    id: number;
    codeName: string;
    rud: boolean;
    numberOfStaticFires: number;
    testDate: Date;
    hop: string;
    scraped: boolean;
    monument: boolean;
    orbit: string;
    owner: string;
    location: string;
}

export const starships: Starship[] = [];