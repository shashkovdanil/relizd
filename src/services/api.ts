import type { ReleaseType, Release, ReleaseDetails } from '~/domain/release'
import { request } from '~/lib/request'

const API_URL = `${process.env['HOST']}/api`

export async function getReleases(type: ReleaseType, range: [string, string]) {
  const json = await request<Release[]>(
    `${API_URL}/${type}/?from=${range[0]}&to=${range[1]}`
  )

  return json
}

export async function getRelease(type: ReleaseType, id: string) {
  const json = await request<ReleaseDetails>(`${API_URL}/release/?type=${type}&id=${id}`)

  return json
}
