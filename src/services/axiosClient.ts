import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosHeaders } from "axios"
// import store from "../store"
import { useLoginStore } from "@/store"



// SERVICES

export default class AxiosClient {
  public static axiosIns: AxiosInstance
  constructor(private readonly baseURL: string) { }

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
      (config: InternalAxiosRequestConfig) => {
        const store = useLoginStore()
        const security = store.$state.security
        if (security && security.token != "") {
          config.headers = new AxiosHeaders({
            Authorization: `${security.tokenType} ${security.token}`,
          });
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
