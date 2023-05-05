import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig, AxiosHeaders, AxiosResponse } from "axios"
import { useLoginStore } from "@/store"

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
        const loginStore = useLoginStore()
        const security = loginStore.$state.security
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
    );
    AxiosClient.axiosIns.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      async (error: AxiosError) => {
        if (error.response && error.response.status === 401) {
          const loginStore = useLoginStore();
          await loginStore.updateStore();
          location.reload()
        }
        return Promise.reject(error);
      }
    );
  }
}
