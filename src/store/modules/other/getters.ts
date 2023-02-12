import { StateGlobal } from "./type";
/****************************************/
/*               AUTH - GETTERS         */
/****************************************/
export const getScroll = (state: StateGlobal) => {
  return state.scrollY;
};
