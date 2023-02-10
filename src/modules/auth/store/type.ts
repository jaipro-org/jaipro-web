export interface IStateAuth {
  status: string
  user: IUser
  security: ISecurity
}

export interface IUser {
  email: string
}
export interface ISecurity {
  token: string
  tokenType: string
  refreshToken: string
}
