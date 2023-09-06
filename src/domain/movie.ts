import type { Genre } from './genre'

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: Genre['id'][]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string // 'yyyy-mm-dd'
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MoviesResponse = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type MovieDetailsResponse = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: null | string
    backdrop_path: null | string
  }
  budget: number
  genres: Array<{
    id: number
    name: string
  }>
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<{
    id: number
    logo_path: string
    name: string
    origin_country: string
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
