import { useRequest } from './useRequest'
import { ref } from 'vue'
import {
  IListOptions,
  IRequestListParams,
  ListResponse,
  RequestListService
} from './types'

export function useLoadList<
  R extends ListResponse,
  P extends IRequestListParams
>(service: RequestListService<R>, options: IListOptions<P>) {
  const finished = ref(false)
  const refreshing = ref(false)
  const data = ref<R[]>([])
  const total = ref(0)
  const { params, onSuccess } = options
  const { run, loading } = useRequest(() => service(params), {
    manual: true,
    onSuccess: (res) => {
      if (refreshing.value) {
        refreshing.value = false
        data.value = []
      }
      data.value.push(...(res.data as any[]))
      total.value = res.count
      if (!res.has_more) finished.value = true
      params.offset += params.limit
      if (onSuccess) onSuccess()
    }
  })
  const onRefresh = () => {
    params.offset = 0
    finished.value = false
    refreshing.value = true
    fetchData()
  }
  const fetchData = (requestParams: P = params, forceRefresh = false) => {
    if (forceRefresh) data.value = []
    run(requestParams)
  }
  return {
    data,
    loading,
    fetchData,
    finished,
    refreshing,
    onRefresh,
    total
  }
}
