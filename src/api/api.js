import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333',
})

api.interceptors.request.use((config) => {
    const token = JSON.parse(localStorage.getItem('token'))
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
        localStorage.removeItem('token')
        window.location.href = '/'
      }
      return Promise.reject(error)
    }
)

export default api;