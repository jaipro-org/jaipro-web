import { StateGlobal } from "./type";
/****************************************/
/*             AUTH - MUTATIONS         */
/****************************************/
export const setScroll = (state: StateGlobal, scroll: any) => {
  state.scrollY = scroll;
};
