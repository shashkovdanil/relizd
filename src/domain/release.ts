export type Release = {
  type: ReleaseType
  id: number
  title: string
  releasedAt: string
  cover: string
  rating: string | null
  isUpcoming: boolean
}

export type ReleaseType = 'movies' | 'tv' | 'games'

export type ReleaseDetails = {
  type: ReleaseType
  id: number
  title: string
  description: string
  poster: string
  backdrop: string
  genres: string[]
  releasedAt: string
  rating:  number | null
  ratingCount: number
  imdbUrl?: string
}
