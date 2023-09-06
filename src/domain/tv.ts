export type TV = {
  backdrop_path: string
  first_air_date: string // 'yyyy-mm-dd'
  genre_ids: number[]
  id: number
  name: string
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export type TVsResponse = {
  page: number
  results: TV[]
  total_pages: number
  total_results: number
}

export type TVDetailResponse = {
  adult: boolean
  backdrop_path: string
  created_by: Array<{
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string
  }>
  episode_run_time: number[]
  first_air_date: string
  genres: Array<{
    id: number
    name: string
  }>
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: null | number
    season_number: number
    show_id: number
    still_path: null | string
  }
  name: string
  next_episode_to_air: null
  networks: Array<{
    id: number
    logo_path: string
    name: string
    origin_country: string
  }>
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Array<{
    id: number
    logo_path: null | string
    name: string
    origin_country: string
  }>
  production_countries: Array<{
    iso_3166_1: string
    name: string
  }>
  seasons: Array<{
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
  }>
  spoken_languages: Array<{
    english_name: string
    iso_639_1: string
    name: string
  }>
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
