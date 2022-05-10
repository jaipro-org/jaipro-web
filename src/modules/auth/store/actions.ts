/****************************************/
/*               AUTH - ACTIONS         */
/****************************************/
export const actionPrueba = async ({ commit }: any) => {
  console.log("ACTION de prueba");
  const user = {};
  commit("setUser", user);
};
