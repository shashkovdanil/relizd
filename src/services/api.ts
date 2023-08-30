import type { ReleaseType, Release } from '~/domain/release'

export async function getReleases(type: ReleaseType, range: [string, string]) {
  const res = await fetch(
    `http://localhost:5173/api/${type}/?from=${range[0]}&to=${range[1]}`
  )
  const json = await res.json()

  return json as Release[]
}
