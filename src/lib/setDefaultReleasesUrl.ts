import type { ReleaseType } from '~/domain/release'
import { MONTHS } from '~/lib/const'

export function setDefaultReleasesUrl(type: ReleaseType) {
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()

  return `/${type}/${MONTHS[currentMonth]}-${currentYear}`
}
