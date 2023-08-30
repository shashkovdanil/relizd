import { component$ } from '@builder.io/qwik'

import { LinkTabs } from '~/components/LinkTabs'
import { Calendar } from '~/components/Calendar'
import { Title } from '~/components/Title'
import type { Release, ReleaseType } from '~/domain/release'

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

    return (
      <>
        <div class="mb-5">
          <LinkTabs
            data={[
              {
                name: 'Movies',
                href: '/movies/' + date,
                active: type === 'movies',
              },
              { name: 'TV', href: '/tv/' + date, active: type === 'tv' },
              {
                name: 'Games',
                href: '/games/' + date,
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
      </>
    )
  }
)
