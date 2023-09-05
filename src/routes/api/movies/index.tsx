import { type RequestHandler } from '@builder.io/qwik-city'
import { releasesAdapter } from '~/services/releaseAdapter'
import type { MoviesResponse } from '~/domain/movie'
import { isFutureDate } from '~/lib/isFutureDate'

export const onGet: RequestHandler = async ({ json, url }) => {
  try {
    const from = url.searchParams.get('from') as string
    const to = url.searchParams.get('to') as string

    const URL = isFutureDate(to)
      ? `https://api.themoviedb.org/3/discover/movie?api_key=${process.env['TMDB_API_KEY']}&primary_release_date.gte=${from}&primary_release_date.lte=${to}`
      : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env['TMDB_API_KEY']}&primary_release_date.gte=${from}&primary_release_date.lte=${to}&vote_average.gte=5&vote_count.gte=100`

    const response = await fetch(URL)
    const data: MoviesResponse = await response.json()

    json(200, releasesAdapter({ type: 'movies', response: data }))
  } catch (error) {
    console.error(error)
  }
}
