import { StateAuth } from "./type";
/****************************************/
/*               AUTH - GETTERS         */
/****************************************/
export const getUser = (state: StateAuth) => {
  console.log("GETTER de prueba");
  return { ...state.user };
};
