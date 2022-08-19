interface Booster {
    id: number;
    codeName: string;
    rud: boolean;
    numberOfStaticFires: number;
    testDate: Date;
    scraped: boolean;
}
export const boosters: Booster[] = [];
