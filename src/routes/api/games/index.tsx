import type { RequestHandler } from '@builder.io/qwik-city'
import { releasesAdapter } from '~/services/releaseAdapter'
import type { GamesResponse } from '~/domain/game'
import { isFutureDate } from '~/lib/isFutureDate'

export const onGet: RequestHandler = async ({ json, url }) => {
  const from = url.searchParams.get('from') as string
  const to = url.searchParams.get('to') as string

  const URL = isFutureDate(to)
    ? `https://api.rawg.io/api/games?key=${process.env['RAWG_API_KEY']}&dates=${from},${to}&page_size=20`
    : `https://api.rawg.io/api/games?key=${process.env['RAWG_API_KEY']}&dates=${from},${to}&page_size=50&metacritic=80`

  const response = await fetch(URL)
  const data: GamesResponse = await response.json()

  json(200, releasesAdapter({ type: 'games', response: data }))
}
