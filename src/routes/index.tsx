import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { DocumentHead } from '@builder.io/qwik-city'
import { getReleases } from '~/services/api'
import { getAdjacentMonthDetails } from '~/lib/getAdjacentMonthDetails'
import { ReleasesLayout } from '~/components/ReleasesLayout'

export const useData = routeLoader$(async params => {
  const {
    current: { monthRange, year, monthIndex },
  } = getAdjacentMonthDetails()

  const releases = await getReleases('movies', monthRange)

  return {
    releases,
    year,
    month: monthIndex,
    date: params.params.date,
  }
})

export default component$(() => {
  const data = useData()

  return <ReleasesLayout type="movies" {...data.value} />
})

export const head: DocumentHead = {
  title: 'Relizd',
  meta: [
    {
      name: 'description',
      content: 'Relizd',
    },
  ],
}
