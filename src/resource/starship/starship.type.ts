interface Starship {

    id: number;
    codeName: string;
    rud: boolean;
    numberOfStaticFires: number;
    testDate: Date;
    hop: string;
    scraped: boolean;
    monument: boolean;
    orbit: string;
}

export const starships: Starship[] = [];