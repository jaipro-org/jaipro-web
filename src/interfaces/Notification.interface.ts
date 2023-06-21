export interface Notification {
    id: number,
    status: number,
    title: string,
    description: string,
    read: boolean,
    deleted: boolean,
}

export interface NotificationBack {
    createdBy: string,
    creationDate: string,
    modifiedBy: string,
    modifiedDate: string,
    id: string,
    specialistId: string,
    customerId: string,
    title: string,
    message: string,
    icon: string,
    type: number,
    toSpecialist: boolean,
    toCustomer: boolean,
    read: boolean,
    deleted: boolean
}