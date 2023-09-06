import type { RequestHandler } from '@builder.io/qwik-city'
import type { ReleaseType } from '~/domain/release'
import { releaseDetailsAdapter } from '~/services/releaseDetailsAdapter'
import { request } from '~/lib/request'
import type { GameDetailsResponse } from '~/domain/game'
import type { MovieDetailsResponse } from '~/domain/movie'
import type { TVDetailResponse } from '~/domain/tv'

export const onGet: RequestHandler = async ({ json, url }) => {
  const type = url.searchParams.get('type') as ReleaseType
  const id = url.searchParams.get('id') as string

  if (type === 'games') {
    const URL = `https://api.rawg.io/api/games/${id}?key=${process.env['RAWG_API_KEY']}`

    const details = await request<GameDetailsResponse>(URL)

    json(200, releaseDetailsAdapter({ type: 'games', response: details }))
    return
  }

  if (type === 'movies') {
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env['TMDB_API_KEY']}&language=en-US`

    const details = await request<MovieDetailsResponse>(URL)

    json(200, releaseDetailsAdapter({ type: 'movies', response: details }))
    return
  }

  const URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env['TMDB_API_KEY']}&language=en-US`

  const details = await request<TVDetailResponse>(URL)

  json(200, releaseDetailsAdapter({ type: 'tv', response: details }))
}
