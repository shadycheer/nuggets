export function debounce<T, P extends unknown[]>(
  service: T,
  delay: number = 100
) {
  let timer: ReturnType<typeof setTimeout>
  return (...args: P) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      typeof service === 'function' && service.apply(null, ...args)
      clearTimeout(timer)
    }, delay)
  }
}
