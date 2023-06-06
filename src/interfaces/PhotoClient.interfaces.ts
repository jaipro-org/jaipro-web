export interface PhotoClient {
    id: string,
    photo: File | null,
    extension?: string
}