/**
 *
 *@author ShadyCheer
 *
 *@email huangfeifan@wps.cn
 *
 */
import { Ref, ref, watchEffect } from 'vue'
import { IOptions, ListResponse, RequestService } from './types'
import { debounce } from '@/utils'

export function useRequest<
  R extends ListResponse,
  P extends any[] = any,
  U = any,
  UU extends U = any
>(service: RequestService<R, P>, options?: IOptions<R, U>) {
  const loading = ref(false)
  const data = ref<R>()
  const { onSuccess, onError, manual } = options!
  const run = async (...args: P) => {
    try {
      loading.value = true
      data.value = await service(...args)
      if (onSuccess) onSuccess(data.value)
    } catch (e) {
      if (onError) onError(e as Error)
    } finally {
      loading.value = false
    }
  }
  if (!manual) (run as any)()
  const latestData = ref(data.value) as Ref<R | undefined>
  watchEffect(() => {
    if (data.value !== undefined) {
      latestData.value = data.value
    }
  })
  return {
    data: latestData,
    loading,
    run: debounce(run, 300)
  }
}
