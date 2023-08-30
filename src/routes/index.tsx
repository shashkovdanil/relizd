import { component$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import type { DocumentHead } from '@builder.io/qwik-city'
import { LinkTabs } from '~/components/LinkTabs'
import { Calendar } from '~/components/Calendar'
import { Title } from '~/components/Title'
import { getReleases } from '~/services/api'
import { getAdjacentMonthDetails } from '~/lib/getAdjacentMonthDetails'

const LINKS = [
  {
    name: 'Movies',
    href: '/movies',
  },
  {
    name: 'TV',
    href: '/tv',
  },
  {
    name: 'Games',
    href: '/games',
  },
]

export const useData = routeLoader$(async () => {
  const {
    current: { monthRange, year, monthIndex },
  } = getAdjacentMonthDetails()

  const movies = await getReleases('movies', monthRange)

  return {
    movies,
    year,
    month: monthIndex,
  }
})

export default component$(() => {
  const data = useData()

  return (
    <>
      <div class="mb-5">
        <LinkTabs data={LINKS} />
      </div>
      <div class="mb-8">
        <Title level={1}>August 2023 Movie Releases</Title>
      </div>
      <Calendar
        month={data.value.month}
        year={data.value.year}
        releases={data.value.movies}
      />
    </>
  )
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
