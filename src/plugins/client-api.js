import Axios from 'axios'
import ApiError from '@/models/api-error'

const onResponse = (response) => {
  return response
}

// eslint-disable-next-line handle-callback-err
const onErrorResponse = (error) => {
  throw new ApiError()
}

const ClientApiPrototype = function (url) {
  const axiosInstance = Axios.create({
    baseURL: url
  })
  axiosInstance.interceptors.response.use(onResponse, onErrorResponse)
  return axiosInstance
}

const ClientApi = ClientApiPrototype(process.env.VUE_APP_API_URL)

export default ClientApi
