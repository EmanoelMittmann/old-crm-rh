import axios from "axios"
import { LocalStorageKeys } from "../settings/LocalStorageKeys"

const api = axios.create({
    baseURL: 'https://e630-179-109-199-41.sa.ngrok.io',
})

api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem(LocalStorageKeys.TOKEN))
    const auth = token ? `Bearer ${token}` : '';
    config.headers.common['Authorization'] = auth
    return config
}, (error) => console.error(error)
    //@TODO - Fazer redirecionamento correto
)

api.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        localStorage.removeItem(LocalStorageKeys.TOKEN)
        localStorage.removeItem(LocalStorageKeys.USER)
        window.location.href = '/'
      }
      return Promise.reject(error)
    }
)

export default api