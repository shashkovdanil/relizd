export type Release = {
  id: number
  title: string
  releasedAt: string
  cover: string
  rating: number
  isUpcoming: boolean
}

export type ReleaseType = 'movies' | 'tv' | 'games'
