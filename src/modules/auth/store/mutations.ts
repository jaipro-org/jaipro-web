import { StateAuth } from "./type";
/****************************************/
/*             AUTH - MUTATIONS         */
/****************************************/
export const setUser = (state: StateAuth, user: any) => {
  console.log("MUTATION de prueba");
  state.user = user;
};
