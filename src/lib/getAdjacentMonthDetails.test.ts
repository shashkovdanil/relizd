import { expect, test } from 'vitest'
import { getAdjacentMonthDetails } from './getAdjacentMonthDetails'

test('getAdjacentMonthDetails test', () => {
  expect(getAdjacentMonthDetails('/tv/september-2023/')).toStrictEqual({
    type: 'tv',
    current: {
      month: 'september',
      year: 2023,
      monthIndex: 8,
      monthRange: ['2023-09-01', '2023-09-30'],
    },
    next: {
      month: 'october',
      year: 2023,
      monthIndex: 9,
      monthRange: ['2023-10-01', '2023-10-31'],
    },
    prev: {
      month: 'august',
      year: 2023,
      monthIndex: 7,
      monthRange: ['2023-08-01', '2023-08-31'],
    },
  })
  expect(getAdjacentMonthDetails('/games/december-2023/')).toStrictEqual({
    type: 'games',
    current: {
      month: 'december',
      year: 2023,
      monthIndex: 11,
      monthRange: ['2023-12-01', '2023-12-31'],
    },
    next: {
      month: 'january',
      year: 2024,
      monthIndex: 0,
      monthRange: ['2024-01-01', '2024-01-31'],
    },
    prev: {
      month: 'november',
      year: 2023,
      monthIndex: 10,
      monthRange: ['2023-11-01', '2023-11-30'],
    },
  })
  expect(getAdjacentMonthDetails('/movies/january-2025/')).toStrictEqual({
    type: 'movies',
    current: {
      month: 'january',
      year: 2025,
      monthIndex: 0,
      monthRange: ['2025-01-01', '2025-01-31'],
    },
    next: {
      month: 'february',
      year: 2025,
      monthIndex: 1,
      monthRange: ['2025-02-01', '2025-02-28'],
    },
    prev: {
      month: 'december',
      year: 2024,
      monthIndex: 11,
      monthRange: ['2024-12-01', '2024-12-31'],
    },
  })
  expect(() => getAdjacentMonthDetails('asdasd')).toThrowError(/^Invalid pathname: asdasd$/)
})