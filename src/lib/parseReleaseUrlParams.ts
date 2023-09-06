import { ReleaseType } from '~/domain/release'

type Parsed = {
  type: ReleaseType
  id: string
}

export function parseReleaseUrlParams(params: string) {
  const [id, type] = params.split('-')

  return { type, id } as Parsed
}
