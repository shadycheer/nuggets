import {useRequest} from './useRequest'
import {ref} from 'vue'
import {
	IListOptions,
	ListResponse,
	RequestListService,
} from './types'
import {RequestList} from '@/services/modules/types'

export function useLoadList<R extends ListResponse,
	P extends RequestList>(service: RequestListService<R>, options: IListOptions<P>) {
	const finished = ref(false)
	const refreshing = ref(false)
	const data = ref<R[]>([])
	const total = ref(0)
	const {params, onSuccess} = options
	const {run, loading} = useRequest(() => service(params), {
		manual: true,
		onSuccess: (res) => {
			if (refreshing.value) {
				refreshing.value = false
				data.value = []
			}
			data.value.push(...(res.data as any[]))
			total.value = res.count
			if (!res.has_more) finished.value = true
			params.cursor = (parseInt(params.cursor) + 1).toString()
			if (onSuccess) onSuccess()
		},
	})
	const onRefresh = () => {
		params.cursor = '1'
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
		total,
	}
}
