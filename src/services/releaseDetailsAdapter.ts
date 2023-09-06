import type { ReleaseType, ReleaseDetails } from '~/domain/release'
import type { GameDetailsResponse } from '~/domain/game'
import type { MovieDetailsResponse } from '~/domain/movie'
import type { TVDetailResponse } from '~/domain/tv'
import format from 'date-fns/format'

type Params =
  | {
      type: Extract<ReleaseType, 'games'>
      response: GameDetailsResponse
    }
  | {
      type: Extract<ReleaseType, 'movies'>
      response: MovieDetailsResponse
    }
  | {
      type: Extract<ReleaseType, 'tv'>
      response: TVDetailResponse
    }

export function releaseDetailsAdapter(params: Params): ReleaseDetails {
  if (params.type === 'games') {
    return {
      type: 'games',
      id: params.response.id,
      title: params.response.name,
      description: params.response.description_raw,
      backdrop: params.response.background_image,
      poster: params.response.background_image,
      genres: params.response.genres.map(genre => genre.name),
      releasedAt: format(new Date(params.response.released), 'MMMM dd, yyyy'),
      rating: params.response.metacritic,
      ratingCount: params.response.reviews_count,
    }
  }

  if (params.type === 'movies') {
    return {
      type: 'movies',
      id: params.response.id,
      title: params.response.title,
      description: params.response.overview,
      backdrop: `https://image.tmdb.org/t/p/original${params.response.backdrop_path}`,
      poster: `https://image.tmdb.org/t/p/original${params.response.poster_path}`,
      imdbUrl: `https://www.imdb.com/title/${params.response.imdb_id}`,
      genres: params.response.genres.map(genre => genre.name),
      releasedAt: format(
        new Date(params.response.release_date),
        'MMMM dd, yyyy'
      ),
      rating: params.response.vote_average,
      ratingCount: params.response.vote_count,
    }
  }

  return {
    type: 'tv',
    id: params.response.id,
    title: params.response.name,
    description: params.response.overview,
    backdrop: `https://image.tmdb.org/t/p/original${params.response.backdrop_path}`,
    poster: `https://image.tmdb.org/t/p/original${params.response.poster_path}`,
    genres: params.response.genres.map(genre => genre.name),
    releasedAt: format(new Date(params.response.first_air_date), 'MMMM dd, yyyy'),
    rating: params.response.vote_average ? +params.response.vote_average : 0,
    ratingCount: params.response.vote_count,
  }
}
