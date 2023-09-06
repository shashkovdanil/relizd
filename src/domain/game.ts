type Rating = {
  id: number
  title: string
  count: number
  percent: number
}

type GameInGamesResponse = {
  id: number
  slug: string
  name: string
  released: string // yyyy-mm-dd
  tba: boolean
  background_image: string
  rating: number
  rating_top: number
  ratings: Rating[]
  ratings_count: number
  reviews_text_count: number
  added: number
  added_by_status: {
    yet: number
    owned: number
    beaten: number
    toplay: number
    dropped: number
    playing: number
  }
  metacritic: number
  playtime: number
  suggestions_count: number
  updated: string // yyyy-mm-dd
}

export type GamesResponse = {
  count: number
  next: string | null
  previous: string | null
  results: GameInGamesResponse[]
}

export type GameDetailsResponse = {
  id: number
  slug: string
  name: string
  name_original: string
  description: string
  metacritic: number | null
  metacritic_platforms: any[]
  released: string
  tba: boolean
  updated: string
  background_image: string
  background_image_additional: string
  website: string
  rating: number
  rating_top: number
  ratings: any[]
  reactions: any | null
  added: number
  added_by_status: {
    toplay: number
  }
  playtime: number
  screenshots_count: number
  movies_count: number
  creators_count: number
  achievements_count: number
  parent_achievements_count: number
  reddit_url: string
  reddit_name: string
  reddit_description: string
  reddit_logo: string
  reddit_count: number
  twitch_count: number
  youtube_count: number
  reviews_text_count: number
  ratings_count: number
  suggestions_count: number
  alternative_names: any[]
  metacritic_url: string
  parents_count: number
  additions_count: number
  game_series_count: number
  user_game: any | null
  reviews_count: number
  community_rating: number
  saturated_color: string
  dominant_color: string
  parent_platforms: {
    platform: {
      id: number
      name: string
      slug: string
    }
  }[]
  platforms: {
    platform: {
      id: number
      name: string
      slug: string
      image: string | null
      year_end: any | null
      year_start: any | null
      games_count: number
      image_background: string
    }
    released_at: string
    requirements: {
      minimum: string
    }
  }[]
  stores: {
    id: number
    url: string
    store: {
      id: number
      name: string
      slug: string
      domain: string
      games_count: number
      image_background: string
    }
  }[]
  developers: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  genres: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  tags: {
    id: number
    name: string
    slug: string
    language: string
    games_count: number
    image_background: string
  }[]
  publishers: {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
  }[]
  esrb_rating: any | null
  clip: any | null
  description_raw: string
}
