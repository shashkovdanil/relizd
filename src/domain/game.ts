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
