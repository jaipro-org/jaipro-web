import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios"
import store from "../store"
// SERVICES

export default class AxiosClient {
  public static axiosIns: AxiosInstance
  constructor(private readonly baseURL: string) {}

  createClient() {
    const client = axios.create({
      baseURL: this.baseURL,
    })

    client.defaults.headers.common["Content-Type"] = "application/json"

    AxiosClient.axiosIns = client
    this.initializeRequestInterceptor()
  }

  private initializeRequestInterceptor = () => {
    AxiosClient.axiosIns.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        const security = store.getters["authModule/getSecurity"]

        if (security && security.token != "") {
          config.headers = {
            Authorization: `${security.tokenType} ${security.token}`,
          }
        }
        return config
      },
      (error: AxiosError) => {
        console.error(`${JSON.stringify(error)}`)
        return Promise.reject(error)
      }
    )
  }
}
