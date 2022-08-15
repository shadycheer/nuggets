import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const _handleError = (error: { message: string }) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn('>>>>> ERROR >>>>>')
    console.trace(error.message)
  }
}

const _createService = () => {
  const axiosService = axios.create()
  // request interceptors
  axiosService.interceptors.request.use(
    (config) => config,
    (error) => {
      return Promise.reject(error)
    }
  )
  // response interceptors
  axiosService.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      console.log(error.response)
      const status = error.response.status
      switch (status) {
        case 400:
          error.message = '请求错误'
          break
        case 401:
          error.message = '未授权，请登录'
          // await getAuthentication()
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器内部错误'
          break
        case 501:
          error.message = '服务未实现'
          break
        case 502:
          error.message = '网关错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网关超时'
          break
        case 505:
          error.message = 'HTTP版本不受支持'
          break
        default:
          break
      }
      _handleError(error)
      throw error
    }
  )
  return axiosService
}

class Request {
  axiosService: AxiosInstance

  constructor(instance: AxiosInstance) {
    this.axiosService = instance
  }

  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosService
        .request(config)
        .then((res) => {
          if (!res.data && res.status === 200) {
            resolve(res as any)
          } else {
            resolve(res.data)
          }
        })
        .catch((e) => {
          reject(e)
          return e
        })
    })
  }

  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(url: string, config: AxiosRequestConfig): Promise<T> {
    config = Object.assign(config, { url })
    return this.request({ ...config, method: 'POST' })
  }

  put<T = any>(config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }

  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export const service = _createService()
export const request = new Request(service)
