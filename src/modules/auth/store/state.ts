import { IStateAuth } from "./type"
import { encryptAuthStorage } from "../../../utils/Storage"


const authData: string = window.localStorage.getItem("@AUTH:security") || "";

var data = { email: "", profileName: "", token: "", tokenType: "", refreshToken: "" };

if (Boolean(authData)) {
  data = encryptAuthStorage.decryptValue(authData)
}

export default (): IStateAuth => ({
  status: "authenticating", //authenticated , no-authenticated
  user: {
    email: data.email,
  },
  security: {
    email: data.email,
    profileName: data.profileName,
    token: data.token,
    tokenType: data.tokenType,
    refreshToken: data.refreshToken,
  },
})
