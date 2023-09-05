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
  title: 'Relizd - interactive calendar for upcoming movies, TV shows, and games',
  meta: [
    {
      name: 'description',
      content:
        "Relizd is a user-friendly calendar designed for effortless browsing and tracking of upcoming video games, movies, and TV series. Discover the release dates of the latest entertainment content, and ensure you stay in the loop by subscribing to notifications. Don't miss out on anything!",
    },
  ],
}
