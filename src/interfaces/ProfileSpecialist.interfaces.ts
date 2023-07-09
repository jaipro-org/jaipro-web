export interface ProfileSpecialist {
  name: string,
  lastName: string,
  about: string,
  direction: string,
  profilePhoto: object,
  phone: string,
  secondPhone: string,
}

export interface ProfileSpecialistPayload {
  name?: string,
  lastName?: string,
  about?: string,
  address?: string,
  phone?: string,
  secondaryPhone?: string | null,
  filePhoto?: string,
  filePhotoExtension?: string,
  flagUpdatePhoto?: boolean
}