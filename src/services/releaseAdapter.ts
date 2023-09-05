import type { Release, ReleaseType } from '~/domain/release'
import type { GamesResponse } from '~/domain/game'
import type { MoviesResponse } from '~/domain/movie'
import type { TVsResponse } from '~/domain/tv'
import { isFutureDate } from '~/lib/isFutureDate'

type Params =
  | {
      type: Extract<ReleaseType, 'games'>
      response: GamesResponse
    }
  | {
      type: Extract<ReleaseType, 'movies'>
      response: MoviesResponse
    }
  | {
      type: Extract<ReleaseType, 'tv'>
      response: TVsResponse
    }

export function releasesAdapter(params: Params) {
  if (params.type === 'games') {
    return params.response.results.map<Release>(game => ({
      id: game.id,
      title: game.name,
      releasedAt: game.released,
      cover: game.background_image,
      rating: game.metacritic > 0 ? `${game.metacritic.toFixed(1)}` : null,
      isUpcoming: isFutureDate(game.released),
    }))
  }

  if (params.type === 'movies') {
    return params.response.results
      .filter(movie => movie.vote_average === 0 || movie.vote_average >= 5)
      .map<Release>(movie => ({
        id: movie.id,
        title: movie.title,
        releasedAt: movie.release_date,
        cover: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating:
          movie.vote_average > 0
            ? `TMDB ${movie.vote_average.toFixed(1)}`
            : null,
        isUpcoming: isFutureDate(movie.release_date),
      }))
  }

  return params.response.results
    .filter(tv => tv.vote_average === 0 || tv.vote_average >= 5)
    .map<Release>(tv => ({
      id: tv.id,
      title: tv.name,
      releasedAt: tv.first_air_date,
      cover: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
      rating: tv.vote_average > 0 ? `TMDB ${tv.vote_average.toFixed(1)}` : null,
      isUpcoming: isFutureDate(tv.first_air_date),
    }))
}
