import { API_LIST } from './constant'
import { request } from '../interceptor'

export const homeServices = {
  getRecommendList: async () => {
    return request.post(API_LIST.recommend, {})
  }
}
