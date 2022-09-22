import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATE_FORMAT_STR = 'YYYY-MM-DD HH:mm:ss'
export function formatUtcString(
  UtcString: string,
  formatStr = DATE_FORMAT_STR
) {
  return dayjs.utc(UtcString).utcOffset(8).format(formatStr)
}
