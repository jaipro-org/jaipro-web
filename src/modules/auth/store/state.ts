import { IStateAuth } from "./type"

export default (): IStateAuth => ({
  status: "authenticating", //authenticated , no-authenticated
  user: {
    email: "",
  },
  security: {
    token: "",
    tokenType: "",
    refreshToken: "",
  },
})
