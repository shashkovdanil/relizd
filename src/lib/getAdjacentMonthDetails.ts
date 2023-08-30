import endOfMonth from 'date-fns/endOfMonth'
import format from 'date-fns/format'
import type { ReleaseType } from '~/domain/release'

export const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
] as const
type Months = (typeof months)[number]

const monthsMap = months.reduce<Record<Months, number>>(
  (acc, curr, index) => {
    acc[curr] = index

    return acc
  },
  {} as Record<Months, number>
)

const releaseTypes: ReleaseType[] = ['movies', 'tv', 'games']

type MonthDetails = {
  month: Months
  monthIndex: number
  year: number
  monthRange: [string, string]
}

const defaultPathname = `/movies/${
  months[new Date().getMonth()]
}-${new Date().getFullYear()}`

export function getAdjacentMonthDetails(pathname: string = defaultPathname): {
  type: ReleaseType
  current: MonthDetails
  next: MonthDetails
  prev: MonthDetails
} {
  if (pathname === '/') {
    pathname = defaultPathname
  }

  const [type, date] = pathname.split('/').filter(Boolean)
  const [month, year] = (date || '').split('-').filter(Boolean)

  if (
    !releaseTypes.includes(type as ReleaseType) ||
    !months.includes(month as Months) ||
    Number.isNaN(Number(year))
  ) {
    throw new Error(`Invalid pathname: ${pathname}`)
  }

  const yearNumber = Number(year)
  const monthIndex = monthsMap[month as Months]
  const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1
  const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1
  const nextYear = nextMonthIndex === 0 ? yearNumber + 1 : yearNumber
  const prevYear = prevMonthIndex === 11 ? yearNumber - 1 : yearNumber

  function buildRange(year: number, month: number): [string, string] {
    return [
      format(new Date(year, month, 1), 'yyyy-MM-dd'),
      format(endOfMonth(new Date(year, month, 1)), 'yyyy-MM-dd'),
    ]
  }

  return {
    type: type as ReleaseType,
    current: {
      month: months[monthIndex],
      monthIndex,
      year: yearNumber,
      monthRange: buildRange(yearNumber, monthIndex),
    },
    next: {
      month: months[nextMonthIndex],
      monthIndex: nextMonthIndex,
      year: nextYear,
      monthRange: buildRange(nextYear, nextMonthIndex),
    },
    prev: {
      month: months[prevMonthIndex],
      monthIndex: prevMonthIndex,
      year: prevYear,
      monthRange: buildRange(prevYear, prevMonthIndex),
    },
  }
}
