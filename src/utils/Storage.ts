import { EncryptStorage } from "encrypt-storage"

export const encryptAuthStorage = new EncryptStorage(
  process.env.VUE_APP_ENCRYPT_AUTH_SECRET_KEY,
  { prefix: "@AUTH", storageType: "localStorage" }
)
