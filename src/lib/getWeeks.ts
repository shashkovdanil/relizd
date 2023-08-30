import getDaysInMonth from 'date-fns/getDaysInMonth'
import startOfMonth from 'date-fns/startOfMonth'
import format from 'date-fns/format'
import { range } from './range'
import { chunkify } from './chunkify'
import { DAYS_OF_WEEK } from './const'

const currentYear = new Date().getFullYear()
const currentMonth = new Date().getMonth()

export function getWeeks(year = currentYear, month = currentMonth) {
  const date = new Date(year, month, 1)
  const daysArray = range(1, getDaysInMonth(date)).map(
    day => format(new Date(year, month, day), 'yyyy-MM-dd')
  )
  const firstDay = format(startOfMonth(date), 'EEEEEE')
  const firstDayIndex = DAYS_OF_WEEK.findIndex(weekDay => weekDay === firstDay)
  const fillers: undefined[] = Array.from({ length: firstDayIndex })

  return chunkify(
    firstDayIndex === 0 ? daysArray : [...fillers, ...daysArray],
    7
  ).flat()
}
