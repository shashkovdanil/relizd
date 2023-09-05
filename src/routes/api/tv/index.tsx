import { type RequestHandler } from '@builder.io/qwik-city'
import { releasesAdapter } from '~/services/releaseAdapter'
import type { TVsResponse } from '~/domain/tv'
import { isFutureDate } from '~/lib/isFutureDate'

export const onGet: RequestHandler = async ({ json, url }) => {
  try {
    const from = url.searchParams.get('from') as string
    const to = url.searchParams.get('to') as string

    const URL = isFutureDate(to)
      ? `https://api.themoviedb.org/3/discover/tv?api_key=${process.env['TMDB_API_KEY']}&first_air_date.gte=${from}&first_air_date.lte=${to}`
      : `https://api.themoviedb.org/3/discover/tv?api_key=${process.env['TMDB_API_KEY']}&first_air_date.gte=${from}&first_air_date.lte=${to}&vote_average.gte=5&vote_count.gte=100`

    const response = await fetch(URL)
    const data: TVsResponse = await response.json()

    json(200, releasesAdapter({ type: 'tv', response: data }))
  } catch (error) {
    console.error(error)
  }
}
