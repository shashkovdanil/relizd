import { component$ } from '@builder.io/qwik'

import { LinkTabs } from '~/components/LinkTabs'
import { Calendar } from '~/components/Calendar'
import { Title } from '~/components/Title'
import { HeaderWithNav } from '~/components/HeaderWithNav'
import type { Release, ReleaseType } from '~/domain/release'
import { MONTHS } from '~/lib/const'

type Props = {
  type: ReleaseType
  month: number
  year: number
  releases: Release[]
  date: string
}

const releasesMap: Record<ReleaseType, string> = {
  movies: 'Movie',
  tv: 'TV',
  games: 'Game',
}

export const ReleasesLayout = component$<Props>(
  ({ type, month, year, releases, date }) => {
    const monthName = new Date(year, month).toLocaleString('default', {
      month: 'long',
    })

    const dateWithFallback = date || MONTHS[month] + '-' + year

    return (
      <>
        <HeaderWithNav />
        <main class="px-4 md:px-8">
          <div class="mb-5">
            <LinkTabs
              data={[
                {
                  name: 'Movies',
                  href: '/movies/' + dateWithFallback,
                  active: type === 'movies',
                },
                {
                  name: 'TV',
                  href: '/tv/' + dateWithFallback,
                  active: type === 'tv',
                },
                {
                  name: 'Games',
                  href: '/games/' + dateWithFallback,
                  active: type === 'games',
                },
              ]}
            />
          </div>
          <div class="mb-8">
            <Title level={1}>
              {monthName} {year} {releasesMap[type]} Releases
            </Title>
          </div>
          <div class="mb-12">
            <Calendar month={month} year={year} releases={releases} />
          </div>
        </main>
      </>
    )
  }
)
