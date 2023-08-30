import type { RequestEvent } from '@builder.io/qwik-city'
import { setDefaultReleasesUrl } from '~/lib/setDefaultReleasesUrl'

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(302, setDefaultReleasesUrl('movies'))
}
