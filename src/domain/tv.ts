import type { Genre } from './genre'

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

export type TVDetails = {
  adult: boolean
  backdrop_path: string
  created_by: {
    id: number
    credit_id: string
    name: string
    gender: number
    profile_path: string | null
  }[]
  episode_run_time: number[]
  first_air_date: string // 'yyyy-mm-dd'
  genres: Genre[]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string // 'yyyy-mm-dd'
  last_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string // 'yyyy-mm-dd'
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string | null
  }
  name: string
  next_episode_to_air: {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string // 'yyyy-mm-dd'
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number | null
    season_number: number
    show_id: number
    still_path: string | null
  }
  networks: [
    {
      id: 16
      logo_path: '/wju8KhOUsR5y4bH9p3Jc50hhaLO.png'
      name: 'CBS'
      origin_country: 'US'
    },
    {
      id: 3353
      logo_path: '/gIAcGTjKKr0KOHL5s4O36roJ8p7.png'
      name: 'Peacock'
      origin_country: 'US'
    },
  ]
  number_of_episodes: 161
  number_of_seasons: 5
  origin_country: ['US']
  original_language: 'en'
  original_name: 'Love Island'
  overview: 'American version of the British dating reality competition in which ten singles come to stay in a villa for a few weeks and have to couple up with one another. Over the course of those weeks, they face the public vote and might be eliminated from the show. Other islanders join and try to break up the couples.'
  popularity: 2353.462
  poster_path: '/kU2y21cls8WargMaX7KI47URMjD.jpg'
  production_companies: [
    {
      id: 21040
      logo_path: '/d9oN0WNidszq5epSGKGsnn6DyDN.png'
      name: 'ITV Studios America'
      origin_country: 'US'
    },
    {
      id: 67330
      logo_path: null
      name: 'ITV Global Entertainment'
      origin_country: ''
    },
  ]
  production_countries: { iso_3166_1: string; name: string }[]
  seasons: [
    {
      air_date: '2021-07-12'
      episode_count: 16
      id: 202486
      name: 'Specials'
      overview: ''
      poster_path: '/o21uyEoCvYVzfHE4waq86XRExb4.jpg'
      season_number: 0
      vote_average: 0
    },
    {
      air_date: '2019-07-09'
      episode_count: 22
      id: 126286
      name: 'Season 1'
      overview: ''
      poster_path: '/bH6RigCjRGUoy3vyrWubMeCxIMN.jpg'
      season_number: 1
      vote_average: 0
    },
    {
      air_date: '2020-08-24'
      episode_count: 34
      id: 146400
      name: 'Season 2'
      overview: ''
      poster_path: '/lt8O2IxT5lnZzY8SfVqf5hE1s5N.jpg'
      season_number: 2
      vote_average: 0
    },
    {
      air_date: '2021-07-07'
      episode_count: 29
      id: 199346
      name: 'Season 3'
      overview: ''
      poster_path: '/fAqClLPhYcVgKhw82NAMzAG3tkl.jpg'
      season_number: 3
      vote_average: 8.2
    },
    {
      air_date: '2022-07-19'
      episode_count: 38
      id: 297359
      name: 'Season 4'
      overview: ''
      poster_path: '/pSjZkF38mcTReAJA4bCzHiOJ8dW.jpg'
      season_number: 4
      vote_average: 10
    },
    {
      air_date: '2023-07-18'
      episode_count: 38
      id: 346094
      name: 'Season 5'
      overview: ''
      poster_path: '/viPuOKjuWKDiFnPsFHARaL8PWm1.jpg'
      season_number: 5
      vote_average: 0
    },
  ]
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
}
