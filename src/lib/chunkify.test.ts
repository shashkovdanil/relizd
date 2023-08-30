import { expect, test } from 'vitest'
import { chunkify } from './chunkify'

test('chunkify test', () => {
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)).toStrictEqual([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, undefined, undefined, undefined],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toStrictEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, undefined],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)).toStrictEqual([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, undefined, undefined, undefined],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, undefined, undefined, undefined, undefined, undefined],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7, 8],
    [9, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
  ])
  expect(chunkify([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7, undefined, undefined],
  ])
})
