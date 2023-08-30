import { compareAsc, parseISO } from 'date-fns'

export function isFutureDate(input: string) {
  const inputDate = parseISO(input)

  const currentDate = new Date()
  const comparisonResult = compareAsc(inputDate, currentDate)

  return comparisonResult > 0
}
