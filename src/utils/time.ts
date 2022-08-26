/**
 *
 * @author ShadyCheer
 *
 * @email huangfeifan@wps.cn
 *
 * @description
 *
 */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)
dayjs.updateLocale('zh-cn', {
	relativeTime: {
		s: '刚刚',
		m: '1分钟前',
		mm: '%d分钟前',
		h: '1小时前',
		hh: '%d小时前',
		d: '1天前',
		dd: '%d天前'
	},
})

const formatTime = (num: number) => {
	const get = dayjs(new Date(num))
	const now = dayjs(new Date())
	const date = get.format('YYYY-MM-DDTHH:mm:ss')
	const more7Days = get.add(1, 'week') <= now
	const more1Year = get.add(1, 'year') <= now
	if (!more7Days && !more1Year) {
		return dayjs(date).toNow(true)
	} else if (more7Days && !more1Year) {
		return dayjs(new Date(num)).format('MM-DD')
	} else {
		return dayjs(new Date(num)).format('YYYY-MM-DD')
	}
}

export default formatTime
