import Axios from 'axios'

const onResponse = (response) => {
  return response
}

const onErrorResponse = (error) => {
  console.warn('Do something with the error, send it to SNS for example')
  return Promise.reject(error)
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
