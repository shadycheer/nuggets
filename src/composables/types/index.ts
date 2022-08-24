export interface BaseOptions<R> {
  cache?: {
    cacheKey: string | number
    cacheForceRefresh?: boolean
  }
  manual?: boolean
  onSuccess?: (data: R) => any
  onError?: (e: Error) => any
}

export interface IOptions<R, U> {
  cache?: {
    cacheKey: string | number
    cacheForceRefresh?: boolean
  }
  manual?: boolean
  onSuccess?: (data: R) => any
  onError?: (e: Error) => any
}

export interface IListOptions<P> {
  params: P
  onSuccess?: () => void
}

export type RequestService<R, P extends unknown[] = any> = (
  ...args: P
) => Promise<R>

export type RequestListService<R> = (...args: any[]) => Promise<R>

export interface ListResponse {
  err_no: number
  err_msg: string
  data: DataRes[]
  cursor: string
  count: number
  has_more: boolean
}

export interface UserInfo {
  user_id: string
  user_name: string
  company: string
  job_title: string
  avatar_large: string
  level: number
  description: string
  followee_count: number
  follower_count: number
  post_article_count: number
  digg_article_count: number
  got_digg_count: number
  got_view_count: number
  post_shortmsg_count: number
  digg_shortmsg_count: number
  isfollowed: boolean
  favorable_author: number
  power: number
  study_point: number
  university: any
  major: any
  student_status: number
  select_event_count: number
  select_online_course_count: number
  identity: number
  is_select_annual: boolean
  select_annual_rank: number
  annual_list_type: number
  extraMap: any
  is_logout: number
  annual_info: any[]
  account_amount: number
  user_growth_info: any
  is_vip: boolean
}

export interface ItemInfo {
  id: number
  advert_id: string
  user_id: string
  item_id: string
  item_type: number
  platform: number
  layout: number
  position: number
  advert_type: number
  station_type: number
  author_name: string
  author_id: number
  title: string
  brief: string
  url: string
  picture: string
  avatar: string
  start_time: string
  end_time: string
  ctime: string
  mtime: string
  sale_count: number
  sale_price: number
  discount_rate: number
  digg_count: number
  comment_count: number
  topic: string
  topic_id: string
  status: number
  item_user_info: any
}

export interface DataRes {
  item_type: number
  item_info: ItemInfo
}
