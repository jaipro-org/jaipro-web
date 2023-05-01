export interface IStateAuth {
  status: string
  user: IUser
  security: ISecurity
}

export interface IUser {
  email: string
}
export interface ISecurity {
  id: string,
  email: string
  profileName: string
  token: string
  tokenType: string
  refreshToken: string
}
