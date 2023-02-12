import { ISecurity, IStateAuth } from "./type"
/****************************************/
/*               AUTH - GETTERS         */
/****************************************/
export const getUser = (state: IStateAuth) => {
  return { ...state.user }
}

export const getSecurity = (state: IStateAuth): ISecurity => {
  return { ...state.security }
}
