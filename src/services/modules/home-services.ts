import { API_LIST } from './constant'
import { request } from '../interceptor'
import {RequestList} from '@/services/modules/types'
import {ListResponse} from '@/composables/types'

export const homeServices = {
  getRecommendList: async (params?: RequestList): Promise<ListResponse> => {
    return request.post(API_LIST.recommend, {
      data: {
        ...params
      }
    })
  }
}
