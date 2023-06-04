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
export interface paramsSearchs {
    professionID: number[],
    specialitiesID: number[],
    districtsID: number[],
}

export interface option {
    value: number,
    label: string,
}

export interface dataFromSearchs {
    specialistId: string,
    fullName: string,
    photo: any,
    assessment: any,
    about: string,
    professions: string,
};