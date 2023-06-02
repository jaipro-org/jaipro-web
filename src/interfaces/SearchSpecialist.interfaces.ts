export interface typeFilter {
    professions: Array<{
        createdBy: string;
        creationDate: string;
        modifiedBy: null;
        modifiedDate: null;
        id: number;
        name: string;
    }>;
    specialities: Array<{
        id: number;
        name: string;
        professionId: number;
    }>;
    districts: Array<{
        createdBy: string;
        creationDate: string;
        modifiedBy: null;
        modifiedDate: null;
        id: number;
        name: string;
        zone: number;
        numericCode: string;
        countryId: string;
    }>;
}
export interface dataForSearch {
    professionID: number[],
    specialitiesID: number[],
    districtsID: number[],
}

export interface optionProfession {
    value: number,
    label: string
}